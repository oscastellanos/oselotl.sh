<script lang="ts">
  import type { Post } from '$lib/utils/types';
  import { formatDate } from '$lib/utils/posts';
  import { siteConfig } from '$lib/config';
  
  interface Props {
    post: Post;
  }
  
  let { post }: Props = $props();
</script>

<article class="post-card">
  <div class="post-card-meta">
    <span>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
      {formatDate(post.date, siteConfig.dateFormat)}
    </span>
    {#if post.tags && post.tags.length > 0}
      <span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
          <line x1="7" y1="7" x2="7.01" y2="7"/>
        </svg>
        {post.tags.slice(0, 3).join(', ')}
      </span>
    {/if}
  </div>
  
  <h2 class="post-card-title">
    <a href="/blog/{post.slug}">{post.title}</a>
  </h2>
  
  {#if post.description || post.excerpt}
    <p class="post-card-excerpt">
      {post.description || post.excerpt}
    </p>
  {/if}
</article>
