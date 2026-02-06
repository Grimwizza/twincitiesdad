import ical from 'node-ical';
import Parser from 'rss-parser';
import { type Event } from '../data/events';

// Create a new RSS parser instance
const parser = new Parser();

interface EventSource {
    type: 'ics' | 'rss';
    url: string;
    name?: string;
    region: 'mpls' | 'stpaul' | 'north' | 'south' | 'east' | 'west';
    defaultType?: Event['type'];
    parseTypeFromTitle?: boolean;
    defaultImage?: string;
}

// Event type keywords to match from title prefixes like [Concert] or [Protest]
const EVENT_TYPE_KEYWORDS: Record<string, Event['type']> = {
    'protest': 'protest',
    'concert': 'concert',
    'music': 'concert',
    'community': 'community',
    'sports': 'sports',
    'game': 'sports',
    'arts': 'arts',
    'art': 'arts',
    'theater': 'arts',
    'theatre': 'arts',
};

// Parse event type from title prefix like "[Concert] Winter Jazz Festival"
function parseEventTypeFromTitle(title: string): { type: Event['type']; cleanTitle: string } {
    const prefixMatch = title.match(/^\[([^\]]+)\]\s*/i);
    if (prefixMatch) {
        const prefix = prefixMatch[1].toLowerCase();
        const matchedType = EVENT_TYPE_KEYWORDS[prefix];
        if (matchedType) {
            return {
                type: matchedType,
                cleanTitle: title.replace(prefixMatch[0], '').trim()
            };
        }
    }
    return { type: 'community', cleanTitle: title };
}

// Build sources array dynamically
function getSources(): EventSource[] {
    const sources: EventSource[] = [];

    // Google Calendar (primary source for managing events)
    const googleCalendarUrl = import.meta.env.GOOGLE_CALENDAR_ICS_URL;
    if (googleCalendarUrl) {
        sources.push({
            type: 'ics',
            url: googleCalendarUrl,
            name: 'Google Calendar',
            region: 'mpls', // Default region, can be overridden in event description
            parseTypeFromTitle: true, // Enable [Type] prefix parsing
        });
    }

    // Minnesota Holidays (fallback/example source)
    sources.push({
        type: 'ics',
        url: 'https://www.officeholidays.com/ics/usa/minnesota',
        name: 'MN Holidays',
        region: 'mpls',
        defaultType: 'community',
    });

    return sources;
}

export async function fetchExternalEvents(): Promise<Event[]> {
    try {
        const allEvents: Event[] = [];
        const sources = getSources();

        for (const source of sources) {
            try {
                if (source.type === 'ics') {
                    const events = await fetchIcsEvents(source);
                    allEvents.push(...events);
                } else if (source.type === 'rss') {
                    const events = await fetchRssEvents(source);
                    allEvents.push(...events);
                }
            } catch (error) {
                console.error(`Error fetching from ${source.name || source.url}:`, error);
            }
        }

        return allEvents;
    } catch (globalError) {
        console.error('CRITICAL: Failed to fetch external events:', globalError);
        return [];
    }
}

async function fetchIcsEvents(source: EventSource): Promise<Event[]> {
    const events: Event[] = [];
    try {
        const response = await fetch(source.url, {
            headers: { 'User-Agent': 'TwinCitiesDad-Calendar/1.0' }
        });

        if (!response.ok) {
            console.error(`Failed to fetch ICS from ${source.name || source.url}: ${response.statusText}`);
            return [];
        }

        const data = await response.text();
        const parsed = await ical.async.parseICS(data);

        for (const k in parsed) {
            const ev = parsed[k];
            if (ev.type === 'VEVENT') {
                // Check if it's a valid date object, if not, try to parse or skip
                const date = ev.start instanceof Date ? ev.start : new Date(ev.start);

                // Helper to get string from potentially object property
                const getIcsValue = (val: any) => {
                    if (!val) return '';
                    if (typeof val === 'string') return val;
                    if (typeof val === 'object' && val.val) return val.val;
                    return String(val);
                };

                const rawTitle = (getIcsValue(ev.summary) || 'Untitled Event').replace(/^Minnesota:\s*/, '');
                const description = getIcsValue(ev.description) || 'No description available.';
                const location = getIcsValue(ev.location) || 'Twin Cities';

                // Parse event type from title prefix if enabled (e.g., "[Concert] Jazz Night")
                let eventType: Event['type'] = source.defaultType || 'community';
                let cleanTitle = rawTitle;

                if (source.parseTypeFromTitle) {
                    const parsed = parseEventTypeFromTitle(rawTitle);
                    eventType = parsed.type;
                    cleanTitle = parsed.cleanTitle;
                }

                // Parse region from description if present (e.g., "#region:stpaul")
                let region = source.region;
                const regionMatch = description.match(/#region:(\w+)/i);
                if (regionMatch && ['mpls', 'stpaul', 'north', 'south', 'east', 'west'].includes(regionMatch[1])) {
                    region = regionMatch[1] as EventSource['region'];
                }

                // Parse kid-friendly from description if present
                let kidFriendly: Event['kidFriendly'] = 'yes';
                if (description.includes('#caution') || description.includes('#kids:caution')) {
                    kidFriendly = 'caution';
                } else if (description.includes('#nokids') || description.includes('#kids:no')) {
                    kidFriendly = 'no';
                }

                events.push({
                    id: `ics-${ev.uid}`,
                    title: cleanTitle,
                    description: description.replace(/#(region|kids|caution|nokids):\w*/gi, '').trim(),
                    date: date,
                    location: location,
                    type: eventType,
                    region: region,
                    kidFriendly: kidFriendly,
                    link: ev.url || undefined
                });
            }
        }
    } catch (e) {
        console.error(`Failed to parse ICS from ${source.name || source.url}:`, e);
    }
    return events;
}

async function fetchRssEvents(source: EventSource): Promise<Event[]> {
    const events: Event[] = [];
    try {
        const feed = await parser.parseURL(source.url);

        feed.items.forEach((item, index) => {
            // RSS feeds are trickier as they don't always have a clear 'date' field
            // We often have to parse it from the pubDate or description.
            const date = item.pubDate ? new Date(item.pubDate) : new Date();

            events.push({
                id: `rss-${index}-${date.getTime()}`,
                title: item.title || 'Untitled',
                description: item.contentSnippet || item.content || '',
                date: date,
                location: 'See Link',
                type: 'other',
                region: source.region,
                kidFriendly: 'caution',
                link: item.link
            });
        });
    } catch (e) {
        console.error("Failed to parse RSS", e);
    }
    return events;
}
