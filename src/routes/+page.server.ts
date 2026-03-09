import { getAllPosts } from '$lib/utils/posts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  const posts = await getAllPosts();
  
  return {
    recentPosts: posts.slice(0, 3),
    totalPosts: posts.length
  };
};
