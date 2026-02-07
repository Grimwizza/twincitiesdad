import { l as localEvents } from '../chunks/events_Bd-pg_yU.mjs';
export { renderers } from '../renderers.mjs';

const prerender = false;
function formatIcsDate(date) {
  return date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";
}
function escapeIcs(text) {
  return text.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");
}
const GET = async () => {
  const icsLines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Twin Cities Dad//Events Calendar//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "X-WR-CALNAME:Twin Cities Dad Events",
    "X-WR-TIMEZONE:America/Chicago"
  ];
  localEvents.forEach((event) => {
    const startDate = formatIcsDate(event.date);
    const endDate = formatIcsDate(new Date(event.date.getTime() + 2 * 60 * 60 * 1e3));
    icsLines.push("BEGIN:VEVENT");
    icsLines.push(`UID:${event.id}@twincitiesdad.com`);
    icsLines.push(`DTSTAMP:${formatIcsDate(/* @__PURE__ */ new Date())}`);
    icsLines.push(`DTSTART:${startDate}`);
    icsLines.push(`DTEND:${endDate}`);
    icsLines.push(`SUMMARY:${escapeIcs(event.title)}`);
    icsLines.push(`DESCRIPTION:${escapeIcs(event.description || "")}\\n\\nType: ${event.type}\\nRegion: ${event.region}\\nKid-Friendly: ${event.kidFriendly}`);
    icsLines.push(`LOCATION:${escapeIcs(event.location || "")}`);
    if (event.link) {
      icsLines.push(`URL:${event.link}`);
    }
    icsLines.push("END:VEVENT");
  });
  icsLines.push("END:VCALENDAR");
  const icsContent = icsLines.join("\r\n");
  return new Response(icsContent, {
    status: 200,
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": 'attachment; filename="twincitiesdad-events.ics"',
      "Cache-Control": "public, max-age=3600"
      // Cache for 1 hour
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    GET,
    prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
