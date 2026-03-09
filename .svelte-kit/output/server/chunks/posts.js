import { _ as __vite_glob_0_0 } from "./first-proof.js";
async function getAllPosts() {
  const postFiles = /* @__PURE__ */ Object.assign({ "/src/posts/first-proof.md": __vite_glob_0_0 });
  const posts = [];
  for (const [path, file] of Object.entries(postFiles)) {
    const slug = path.split("/").pop()?.replace(".md", "") || "";
    const metadata = file.metadata;
    if (metadata.published !== false) {
      posts.push({
        slug,
        ...metadata
      });
    }
  }
  return posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}
function formatDate(date, options) {
  return new Date(date).toLocaleDateString("en-US", options || {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}
export {
  formatDate as f,
  getAllPosts as g
};
