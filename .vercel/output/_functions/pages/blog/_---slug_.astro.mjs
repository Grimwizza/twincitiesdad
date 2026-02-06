import { e as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, f as renderScript, d as renderTemplate, r as renderComponent, g as renderSlot, a as renderHead } from '../../chunks/astro/server_BvU6N8yG.mjs';
import 'piccolore';
import { r as renderEntry, g as getCollection } from '../../chunks/_astro_content_TRVHR4j6.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_C_-UITmF.mjs';
import { b as $$Footer, a as $$Header, $ as $$BaseHead } from '../../chunks/Header_BwH3tMVt.mjs';
import { $ as $$FormattedDate } from '../../chunks/FormattedDate_B4iQuAHj.mjs';
import 'clsx';
/* empty css                                     */
import { a as SITE_TITLE } from '../../chunks/consts_C6UwURia.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$2 = createAstro("https://twincitiesdad.com");
const $$ShareButtons = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ShareButtons;
  const { title, url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="share-buttons" data-astro-cid-zllr3mxm> <span class="share-label" data-astro-cid-zllr3mxm>Share this:</span> <div class="share-icons" data-astro-cid-zllr3mxm> <a${addAttribute(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, "href")} target="_blank" rel="noopener noreferrer" class="share-btn twitter" aria-label="Share on Twitter" data-astro-cid-zllr3mxm> <svg viewBox="0 0 24 24" width="20" height="20" data-astro-cid-zllr3mxm> <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" data-astro-cid-zllr3mxm></path> </svg> </a> <a${addAttribute(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "href")} target="_blank" rel="noopener noreferrer" class="share-btn facebook" aria-label="Share on Facebook" data-astro-cid-zllr3mxm> <svg viewBox="0 0 24 24" width="20" height="20" data-astro-cid-zllr3mxm> <path fill="currentColor" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" data-astro-cid-zllr3mxm></path> </svg> </a> <button class="share-btn copy-link" aria-label="Copy link"${addAttribute(url, "data-url")} data-astro-cid-zllr3mxm> <svg viewBox="0 0 24 24" width="20" height="20" data-astro-cid-zllr3mxm> <path fill="currentColor" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" data-astro-cid-zllr3mxm></path> </svg> <span class="copied-tooltip" data-astro-cid-zllr3mxm>Copied!</span> </button> </div> </div>  ${renderScript($$result, "/Users/benluebbert/Documents/Sites/twincitiesdad/src/components/ShareButtons.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/benluebbert/Documents/Sites/twincitiesdad/src/components/ShareButtons.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://twincitiesdad.com");
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title, description, pubDate, updatedDate, heroImage, slug } = Astro2.props;
  const articleUrl = new URL(`/blog/${slug}`, Astro2.site || "https://twincitiesdad.com").toString();
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-bvzihdzo> <head>', "", "</head> <body data-astro-cid-bvzihdzo> ", ' <main class="container" data-astro-cid-bvzihdzo> <article data-astro-cid-bvzihdzo> ', ' <div class="prose" data-astro-cid-bvzihdzo> <header class="article-header" data-astro-cid-bvzihdzo> <div class="meta" data-astro-cid-bvzihdzo> <span class="date" data-astro-cid-bvzihdzo>\n\u{1F4C5} ', " </span> ", " </div> <h1 data-astro-cid-bvzihdzo>", "</h1> ", ' </header> <div class="content" data-astro-cid-bvzihdzo> ', " </div> ", ' <section class="comments-section" data-astro-cid-bvzihdzo> <h3 data-astro-cid-bvzihdzo>\u{1F4AC} Comments</h3> <div id="giscus-container" data-astro-cid-bvzihdzo> <script src="https://giscus.app/client.js" data-repo="Grimwizza/twincitiesdad" data-repo-id="MDEwOlJlcG9zaXRvcnkzNTE5NTgwNTM=" data-category="Announcements" data-category-id="MDE4OkRpc2N1c3Npb25DYXRlZ29yeTMyNzk2NTc1" data-mapping="pathname" data-strict="0" data-reactions-enabled="1" data-emit-metadata="0" data-input-position="top" data-theme="dark_dimmed" data-lang="en" data-loading="lazy" crossorigin="anonymous" async>\n							<\/script> <noscript> <p style="color: var(--text-muted); font-size: 0.9rem;" data-astro-cid-bvzihdzo>\nEnable JavaScript to view comments. Powered by <a href="https://giscus.app" target="_blank" data-astro-cid-bvzihdzo>Giscus</a>.\n</p> </noscript> </div> </section> </div> </article> </main> ', " </body></html>"])), renderComponent($$result, "BaseHead", $$BaseHead, { "title": `${title} | ${SITE_TITLE}`, "description": description, "data-astro-cid-bvzihdzo": true }), renderHead(), renderComponent($$result, "Header", $$Header, { "data-astro-cid-bvzihdzo": true }), heroImage && renderTemplate`<div class="hero-image" data-astro-cid-bvzihdzo> ${renderComponent($$result, "Image", $$Image, { "width": 1400, "height": 500, "src": heroImage, "alt": "", "data-astro-cid-bvzihdzo": true })} </div>`, renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": pubDate, "data-astro-cid-bvzihdzo": true }), updatedDate && renderTemplate`<span class="updated" data-astro-cid-bvzihdzo>
(Updated: ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": updatedDate, "data-astro-cid-bvzihdzo": true })})
</span>`, title, description && renderTemplate`<p class="description" data-astro-cid-bvzihdzo>${description}</p>`, renderSlot($$result, $$slots["default"]), renderComponent($$result, "ShareButtons", $$ShareButtons, { "title": title, "url": articleUrl, "data-astro-cid-bvzihdzo": true }), renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-bvzihdzo": true }));
}, "/Users/benluebbert/Documents/Sites/twincitiesdad/src/layouts/BlogPost.astro", void 0);

const $$Astro = createAstro("https://twincitiesdad.com");
async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.id },
    props: { post, slug: post.id }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { post, slug } = Astro2.props;
  const { Content } = await renderEntry(post);
  return renderTemplate`${renderComponent($$result, "BlogPost", $$BlogPost, { ...post.data, "slug": slug }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/Users/benluebbert/Documents/Sites/twincitiesdad/src/pages/blog/[...slug].astro", void 0);

const $$file = "/Users/benluebbert/Documents/Sites/twincitiesdad/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
