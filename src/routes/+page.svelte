<script lang="ts">
  import { siteConfig } from '$lib/config';
  import PostCard from '$lib/components/PostCard.svelte';
  import type { PageData } from './$types';
  
  interface Props {
    data: PageData;
  }
  
  let { data }: Props = $props();
</script>

<svelte:head>
  <title>{siteConfig.title} - {siteConfig.description}</title>
</svelte:head>

<div class="hero">
  <h1 class="hero-title gradient-text">{siteConfig.title}</h1>
  <p class="hero-subtitle">{siteConfig.description}</p>
  
  <div class="gradient-bar"></div>
  
  <div style="display: flex; gap: var(--spacing-md); justify-content: center;">
    <a href="/blog" class="btn btn-primary">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
      Read the blog
    </a>
    <a href="/about" class="btn btn-outline">About me</a>
  </div>
</div>

{#if data.recentPosts.length > 0}
  <section style="margin-top: var(--spacing-3xl);">
    <h2 style="margin-bottom: var(--spacing-lg);">Recent Posts</h2>
    <div class="posts-list">
      {#each data.recentPosts as post}
        <PostCard {post} />
      {/each}
    </div>
    
    {#if data.totalPosts > 3}
      <p style="text-align: center; margin-top: var(--spacing-xl);">
        <a href="/blog" class="btn btn-outline">View all {data.totalPosts} posts →</a>
      </p>
    {/if}
  </section>
{/if}
