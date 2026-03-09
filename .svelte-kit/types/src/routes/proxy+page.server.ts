// @ts-nocheck
import { getAllPosts } from '$lib/utils/posts';
import type { PageServerLoad } from './$types';

export const load = async () => {
  const posts = await getAllPosts();
  
  return {
    recentPosts: posts.slice(0, 3),
    totalPosts: posts.length
  };
};
;null as any as PageServerLoad;