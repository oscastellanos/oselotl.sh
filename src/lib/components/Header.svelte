<script lang="ts">
  import { page } from '$app/stores';
  import { siteConfig } from '$lib/config';
  import ThemeToggle from './ThemeToggle.svelte';
  
  const { nav, title } = siteConfig;
</script>

<header class="site-header">
  <div class="header-inner">
    <a href="/" class="site-logo">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
      {title}
    </a>
    
    <nav class="site-nav">
      {#each nav as link}
        <a 
          href={link.href} 
          class="nav-link" 
          class:active={$page.url.pathname === link.href || 
            (link.href !== '/' && $page.url.pathname.startsWith(link.href))}
        >
          {link.label}
        </a>
      {/each}
      <ThemeToggle />
    </nav>
  </div>
</header>
