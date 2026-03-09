import { g as getAllPosts } from "../../chunks/posts.js";
const load = async () => {
  const posts = await getAllPosts();
  return {
    recentPosts: posts.slice(0, 3),
    totalPosts: posts.length
  };
};
export {
  load
};
