<script lang="ts">
  import { browser } from '$app/environment';
  import { siteConfig } from '$lib/config';
  import PostCard from '$lib/components/PostCard.svelte';
  import type { PageData } from './$types';
  
  interface Props {
    data: PageData;
  }
  
  let { data }: Props = $props();
  
  // Tag filter (only works client-side)
  let activeTag = $state<string | null>(null);
  
  // Set tag from URL on client
  $effect(() => {
    if (browser) {
      activeTag = new URL(window.location.href).searchParams.get('tag');
    }
  });
  
  // Filter posts by tag if specified
  let filteredPosts = $derived(
    activeTag 
      ? data.posts.filter(post => post.tags?.includes(activeTag))
      : data.posts
  );
  
  // Get unique tags
  let allTags = $derived(
    [...new Set(data.posts.flatMap(post => post.tags || []))].sort()
  );
  
  function setTag(tag: string | null) {
    activeTag = tag;
    if (browser) {
      const url = new URL(window.location.href);
      if (tag) {
        url.searchParams.set('tag', tag);
      } else {
        url.searchParams.delete('tag');
      }
      window.history.replaceState({}, '', url);
    }
  }
</script>

<svelte:head>
  <title>Blog | {siteConfig.title}</title>
  <meta name="description" content="All blog posts" />
</svelte:head>

<div class="content-wrapper">
  <header style="margin-bottom: var(--spacing-2xl);">
    <h1 class="gradient-text">Blog</h1>
    <p class="text-muted" style="font-size: 1.125rem;">
      Thoughts, tutorials, and musings.
    </p>
  </header>
  
  {#if allTags.length > 0}
    <div class="tags" style="margin-bottom: var(--spacing-xl);">
      <button type="button" class="tag" class:active={!activeTag} onclick={() => setTag(null)}>All</button>
      {#each allTags as tag}
        <button type="button" class="tag" class:active={activeTag === tag} onclick={() => setTag(tag)}>{tag}</button>
      {/each}
    </div>
  {/if}
  
  {#if filteredPosts.length > 0}
    <div class="posts-list">
      {#each filteredPosts as post}
        <PostCard {post} />
      {/each}
    </div>
  {:else}
    <p class="text-muted text-center" style="padding: var(--spacing-3xl);">
      No posts found{activeTag ? ` with tag "${activeTag}"` : ''}.
    </p>
  {/if}
</div>

<style>
  .tag {
    cursor: pointer;
    border: none;
  }
  
  .tag.active {
    background: var(--primary-color);
    color: white;
  }
</style>
