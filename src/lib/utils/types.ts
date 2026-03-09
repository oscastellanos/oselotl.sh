import type { SvelteComponent } from 'svelte';

export interface PostMetadata {
  title: string;
  date: string;
  description?: string;
  excerpt?: string;
  tags?: string[];
  published?: boolean;
  updated?: string;
  image?: string;
}

export interface Post extends PostMetadata {
  slug: string;
  content?: typeof SvelteComponent;
}
