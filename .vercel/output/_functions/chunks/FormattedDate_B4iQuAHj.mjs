import { e as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, d as renderTemplate } from './astro/server_BvU6N8yG.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://twincitiesdad.com");
const $$FormattedDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(date.toISOString(), "datetime")}> ${date.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })} </time>`;
}, "/Users/benluebbert/Documents/Sites/twincitiesdad/src/components/FormattedDate.astro", void 0);

export { $$FormattedDate as $ };
