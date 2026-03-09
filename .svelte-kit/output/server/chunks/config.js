const siteConfig = {
  title: "oselotl.sh",
  description: "A blog about machine learning, AI for good, and software engineering.",
  author: "Osvaldo Castellanos",
  // Social links (leave empty to hide)
  social: {
    github: "https://github.com/oscastellanos",
    twitter: "",
    mastodon: "",
    linkedin: "https://www.linkedin.com/in/osvaldo-castellanos/",
    email: "ozzy@radlab.ai"
  },
  // Navigation links
  nav: [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" }
  ],
  // Date format options
  dateFormat: {
    year: "numeric",
    month: "long",
    day: "numeric"
  }
};
export {
  siteConfig as s
};
