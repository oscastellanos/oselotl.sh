import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.D2yutk-i.js","_app/immutable/chunks/D_0qg-IN.js","_app/immutable/chunks/DQsj6ZHF.js","_app/immutable/chunks/CijGG5-r.js","_app/immutable/chunks/BcJXQYeQ.js","_app/immutable/chunks/CZMeDjw-.js","_app/immutable/chunks/DAF97_Pw.js","_app/immutable/chunks/DUSXOmpH.js","_app/immutable/chunks/CRbeqSpc.js"];
export const stylesheets = [];
export const fonts = [];
