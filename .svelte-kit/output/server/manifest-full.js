export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.svg"]),
	mimeTypes: {".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.BIIFEgcb.js",app:"_app/immutable/entry/app.BRpnGoa1.js",imports:["_app/immutable/entry/start.BIIFEgcb.js","_app/immutable/chunks/DkoL0M-c.js","_app/immutable/chunks/DQsj6ZHF.js","_app/immutable/chunks/BJy2OeFQ.js","_app/immutable/chunks/D0iwhpLH.js","_app/immutable/entry/app.BRpnGoa1.js","_app/immutable/chunks/BoJMCFVt.js","_app/immutable/chunks/DQsj6ZHF.js","_app/immutable/chunks/CijGG5-r.js","_app/immutable/chunks/D_0qg-IN.js","_app/immutable/chunks/BJy2OeFQ.js","_app/immutable/chunks/DJHLDjRM.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/blog/[slug]",
				pattern: /^\/blog\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
