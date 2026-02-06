import { e as createAstro, c as createComponent, r as renderComponent, a as renderHead, g as renderSlot, d as renderTemplate, m as maybeRenderHead, b as addAttribute, F as Fragment, f as renderScript } from '../chunks/astro/server_BvU6N8yG.mjs';
import 'piccolore';
import { $ as $$BaseHead, a as $$Header, b as $$Footer } from '../chunks/Header_BwH3tMVt.mjs';
import { l as localEvents } from '../chunks/events_Bd-pg_yU.mjs';
import { $ as $$FormattedDate } from '../chunks/FormattedDate_B4iQuAHj.mjs';
/* empty css                                  */
import 'clsx';
import { a as SITE_TITLE } from '../chunks/consts_C6UwURia.mjs';
import ical from 'node-ical';
import Parser from 'rss-parser';
export { renderers } from '../renderers.mjs';

const $$Astro$3 = createAstro("https://twincitiesdad.com");
const $$PageLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$PageLayout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description })}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/benluebbert/Documents/Sites/twincitiesdad/src/layouts/PageLayout.astro", void 0);

const $$Astro$2 = createAstro("https://twincitiesdad.com");
const $$EventCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$EventCard;
  const { event } = Astro2.props;
  const typeColors = {
    protest: "bg-red-500/20 text-red-300 border-red-500/30",
    concert: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    community: "bg-green-500/20 text-green-300 border-green-500/30",
    sports: "bg-orange-500/20 text-orange-300 border-orange-500/30",
    arts: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    other: "bg-gray-500/20 text-gray-300 border-gray-500/30"
  };
  const typeLabels = {
    protest: "\u{1F6A8} Protest / Action",
    concert: "\u{1F3B5} Concert",
    community: "\u{1F3E1} Community",
    sports: "\u{1F3D2} Sports",
    arts: "\u{1F3AD} Arts & Theater",
    other: "\u{1F4C5} Event"
  };
  const kidFriendlyConfig = {
    yes: { label: "\u{1F476} Kids Safe", class: "bg-green-500/10 text-green-400 border-green-500/20" },
    no: { label: "\u{1F51E} 18+ / Not Rec", class: "bg-red-500/10 text-red-400 border-red-500/20" },
    caution: { label: "\u26A0\uFE0F Use Caution", class: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20" }
  };
  const badgeClass = typeColors[event.type] || typeColors.other;
  const label = typeLabels[event.type] || typeLabels.other;
  const kidBadge = event.kidFriendly ? kidFriendlyConfig[event.kidFriendly] : null;
  return renderTemplate`${maybeRenderHead()}<article class="event-card"${addAttribute(event.type, "data-type")}${addAttribute(event.kidFriendly, "data-kid-friendly")}${addAttribute(event.price === "Free" || event.price === "Free to Watch" ? "yes" : "no", "data-is-free")}${addAttribute(event.region, "data-region")} data-astro-cid-h4bw6n5x> <div class="event-content" data-astro-cid-h4bw6n5x> <div class="event-header" data-astro-cid-h4bw6n5x> <div class="badge-group" data-astro-cid-h4bw6n5x> <span${addAttribute(`event-badge ${badgeClass}`, "class")} data-astro-cid-h4bw6n5x>${label}</span> ${kidBadge && renderTemplate`<span${addAttribute(`event-badge ${kidBadge.class}`, "class")} data-astro-cid-h4bw6n5x>${kidBadge.label}</span>`} </div> ${event.price && renderTemplate`<span class="event-price" data-astro-cid-h4bw6n5x>${event.price}</span>`} </div> <h3 class="event-title" data-astro-cid-h4bw6n5x> ${event.link ? renderTemplate`<a${addAttribute(event.link, "href")} target="_blank" rel="noopener noreferrer" data-astro-cid-h4bw6n5x> ${event.title} </a>` : event.title} </h3> <div class="event-meta" data-astro-cid-h4bw6n5x> <div class="meta-item time" data-astro-cid-h4bw6n5x> <span class="icon" data-astro-cid-h4bw6n5x>🕒</span> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": event.date, "data-astro-cid-h4bw6n5x": true })} <span class="time-text" data-astro-cid-h4bw6n5x>at ${event.date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" })}</span> </div> <div class="meta-item location" data-astro-cid-h4bw6n5x> <span class="icon" data-astro-cid-h4bw6n5x>📍</span> <span data-astro-cid-h4bw6n5x>${event.location}</span> </div> </div> <p class="event-description" data-astro-cid-h4bw6n5x>${event.description}</p> <div class="card-actions" data-astro-cid-h4bw6n5x> ${event.link && renderTemplate`<a${addAttribute(event.link, "href")} target="_blank" rel="noopener noreferrer" class="event-link" data-astro-cid-h4bw6n5x>
More Details →
</a>`} <button class="share-btn"${addAttribute(event.title, "data-share-title")}${addAttribute(`${event.title} at ${event.location}`, "data-share-text")}${addAttribute(event.link || Astro2.url.href, "data-share-url")} aria-label="Share event" data-astro-cid-h4bw6n5x> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-h4bw6n5x><circle cx="18" cy="5" r="3" data-astro-cid-h4bw6n5x></circle><circle cx="6" cy="12" r="3" data-astro-cid-h4bw6n5x></circle><circle cx="18" cy="19" r="3" data-astro-cid-h4bw6n5x></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" data-astro-cid-h4bw6n5x></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" data-astro-cid-h4bw6n5x></line></svg> </button> </div> </div> ${event.image && renderTemplate`<div class="event-image" data-astro-cid-h4bw6n5x> <img${addAttribute(event.image, "src")} alt="" loading="lazy" onerror="this.parentElement.style.display='none'" data-astro-cid-h4bw6n5x> </div>`} </article> `;
}, "/Users/benluebbert/Documents/Sites/twincitiesdad/src/components/EventCard.astro", void 0);

