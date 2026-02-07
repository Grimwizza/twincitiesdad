import { c as createComponent, m as maybeRenderHead, f as renderScript, d as renderTemplate, r as renderComponent, a as renderHead, b as addAttribute } from '../chunks/astro/server_CsL_W6af.mjs';
import 'piccolore';
import { g as getCollection } from '../chunks/_astro_content_BN38RGcj.mjs';
import { Image as $$Image } from '../chunks/_astro_assets_-L9n8Al7.mjs';
import { $ as $$BaseHead, a as $$Header, b as $$Footer } from '../chunks/Header_Be0mXEOR.mjs';
import 'clsx';
/* empty css                                 */
import { $ as $$FormattedDate } from '../chunks/FormattedDate_sgnlBLcl.mjs';
import { b as SITE_DESCRIPTION, a as SITE_TITLE } from '../chunks/consts_C6UwURia.mjs';
export { renderers } from '../renderers.mjs';

const $$NewsFeed = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="news-section" data-astro-cid-ug56xb27> <div class="section-header" data-astro-cid-ug56xb27> <h2 data-astro-cid-ug56xb27>📰 Minnesota News</h2> <span class="section-subtitle" data-astro-cid-ug56xb27>Latest headlines from the Twin Cities</span> </div> <div class="news-grid" id="news-grid" data-astro-cid-ug56xb27> <div class="news-loading" data-astro-cid-ug56xb27> <p data-astro-cid-ug56xb27>Loading latest news...</p> </div> </div> <div class="news-sources" data-astro-cid-ug56xb27> <span data-astro-cid-ug56xb27>Sources: Star Tribune, MPR News, Pioneer Press, KARE 11</span> </div> </section>  ${renderScript($$result, "/Users/benluebbert/Documents/Sites/twincitiesdad/src/components/NewsFeed.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/benluebbert/Documents/Sites/twincitiesdad/src/components/NewsFeed.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  const latestPost = posts[0];
  const recentPosts = posts.slice(1, 5);
  return renderTemplate`<html lang="en" data-astro-cid-j7pv25f6> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "data-astro-cid-j7pv25f6": true })}${renderHead()}</head> <body data-astro-cid-j7pv25f6> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-j7pv25f6": true })} <main data-astro-cid-j7pv25f6> <!-- Hero Section --> <section class="hero" id="hero-section" data-astro-cid-j7pv25f6> <span class="hero-badge" data-astro-cid-j7pv25f6>📍 Minneapolis-St. Paul</span> <h1 data-astro-cid-j7pv25f6>Raising Kids in <span class="text-gradient" data-astro-cid-j7pv25f6>Minnesota</span></h1> <p class="hero-subtitle" data-astro-cid-j7pv25f6>
Documenting life in the Twin Cities from a father's perspective. 
					Politics, community, news, and what it means to raise a family here—right now.
</p> <div class="hero-cta" data-astro-cid-j7pv25f6> <a href="/blog" class="btn btn-primary" data-astro-cid-j7pv25f6>Read the Blog</a> <a href="/about" class="btn btn-secondary" data-astro-cid-j7pv25f6>About Me</a> </div> </section> ${renderScript($$result, "/Users/benluebbert/Documents/Sites/twincitiesdad/src/pages/index.astro?astro&type=script&index=0&lang.ts")} ${renderComponent($$result, "NewsFeed", $$NewsFeed, { "data-astro-cid-j7pv25f6": true })} ${latestPost && renderTemplate`<section class="featured-section" data-astro-cid-j7pv25f6> <div class="section-header" data-astro-cid-j7pv25f6> <span class="section-title" data-astro-cid-j7pv25f6>Latest Post</span> <a href="/blog" class="view-all" data-astro-cid-j7pv25f6>View all posts →</a> </div> <article class="featured-post" data-astro-cid-j7pv25f6> ${latestPost.data.heroImage && renderTemplate`<div class="featured-image" data-astro-cid-j7pv25f6> <a${addAttribute(`/blog/${latestPost.id}/`, "href")} data-astro-cid-j7pv25f6> ${renderComponent($$result, "Image", $$Image, { "width": 720, "height": 450, "src": latestPost.data.heroImage, "alt": "", "data-astro-cid-j7pv25f6": true })} </a> </div>`} <div class="featured-content" data-astro-cid-j7pv25f6> <div class="featured-meta" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>📅 ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": latestPost.data.pubDate, "data-astro-cid-j7pv25f6": true })}</span> </div> <h2 data-astro-cid-j7pv25f6><a${addAttribute(`/blog/${latestPost.id}/`, "href")} data-astro-cid-j7pv25f6>${latestPost.data.title}</a></h2> ${latestPost.data.description && renderTemplate`<p class="featured-excerpt" data-astro-cid-j7pv25f6>${latestPost.data.description}</p>`} <a${addAttribute(`/blog/${latestPost.id}/`, "href")} class="btn btn-primary" data-astro-cid-j7pv25f6>Read More</a> </div> </article> </section>`} ${recentPosts.length > 0 && renderTemplate`<section data-astro-cid-j7pv25f6> <div class="section-header" style="padding: 0 1.5rem;" data-astro-cid-j7pv25f6> <span class="section-title" data-astro-cid-j7pv25f6>More Stories</span> </div> <div class="posts-grid" data-astro-cid-j7pv25f6> ${recentPosts.map((post) => renderTemplate`<article class="post-card" data-astro-cid-j7pv25f6> ${post.data.heroImage && renderTemplate`<div class="post-card-image" data-astro-cid-j7pv25f6> <a${addAttribute(`/blog/${post.id}/`, "href")} data-astro-cid-j7pv25f6> ${renderComponent($$result, "Image", $$Image, { "width": 400, "height": 225, "src": post.data.heroImage, "alt": "", "data-astro-cid-j7pv25f6": true })} </a> </div>`} <div class="post-card-content" data-astro-cid-j7pv25f6> <p class="post-card-date" data-astro-cid-j7pv25f6> ${renderComponent($$result, "FormattedDate", $$FormattedDate, { "date": post.data.pubDate, "data-astro-cid-j7pv25f6": true })} </p> <h3 class="post-card-title" data-astro-cid-j7pv25f6> <a${addAttribute(`/blog/${post.id}/`, "href")} data-astro-cid-j7pv25f6>${post.data.title}</a> </h3> </div> </article>`)} </div> </section>`} ${posts.length === 0 && renderTemplate`<div class="empty-state" data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6>No posts yet. Check back soon!</p> </div>`} </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-j7pv25f6": true })} </body></html>`;
}, "/Users/benluebbert/Documents/Sites/twincitiesdad/src/pages/index.astro", void 0);

const $$file = "/Users/benluebbert/Documents/Sites/twincitiesdad/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
