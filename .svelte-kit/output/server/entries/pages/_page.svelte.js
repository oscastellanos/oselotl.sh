import { Z as head, U as ensure_array_like } from "../../chunks/index2.js";
import { s as siteConfig } from "../../chunks/config.js";
import { P as PostCard } from "../../chunks/PostCard.js";
import { e as escape_html } from "../../chunks/context.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    head("1uha8ag", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(siteConfig.title)} - ${escape_html(siteConfig.description)}</title>`);
      });
    });
    $$renderer2.push(`<div class="hero"><h1 class="hero-title gradient-text">${escape_html(siteConfig.title)}</h1> <p class="hero-subtitle">${escape_html(siteConfig.description)}</p> <div class="gradient-bar"></div> <div style="display: flex; gap: var(--spacing-md); justify-content: center;"><a href="/blog" class="btn btn-primary"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg> Read the blog</a> <a href="/about" class="btn btn-outline">About me</a></div></div> `);
    if (data.recentPosts.length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<section style="margin-top: var(--spacing-3xl);"><h2 style="margin-bottom: var(--spacing-lg);">Recent Posts</h2> <div class="posts-list"><!--[-->`);
      const each_array = ensure_array_like(data.recentPosts);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let post = each_array[$$index];
        PostCard($$renderer2, { post });
      }
      $$renderer2.push(`<!--]--></div> `);
      if (data.totalPosts > 3) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<p style="text-align: center; margin-top: var(--spacing-xl);"><a href="/blog" class="btn btn-outline">View all ${escape_html(data.totalPosts)} posts →</a></p>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></section>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
export {
  _page as default
};
