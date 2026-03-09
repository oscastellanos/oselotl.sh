<script lang="ts">
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import '$lib/styles/global.css';
  
  import { siteConfig } from '$lib/config';
  import type { Snippet } from 'svelte';
  
  interface Props {
    children?: Snippet;
  }
  
  let { children }: Props = $props();
</script>

<svelte:head>
  <title>{siteConfig.title}</title>
  <meta name="description" content={siteConfig.description} />
</svelte:head>

<div class="site-container">
  <Header />
  
  <main>
    {@render children?.()}
  </main>
  
  <Footer />
</div>
