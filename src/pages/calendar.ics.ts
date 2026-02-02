import type { APIRoute } from 'astro';
import { localEvents } from '../data/events';

// Force SSR for dynamic content
export const prerender = false;

// Helper to format date as ICS format (YYYYMMDDTHHmmssZ)
function formatIcsDate(date: Date): string {
    return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
}

// Helper to escape special characters in ICS text
function escapeIcs(text: string): string {
    return text
        .replace(/\\/g, '\\\\')
        .replace(/;/g, '\\;')
        .replace(/,/g, '\\,')
        .replace(/\n/g, '\\n');
}

export const GET: APIRoute = async () => {
    // Generate ICS content
    const icsLines: string[] = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//Twin Cities Dad//Events Calendar//EN',
        'CALSCALE:GREGORIAN',
        'METHOD:PUBLISH',
        'X-WR-CALNAME:Twin Cities Dad Events',
        'X-WR-TIMEZONE:America/Chicago',
    ];

    // Add each event
    localEvents.forEach(event => {
        const startDate = formatIcsDate(event.date);
        // Default to 2 hour duration if no end time
        const endDate = formatIcsDate(new Date(event.date.getTime() + 2 * 60 * 60 * 1000));

        icsLines.push('BEGIN:VEVENT');
        icsLines.push(`UID:${event.id}@twincitiesdad.com`);
        icsLines.push(`DTSTAMP:${formatIcsDate(new Date())}`);
        icsLines.push(`DTSTART:${startDate}`);
        icsLines.push(`DTEND:${endDate}`);
        icsLines.push(`SUMMARY:${escapeIcs(event.title)}`);
        icsLines.push(`DESCRIPTION:${escapeIcs(event.description || '')}\\n\\nType: ${event.type}\\nRegion: ${event.region}\\nKid-Friendly: ${event.kidFriendly}`);
        icsLines.push(`LOCATION:${escapeIcs(event.location || '')}`);
        if (event.link) {
            icsLines.push(`URL:${event.link}`);
        }
        icsLines.push('END:VEVENT');
    });

    icsLines.push('END:VCALENDAR');

    const icsContent = icsLines.join('\r\n');

    // Return as ICS file
    return new Response(icsContent, {
        status: 200,
        headers: {
            'Content-Type': 'text/calendar; charset=utf-8',
            'Content-Disposition': 'attachment; filename="twincitiesdad-events.ics"',
            'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
        },
    });
};
