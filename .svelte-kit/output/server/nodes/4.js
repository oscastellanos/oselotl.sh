import * as server from '../entries/pages/blog/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/blog/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.CWBp3-bY.js","_app/immutable/chunks/D_0qg-IN.js","_app/immutable/chunks/DQsj6ZHF.js","_app/immutable/chunks/CijGG5-r.js","_app/immutable/chunks/BcJXQYeQ.js","_app/immutable/chunks/CZMeDjw-.js","_app/immutable/chunks/CAo6bY7A.js","_app/immutable/chunks/DAF97_Pw.js","_app/immutable/chunks/DUSXOmpH.js","_app/immutable/chunks/CRbeqSpc.js"];
export const stylesheets = ["_app/immutable/assets/4.r5I2FDD6.css"];
export const fonts = [];
