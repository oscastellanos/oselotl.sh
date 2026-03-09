import "clsx";
import { Z as head, V as attr, U as ensure_array_like, _ as stringify } from "../../../../chunks/index2.js";
import { f as formatDate } from "../../../../chunks/posts.js";
import { s as siteConfig } from "../../../../chunks/config.js";
import { e as escape_html } from "../../../../chunks/context.js";
function PostLayout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { title, date, description, tags, updated, children } = $$props;
    head("j57o68", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(title)} | ${escape_html(siteConfig.title)}</title>`);
      });
      if (description) {
        $$renderer3.push("<!--[-->");
        $$renderer3.push(`<meta name="description"${attr("content", description)}/>`);
      } else {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]-->`);
    });
    $$renderer2.push(`<article class="post animate-in"><header class="post-header"><h1 class="post-title">${escape_html(title)}</h1> <div class="post-meta"><span class="post-meta-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg> <time${attr("datetime", date)}>${escape_html(formatDate(date, siteConfig.dateFormat))}</time></span> `);
    if (updated) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<span class="post-meta-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 4v6h6"></path><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path></svg> Updated ${escape_html(formatDate(updated, siteConfig.dateFormat))}</span>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div> `);
    if (tags && tags.length > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="tags" style="margin-top: var(--spacing-md);"><!--[-->`);
      const each_array = ensure_array_like(tags);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let tag = each_array[$$index];
        $$renderer2.push(`<a${attr("href", `/blog?tag=${stringify(tag)}`)} class="tag">${escape_html(tag)}</a>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></header> <div class="post-content">`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div></article>`);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    $$renderer2.push(`<div class="content-wrapper">`);
    PostLayout($$renderer2, {
      title: data.metadata.title,
      date: data.metadata.date,
      description: data.metadata.description,
      tags: data.metadata.tags,
      updated: data.metadata.updated,
      children: ($$renderer3) => {
        const Content = data.content;
        $$renderer3.push(`<!---->`);
        Content($$renderer3, {});
        $$renderer3.push(`<!---->`);
      }
    });
    $$renderer2.push(`<!----></div>`);
  });
}
export {
  _page as default
};
