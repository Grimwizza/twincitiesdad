import { c as createComponent, r as renderComponent, a as renderHead, b as addAttribute, d as renderTemplate } from '../chunks/astro/server_BvU6N8yG.mjs';
import 'piccolore';
import { $ as $$Image } from '../chunks/_astro_assets_C_-UITmF.mjs';
import { g as getCollection } from '../chunks/_astro_content_TRVHR4j6.mjs';
import { $ as $$BaseHead, a as $$Header, b as $$Footer } from '../chunks/Header_Bz6u-whN.mjs';
import { $ as $$FormattedDate } from '../chunks/FormattedDate_B4iQuAHj.mjs';
import { a as SITE_TITLE } from '../chunks/consts_C6UwURia.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  return renderTemplate`<html lang="en" data-astro-cid-5tznm7mj> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": `Blog | ${SITE_TITLE}`, "description": "All posts from Twin Cities Dad - stories, analysis, and perspectives from Minnesota.", "data-astro-cid-5tznm7mj": true })}${renderHead()}</head> <body data-astro-cid-5tznm7mj> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-5tznm7mj": true })} <main class="container" data-astro-cid-5tznm7mj> <header class="page-header" data-astro-cid-5tznm7mj> <h1 data-astro-cid-5tznm7mj>📝 Blog</h1> <p data-astro-cid-5tznm7mj>Stories, perspectives, and analysis from a father in the Twin Cities.</p> </header> <div class="posts-container" data-astro-cid-5tznm7mj> ${posts.length > 0 ? renderTemplate`<ul class="post-list" data-astro-cid-5tznm7mj> ${posts.map((post) => renderTemplate`<li class="post-item" data-astro-cid-5tznm7mj> ${post.data.heroImage && renderTemplate`<div class="post-image" data-astro-cid-5tznm7mj> <a${addAttribute(`/blog/${post.id}/`, "href")} data-astro-cid-5tznm7mj> ${renderComponent($$result, "Image", $$Image, { "width": 400, "height": 250, "src": post.data.heroImage, "alt": "", "data-astro-cid-5tznm7mj": true })} </a> </div>`} <div class="post-content" data-astro-cid-5tznm7mj> <p class="post-date" data-astro-cid-5tznm7mj>
📅 ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate, "data-astro-cid-5tznm7mj": true })} </p> <h2 class="post-title" data-astro-cid-5tznm7mj> <a${addAttribute(`/blog/${post.id}/`, "href")} data-astro-cid-5tznm7mj>${post.data.title}</a> </h2> ${post.data.description && renderTemplate`<p class="post-excerpt" data-astro-cid-5tznm7mj>${post.data.description}</p>`} </div> </li>`)} </ul>` : renderTemplate`<div class="empty-state" data-astro-cid-5tznm7mj> <p data-astro-cid-5tznm7mj>No posts yet. Check back soon!</p> </div>`} </div> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-5tznm7mj": true })} </body></html>`;
}, "/Users/benluebbert/Documents/Sites/twincitiesdad/src/pages/blog/index.astro", void 0);

const $$file = "/Users/benluebbert/Documents/Sites/twincitiesdad/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
