<script lang="ts">
  import PostLayout from '$lib/components/PostLayout.svelte';
  import type { PageData } from './$types';
  
  interface Props {
    data: PageData;
  }
  
  let { data }: Props = $props();
</script>

<div class="content-wrapper">
  <PostLayout 
    title={data.metadata.title}
    date={data.metadata.date}
    description={data.metadata.description}
    tags={data.metadata.tags}
    updated={data.metadata.updated}
  >
    {@const Content = data.content}
    <Content />
  </PostLayout>
</div>