const $$EventList = createComponent(($$result, $$props, $$slots) => {
  const sortedEvents = [...localEvents].sort(
    (a, b) => a.date.getTime() - b.date.getTime()
  );
  const now = /* @__PURE__ */ new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const nextWeek = new Date(today);
  nextWeek.setDate(nextWeek.getDate() + 7);
  const nextMonth = new Date(today);
  nextMonth.setMonth(nextMonth.getMonth() + 1);
  const formatDate = (date) => date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  const weekStart = new Date(today);
  weekStart.setDate(weekStart.getDate() + 1);
  const weekEnd = new Date(nextWeek);
  weekEnd.setDate(weekEnd.getDate() - 1);
  `${formatDate(weekStart)} - ${formatDate(weekEnd)}`;
  const monthStart = new Date(nextWeek);
  const monthEnd = new Date(nextMonth);
  monthEnd.setDate(monthEnd.getDate() - 1);
  `${formatDate(monthStart)} - ${formatDate(monthEnd)}`;
  const groups = {
    today: [],
    week: [],
    month: [],
    upcoming: []
  };
  sortedEvents.forEach((event) => {
    const eventDate = new Date(event.date);
    const eventDay = new Date(
      eventDate.getFullYear(),
      eventDate.getMonth(),
      eventDate.getDate()
    );
    if (eventDay < today) return;
    if (eventDay.getTime() === today.getTime()) {
      groups.today.push(event);
    } else if (eventDay < nextWeek) {
      groups.week.push(event);
    } else if (eventDay < nextMonth) {
      groups.month.push(event);
    } else {
      groups.upcoming.push(event);
    }
  });
  return renderTemplate`${maybeRenderHead()}<div class="events-container" data-astro-cid-ugu5mlpi> ${groups.today.length > 0 && renderTemplate`<section class="event-group" data-astro-cid-ugu5mlpi> <h2 class="group-title" data-astro-cid-ugu5mlpi>🔥 Happening Today</h2> <div class="event-list" data-astro-cid-ugu5mlpi> ${groups.today.map((event) => renderTemplate`${renderComponent($$result, "EventCard", $$EventCard, { "event": event, "data-astro-cid-ugu5mlpi": true })}`)} </div> </section>`} ${groups.week.length > 0 && renderTemplate`<section class="event-group" data-astro-cid-ugu5mlpi> <h2 class="group-title" data-astro-cid-ugu5mlpi> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="title-icon" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-ugu5mlpi> ${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-ugu5mlpi": true }, { "default": ($$result2) => renderTemplate` <rect x="3" y="4" width="18" height="18" rx="2" ry="2" data-astro-cid-ugu5mlpi></rect> <line x1="16" y1="2" x2="16" y2="6" data-astro-cid-ugu5mlpi></line> <line x1="8" y1="2" x2="8" y2="6" data-astro-cid-ugu5mlpi></line> <line x1="3" y1="10" x2="21" y2="10" data-astro-cid-ugu5mlpi></line> ` })} </svg>
This Week
</h2> <div class="event-list" data-astro-cid-ugu5mlpi> ${groups.week.map((event) => renderTemplate`${renderComponent($$result, "EventCard", $$EventCard, { "event": event, "data-astro-cid-ugu5mlpi": true })}`)} </div> </section>`} ${groups.month.length > 0 && renderTemplate`<section class="event-group" data-astro-cid-ugu5mlpi> <h2 class="group-title" data-astro-cid-ugu5mlpi>🗓️ This Month</h2> <div class="event-list" data-astro-cid-ugu5mlpi> ${groups.month.map((event) => renderTemplate`${renderComponent($$result, "EventCard", $$EventCard, { "event": event, "data-astro-cid-ugu5mlpi": true })}`)} </div> </section>`} ${groups.upcoming.length > 0 && renderTemplate`<section class="event-group" data-astro-cid-ugu5mlpi> <h2 class="group-title" data-astro-cid-ugu5mlpi>🔮 Upcoming</h2> <div class="event-list" data-astro-cid-ugu5mlpi> ${groups.upcoming.map((event) => renderTemplate`${renderComponent($$result, "EventCard", $$EventCard, { "event": event, "data-astro-cid-ugu5mlpi": true })}`)} </div> </section>`} ${sortedEvents.length === 0 && renderTemplate`<div class="empty-state" data-astro-cid-ugu5mlpi> <p data-astro-cid-ugu5mlpi>No upcoming events found via our local feed.</p> </div>`} <!-- Dynamic empty state shown by JS when filters return no results --> <div id="filtered-empty-state" class="empty-state filtered-empty" style="display: none;" data-astro-cid-ugu5mlpi> <p data-astro-cid-ugu5mlpi>😕 No events match your current filters.</p> <button id="clear-filters-btn" class="clear-filters-btn" data-astro-cid-ugu5mlpi>Clear All Filters</button> </div> </div> `;
}, "/Users/benluebbert/Documents/Sites/twincitiesdad/src/components/EventList.astro", void 0);

const $$EventFilters = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="filters-container" data-astro-cid-5twzna7j> <div class="filter-group type-filters" data-astro-cid-5twzna7j> <button class="filter-pill active" data-filter="all" data-astro-cid-5twzna7j>All Events</button> <button class="filter-pill" data-filter="protest" data-astro-cid-5twzna7j> <span class="icon" data-astro-cid-5twzna7j>🚨</span> Protest
</button> <button class="filter-pill" data-filter="concert" data-astro-cid-5twzna7j> <span class="icon" data-astro-cid-5twzna7j>🎵</span> Concert
</button> <button class="filter-pill" data-filter="community" data-astro-cid-5twzna7j> <span class="icon" data-astro-cid-5twzna7j>🏡</span> Community
</button> <button class="filter-pill" data-filter="sports" data-astro-cid-5twzna7j> <span class="icon" data-astro-cid-5twzna7j>🏒</span> Sports
</button> <button class="filter-pill" data-filter="arts" data-astro-cid-5twzna7j> <span class="icon" data-astro-cid-5twzna7j>🎭</span> Arts
</button> </div> <div class="filter-controls-right" data-astro-cid-5twzna7j> <div class="filter-group toggle-group" data-astro-cid-5twzna7j> <label class="toggle-switch" data-astro-cid-5twzna7j> <input type="checkbox" id="free-only-toggle" data-astro-cid-5twzna7j> <span class="slider round" data-astro-cid-5twzna7j></span> </label> <span class="toggle-label" data-astro-cid-5twzna7j>💰 Free Only</span> </div> <div class="filter-group toggle-group" data-astro-cid-5twzna7j> <label class="toggle-switch" data-astro-cid-5twzna7j> <input type="checkbox" id="kid-friendly-toggle" data-astro-cid-5twzna7j> <span class="slider round" data-astro-cid-5twzna7j></span> </label> <span class="toggle-label" data-astro-cid-5twzna7j>👶 Kid Friendly Only</span> </div> </div> </div> `;
}, "/Users/benluebbert/Documents/Sites/twincitiesdad/src/components/EventFilters.astro", void 0);

const $$Astro$1 = createAstro("https://twincitiesdad.com");
const $$CalendarView = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CalendarView;
  const { initialMonth, initialYear, events } = Astro2.props;
  const today = /* @__PURE__ */ new Date();
  const currentMonth = initialMonth !== void 0 ? initialMonth : today.getMonth();
  const currentYear = initialYear !== void 0 ? initialYear : today.getFullYear();
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const currentMonthName = monthNames[currentMonth];
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const grid = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    grid.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    grid.push(i);
  }
  const getEventsForDay = (day) => {
    if (!day) return [];
    return events.filter((event) => {
      const eDate = new Date(event.date);
      return eDate.getDate() === day && eDate.getMonth() === currentMonth && eDate.getFullYear() === currentYear;
    });
  };
  return renderTemplate`${maybeRenderHead()}<div class="calendar-container" data-astro-cid-mawakmrg> <div class="calendar-header" data-astro-cid-mawakmrg> <h3 data-astro-cid-mawakmrg>${currentMonthName} ${currentYear}</h3> <div class="view-controls" data-astro-cid-mawakmrg> <a${addAttribute(`?view=calendar&month=${currentMonth === 0 ? 11 : currentMonth - 1}&year=${currentMonth === 0 ? currentYear - 1 : currentYear}`, "href")} class="view-btn" id="prev-month" aria-label="Previous Month" data-astro-reload data-astro-cid-mawakmrg>←</a> <a${addAttribute(`?view=calendar&month=${currentMonth === 11 ? 0 : currentMonth + 1}&year=${currentMonth === 11 ? currentYear + 1 : currentYear}`, "href")} class="view-btn" id="next-month" aria-label="Next Month" data-astro-reload data-astro-cid-mawakmrg>→</a> </div> </div> <div class="calendar-grid" data-astro-cid-mawakmrg> <div class="weekday" data-astro-cid-mawakmrg>Sun</div> <div class="weekday" data-astro-cid-mawakmrg>Mon</div> <div class="weekday" data-astro-cid-mawakmrg>Tue</div> <div class="weekday" data-astro-cid-mawakmrg>Wed</div> <div class="weekday" data-astro-cid-mawakmrg>Thu</div> <div class="weekday" data-astro-cid-mawakmrg>Fri</div> <div class="weekday" data-astro-cid-mawakmrg>Sat</div> ${grid.map((day) => {
    const dayEvents = day ? getEventsForDay(day) : [];
    const isToday = day === today.getDate() && currentMonth === today.getMonth();
    return renderTemplate`<div${addAttribute(`calendar-day ${day ? "active" : "empty"} ${isToday ? "current" : ""}`, "class")} data-astro-cid-mawakmrg> ${day && renderTemplate`<span class="day-number" data-astro-cid-mawakmrg>${day}</span>`} ${dayEvents.length > 0 && renderTemplate`<div class="day-events" data-astro-cid-mawakmrg> ${dayEvents.slice(0, 3).map((event) => event.link ? renderTemplate`<a${addAttribute(event.link, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(`cal-event-pill ${event.type}`, "class")}${addAttribute(`${event.title} (${event.type})`, "title")}${addAttribute(event.id, "data-event-id")}${addAttribute(event.kidFriendly, "data-kid-friendly")}${addAttribute(event.price === "Free" || event.price === "Free to Watch" ? "yes" : "no", "data-is-free")} data-astro-cid-mawakmrg> ${event.title} </a>` : renderTemplate`<span${addAttribute(`cal-event-pill ${event.type} no-link`, "class")}${addAttribute(`${event.title} (${event.type})`, "title")}${addAttribute(event.id, "data-event-id")}${addAttribute(event.kidFriendly, "data-kid-friendly")}${addAttribute(event.price === "Free" || event.price === "Free to Watch" ? "yes" : "no", "data-is-free")} data-astro-cid-mawakmrg> ${event.title} </span>`)} ${dayEvents.length > 3 && renderTemplate`<div class="more-events" data-astro-cid-mawakmrg>+${dayEvents.length - 3} more</div>`} </div>`} </div>`;
  })} </div> </div> `;
}, "/Users/benluebbert/Documents/Sites/twincitiesdad/src/components/CalendarView.astro", void 0);

const $$MapView = createComponent(($$result, $$props, $$slots) => {
  const regionCounts = localEvents.reduce((acc, event) => {
    acc[event.region] = (acc[event.region] || 0) + 1;
    return acc;
  }, {});
  const regions = [
    { id: "north", name: "North Metro", path: "M 100,0 L 300,0 L 300,100 L 100,100 Z" },
    { id: "west", name: "West Metro", path: "M 0,0 L 100,0 L 100,380 L 0,380 Z" },
    { id: "mpls", name: "Minneapolis", path: "M 100,100 L 200,100 L 200,280 L 100,280 Z" },
    { id: "stpaul", name: "St. Paul", path: "M 200,100 L 300,100 L 300,280 L 200,280 Z" },
    { id: "east", name: "East Metro", path: "M 300,0 L 400,0 L 400,380 L 300,380 Z" },
    { id: "south", name: "South Metro", path: "M 100,280 L 300,280 L 300,380 L 100,380 Z" }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="map-container" data-astro-cid-t7xhuenr> <div class="map-wrapper" data-astro-cid-t7xhuenr> <svg viewBox="0 0 400 380" class="metro-map" data-astro-cid-t7xhuenr> <defs data-astro-cid-t7xhuenr> <filter id="glow" x="-20%" y="-20%" width="140%" height="140%" data-astro-cid-t7xhuenr> <feGaussianBlur stdDeviation="3" result="blur" data-astro-cid-t7xhuenr></feGaussianBlur> <feComposite in="SourceGraphic" in2="blur" operator="over" data-astro-cid-t7xhuenr></feComposite> </filter> </defs> ${regions.map((region) => renderTemplate`<g class="region-group"${addAttribute(region.id, "data-region")} tabindex="0" role="button"${addAttribute(`Filter by ${region.name}`, "aria-label")} data-astro-cid-t7xhuenr> <path${addAttribute(region.path, "d")}${addAttribute(`region-path ${region.id}`, "class")} data-astro-cid-t7xhuenr></path> <text x="0" y="0" class="region-label" text-anchor="middle"${addAttribute(`transform-box: fill-box; transform-origin: center; transform: translate(${region.id === "mpls" ? "150px, 190px" : region.id === "stpaul" ? "250px, 190px" : region.id === "north" ? "200px, 50px" : region.id === "south" ? "200px, 330px" : region.id === "west" ? "50px, 190px" : "350px, 190px"})`, "style")} data-astro-cid-t7xhuenr> ${region.name} ${regionCounts[region.id] && renderTemplate`<tspan x="0" dy="1.2em" class="region-count" data-astro-cid-t7xhuenr>(${regionCounts[region.id]})</tspan>`} </text> </g>`)} </svg> </div> <div class="map-instructions" data-astro-cid-t7xhuenr> <p data-astro-cid-t7xhuenr>Select a region to show events near you.</p> <button id="reset-map-filter" class="reset-btn hidden" data-astro-cid-t7xhuenr>Clear Selection</button> </div> </div> `;
}, "/Users/benluebbert/Documents/Sites/twincitiesdad/src/components/MapView.astro", void 0);

