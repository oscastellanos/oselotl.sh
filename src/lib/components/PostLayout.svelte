<script lang="ts">
  import { formatDate } from '$lib/utils/posts';
  import { siteConfig } from '$lib/config';
  import type { Snippet } from 'svelte';
  
  interface Props {
    title: string;
    date: string;
    description?: string;
    tags?: string[];
    updated?: string;
    children?: Snippet;
  }
  
  let { title, date, description, tags, updated, children }: Props = $props();
</script>

<svelte:head>
  <title>{title} | {siteConfig.title}</title>
  {#if description}
    <meta name="description" content={description} />
  {/if}
</svelte:head>

<article class="post animate-in">
  <header class="post-header">
    <h1 class="post-title">{title}</h1>
    
    <div class="post-meta">
      <span class="post-meta-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
        <time datetime={date}>{formatDate(date, siteConfig.dateFormat)}</time>
      </span>
      
      {#if updated}
        <span class="post-meta-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M1 4v6h6"/>
            <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/>
          </svg>
          Updated {formatDate(updated, siteConfig.dateFormat)}
        </span>
      {/if}
    </div>
    
    {#if tags && tags.length > 0}
      <div class="tags" style="margin-top: var(--spacing-md);">
        {#each tags as tag}
          <a href="/blog?tag={tag}" class="tag">{tag}</a>
        {/each}
      </div>
    {/if}
  </header>
  
  <div class="post-content">
    {@render children?.()}
  </div>
</article>
