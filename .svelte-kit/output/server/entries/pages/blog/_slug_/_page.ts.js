import { error } from "@sveltejs/kit";
const __variableDynamicImportRuntimeHelper = (glob$1, path$13, segs) => {
  const v = glob$1[path$13];
  if (v) return typeof v === "function" ? v() : Promise.resolve(v);
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, /* @__PURE__ */ new Error("Unknown variable dynamic import: " + path$13 + (path$13.split("/").length !== segs ? ". Note that variables only represent file names one level deep." : ""))));
  });
};
const load = async ({ params }) => {
  try {
    const post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../posts/first-proof.md": () => import("../../../../chunks/first-proof.js").then((n) => n._) }), `../../../posts/${params.slug}.md`, 5);
    return {
      content: post.default,
      metadata: post.metadata
    };
  } catch (e) {
    throw error(404, `Post not found: ${params.slug}`);
  }
};
export {
  load
};
