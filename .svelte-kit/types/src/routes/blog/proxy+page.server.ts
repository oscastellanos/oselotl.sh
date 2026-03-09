// @ts-nocheck
import { getAllPosts } from '$lib/utils/posts';
import type { PageServerLoad } from './$types';

export const load = async () => {
  const posts = await getAllPosts();
  
  return {
    posts
  };
};
;null as any as PageServerLoad;