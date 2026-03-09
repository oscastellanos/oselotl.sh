// Site configuration - customize your blog here
export const siteConfig = {
  title: 'oselotl.sh',
  description: 'A blog about machine learning, AI for good, and software engineering.',
  author: 'Osvaldo Castellanos',
  url: 'https://oselotl.sh',
  
  // Social links (leave empty to hide)
  social: {
    github: 'https://github.com/oscastellanos',
    twitter: '',
    mastodon: '',
    linkedin: 'https://www.linkedin.com/in/osvaldo-castellanos/',
    email: 'ozzy@radlab.ai'
  },
  
  // Navigation links
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' }
  ],
  
  // Posts per page
  postsPerPage: 10,
  
  // Date format options
  dateFormat: {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  } as Intl.DateTimeFormatOptions
};

export type SiteConfig = typeof siteConfig;
