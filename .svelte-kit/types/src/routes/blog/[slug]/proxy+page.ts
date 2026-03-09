// @ts-nocheck
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = async ({ params }: Parameters<PageLoad>[0]) => {
  try {
    const post = await import(`../../../posts/${params.slug}.md`);
    
    return {
      content: post.default,
      metadata: post.metadata
    };
  } catch (e) {
    throw error(404, `Post not found: ${params.slug}`);
  }
};
