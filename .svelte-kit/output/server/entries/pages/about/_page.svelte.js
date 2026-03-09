import { Z as head, V as attr, _ as stringify } from "../../../chunks/index2.js";
import { s as siteConfig } from "../../../chunks/config.js";
import { e as escape_html } from "../../../chunks/context.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    head("cwls5q", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>About | ${escape_html(siteConfig.title)}</title>`);
      });
      $$renderer3.push(`<meta name="description"${attr("content", `About ${stringify(siteConfig.author)}`)}/>`);
    });
    $$renderer2.push(`<div class="content-wrapper animate-in"><h1 class="gradient-text">About me</h1> <div class="post-content"><p>Welcome to my corner of the internet! I'm <strong>${escape_html(siteConfig.author)}</strong>, and this is my personal blog 
      where I share thoughts, tutorials, and projects.</p> <p>I am a Machine Learning Operations Engineer by day, tackling interesting problems with <a href="https://radlab.ai" target="_blank" rel="noopener noreferrer">radlab.ai</a> at night and on weekends, and I work on research whenever I get the chance in between.</p> <p>This blog focuses on my personal research interests that I simply have a passion for. 
      I’m a strong advocate for open source software, ethical AI, and AI for science.</p> <h2>Get in touch</h2> <p>Feel free to reach out via any of the social links in the footer, or `);
    {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`send me an email at <a${attr("href", `mailto:${stringify(siteConfig.social.email)}`)}>${escape_html(siteConfig.social.email.replace("@", " {at} "))}</a>.`);
    }
    $$renderer2.push(`<!--]--></p></div></div>`);
  });
}
export {
  _page as default
};
