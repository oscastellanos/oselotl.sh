import { Z as head, W as attr_class, U as ensure_array_like } from "../../../chunks/index2.js";
import { s as siteConfig } from "../../../chunks/config.js";
import { P as PostCard } from "../../../chunks/PostCard.js";
import { e as escape_html } from "../../../chunks/context.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    let activeTag = null;
    let filteredPosts = data.posts;
    let allTags = [...new Set(data.posts.flatMap((post) => post.tags || []))].sort();
    head("u4k2t", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Blog | ${escape_html(siteConfig.title)}</title>`);
      });
      $$renderer3.push(`<meta name="description" content="All blog posts"/>`);
    });
    $$renderer2.push(`<div class="content-wrapper"><header style="margin-bottom: var(--spacing-2xl);"><h1 class="gradient-text">Blog</h1> <p class="text-muted" style="font-size: 1.125rem;">Thoughts, tutorials, and musings.</p></header> `);
    if (allTags.length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="tags" style="margin-bottom: var(--spacing-xl);"><button type="button"${attr_class("tag svelte-u4k2t", void 0, { "active": !activeTag })}>All</button> <!--[-->`);
      const each_array = ensure_array_like(allTags);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let tag = each_array[$$index];
        $$renderer2.push(`<button type="button"${attr_class("tag svelte-u4k2t", void 0, { "active": activeTag === tag })}>${escape_html(tag)}</button>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (filteredPosts.length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="posts-list"><!--[-->`);
      const each_array_1 = ensure_array_like(filteredPosts);
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let post = each_array_1[$$index_1];
        PostCard($$renderer2, { post });
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<p class="text-muted text-center" style="padding: var(--spacing-3xl);">No posts found${escape_html("")}.</p>`);
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}
export {
  _page as default
};
