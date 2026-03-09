import { V as attr, _ as stringify } from "./index2.js";
import { f as formatDate } from "./posts.js";
import { s as siteConfig } from "./config.js";
import { e as escape_html } from "./context.js";
function PostCard($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { post } = $$props;
    $$renderer2.push(`<article class="post-card"><div class="post-card-meta"><span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg> ${escape_html(formatDate(post.date, siteConfig.dateFormat))}</span> `);
    if (post.tags && post.tags.length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg> ${escape_html(post.tags.slice(0, 3).join(", "))}</span>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div> <h2 class="post-card-title"><a${attr("href", `/blog/${stringify(post.slug)}`)}>${escape_html(post.title)}</a></h2> `);
    if (post.description || post.excerpt) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<p class="post-card-excerpt">${escape_html(post.description || post.excerpt)}</p>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></article>`);
  });
}
export {
  PostCard as P
};