const parser = new Parser();
const EVENT_TYPE_KEYWORDS = {
  "protest": "protest",
  "concert": "concert",
  "music": "concert",
  "community": "community",
  "sports": "sports",
  "game": "sports",
  "arts": "arts",
  "art": "arts",
  "theater": "arts",
  "theatre": "arts"
};
function parseEventTypeFromTitle(title) {
  const prefixMatch = title.match(/^\[([^\]]+)\]\s*/i);
  if (prefixMatch) {
    const prefix = prefixMatch[1].toLowerCase();
    const matchedType = EVENT_TYPE_KEYWORDS[prefix];
    if (matchedType) {
      return {
        type: matchedType,
        cleanTitle: title.replace(prefixMatch[0], "").trim()
      };
    }
  }
  return { type: "community", cleanTitle: title };
}
function getSources() {
  const sources = [];
  const googleCalendarUrl = "https://calendar.google.com/calendar/embed?src=po92bfo5vcg0k099arlcm9femqcglfa2%40import.calendar.google.com&ctz=America%2FChicago";
  {
    sources.push({
      type: "ics",
      url: googleCalendarUrl,
      name: "Google Calendar",
      region: "mpls",
      // Default region, can be overridden in event description
      parseTypeFromTitle: true
      // Enable [Type] prefix parsing
    });
  }
  sources.push({
    type: "ics",
    url: "https://www.officeholidays.com/ics/usa/minnesota",
    name: "MN Holidays",
    region: "mpls",
    defaultType: "community"
  });
  return sources;
}
async function fetchExternalEvents() {
  try {
    const allEvents = [];
    const sources = getSources();
    for (const source of sources) {
      try {
        if (source.type === "ics") {
          const events = await fetchIcsEvents(source);
          allEvents.push(...events);
        } else if (source.type === "rss") {
          const events = await fetchRssEvents(source);
          allEvents.push(...events);
        }
      } catch (error) {
        console.error(`Error fetching from ${source.name || source.url}:`, error);
      }
    }
    return allEvents;
  } catch (globalError) {
    console.error("CRITICAL: Failed to fetch external events:", globalError);
    return [];
  }
}
async function fetchIcsEvents(source) {
  const events = [];
  try {
    const response = await fetch(source.url, {
      headers: { "User-Agent": "TwinCitiesDad-Calendar/1.0" }
    });
    if (!response.ok) {
      console.error(`Failed to fetch ICS from ${source.name || source.url}: ${response.statusText}`);
      return [];
    }
    const data = await response.text();
    const parsed = await ical.async.parseICS(data);
    for (const k in parsed) {
      const ev = parsed[k];
      if (ev.type === "VEVENT") {
        const date = ev.start instanceof Date ? ev.start : new Date(ev.start);
        const getIcsValue = (val) => {
          if (!val) return "";
          if (typeof val === "string") return val;
          if (typeof val === "object" && val.val) return val.val;
          return String(val);
        };
        const rawTitle = (getIcsValue(ev.summary) || "Untitled Event").replace(/^Minnesota:\s*/, "");
        const description = getIcsValue(ev.description) || "No description available.";
        const location = getIcsValue(ev.location) || "Twin Cities";
        let eventType = source.defaultType || "community";
        let cleanTitle = rawTitle;
        if (source.parseTypeFromTitle) {
          const parsed2 = parseEventTypeFromTitle(rawTitle);
          eventType = parsed2.type;
          cleanTitle = parsed2.cleanTitle;
        }
        let region = source.region;
        const regionMatch = description.match(/#region:(\w+)/i);
        if (regionMatch && ["mpls", "stpaul", "north", "south", "east", "west"].includes(regionMatch[1])) {
          region = regionMatch[1];
        }
        let kidFriendly = "yes";
        if (description.includes("#caution") || description.includes("#kids:caution")) {
          kidFriendly = "caution";
        } else if (description.includes("#nokids") || description.includes("#kids:no")) {
          kidFriendly = "no";
        }
        events.push({
          id: `ics-${ev.uid}`,
          title: cleanTitle,
          description: description.replace(/#(region|kids|caution|nokids):\w*/gi, "").trim(),
          date,
          location,
          type: eventType,
          region,
          kidFriendly,
          link: ev.url || void 0
        });
      }
    }
  } catch (e) {
    console.error(`Failed to parse ICS from ${source.name || source.url}:`, e);
  }
  return events;
}
async function fetchRssEvents(source) {
  const events = [];
  try {
    const feed = await parser.parseURL(source.url);
    feed.items.forEach((item, index) => {
      const date = item.pubDate ? new Date(item.pubDate) : /* @__PURE__ */ new Date();
      events.push({
        id: `rss-${index}-${date.getTime()}`,
        title: item.title || "Untitled",
        description: item.contentSnippet || item.content || "",
        date,
        location: "See Link",
        type: "other",
        region: source.region,
        kidFriendly: "caution",
        link: item.link
      });
    });
  } catch (e) {
    console.error("Failed to parse RSS", e);
  }
  return events;
}

const $$Astro = createAstro("https://twincitiesdad.com");
const prerender = false;
const $$Events = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Events;
  const externalEvents = await fetchExternalEvents();
  const events = [...localEvents, ...externalEvents].sort(
    (a, b) => a.date.getTime() - b.date.getTime()
  );
  const mParam = Astro2.url.searchParams.get("month");
  const yParam = Astro2.url.searchParams.get("year");
  const initialMonth = mParam ? parseInt(mParam, 10) : void 0;
  const initialYear = yParam ? parseInt(yParam, 10) : void 0;
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": `Events | ${SITE_TITLE}`, "description": "Upcoming events, protests, and community gatherings in the Twin Cities.", "data-astro-cid-ro7pgs3h": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<main class="container" data-astro-cid-ro7pgs3h> <header class="page-header" data-astro-cid-ro7pgs3h> <h1 data-astro-cid-ro7pgs3h>🗓️ Twin Cities Events</h1> <p data-astro-cid-ro7pgs3h>
Stay informed about protests, concerts, and community gatherings
				happening near you.
</p> <div class="suggest-box" data-astro-cid-ro7pgs3h>
Know of an event? <a href="mailto:events@twincitiesdad.com" data-astro-cid-ro7pgs3h>Submit an event →</a> </div> </header> <div class="events-page-container" data-astro-cid-ro7pgs3h> <div class="controls-section" data-astro-cid-ro7pgs3h> ${renderComponent($$result2, "EventFilters", $$EventFilters, { "data-astro-cid-ro7pgs3h": true })} <div class="view-switcher" data-astro-cid-ro7pgs3h> <button class="view-toggle-btn active" data-view="list" aria-label="List View" data-astro-cid-ro7pgs3h> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-ro7pgs3h><line x1="8" y1="6" x2="21" y2="6" data-astro-cid-ro7pgs3h></line><line x1="8" y1="12" x2="21" y2="12" data-astro-cid-ro7pgs3h></line><line x1="8" y1="18" x2="21" y2="18" data-astro-cid-ro7pgs3h></line><line x1="3" y1="6" x2="3.01" y2="6" data-astro-cid-ro7pgs3h></line><line x1="3" y1="12" x2="3.01" y2="12" data-astro-cid-ro7pgs3h></line><line x1="3" y1="18" x2="3.01" y2="18" data-astro-cid-ro7pgs3h></line></svg> </button> <button class="view-toggle-btn" data-view="calendar" aria-label="Calendar View" data-astro-cid-ro7pgs3h> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-ro7pgs3h><rect x="3" y="4" width="18" height="18" rx="2" ry="2" data-astro-cid-ro7pgs3h></rect><line x1="16" y1="2" x2="16" y2="6" data-astro-cid-ro7pgs3h></line><line x1="8" y1="2" x2="8" y2="6" data-astro-cid-ro7pgs3h></line><line x1="3" y1="10" x2="21" y2="10" data-astro-cid-ro7pgs3h></line></svg> </button> <button class="view-toggle-btn" data-view="map" aria-label="Map View" data-astro-cid-ro7pgs3h> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-ro7pgs3h><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" data-astro-cid-ro7pgs3h></polygon><line x1="8" y1="2" x2="8" y2="18" data-astro-cid-ro7pgs3h></line><line x1="16" y1="6" x2="16" y2="22" data-astro-cid-ro7pgs3h></line></svg> </button> </div> </div> <div id="map-view" style="display: none;" data-astro-cid-ro7pgs3h> ${renderComponent($$result2, "MapView", $$MapView, { "data-astro-cid-ro7pgs3h": true })} </div> <div id="list-view" data-astro-cid-ro7pgs3h> ${renderComponent($$result2, "EventList", $$EventList, { "data-astro-cid-ro7pgs3h": true })} </div> <div id="calendar-view" style="display: none;" data-astro-cid-ro7pgs3h> ${renderComponent($$result2, "CalendarView", $$CalendarView, { "initialMonth": initialMonth, "initialYear": initialYear, "events": events, "data-astro-cid-ro7pgs3h": true })} </div> </div> </main> ${renderScript($$result2, "/Users/benluebbert/Documents/Sites/twincitiesdad/src/pages/events.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/Users/benluebbert/Documents/Sites/twincitiesdad/src/pages/events.astro", void 0);

const $$file = "/Users/benluebbert/Documents/Sites/twincitiesdad/src/pages/events.astro";
const $$url = "/events";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Events,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
