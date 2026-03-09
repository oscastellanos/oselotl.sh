export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","CNAME","favicon.svg"]),
	mimeTypes: {".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.Bp10aUdm.js",app:"_app/immutable/entry/app.CD5nZ3Ht.js",imports:["_app/immutable/entry/start.Bp10aUdm.js","_app/immutable/chunks/DaPQQEIp.js","_app/immutable/chunks/DQsj6ZHF.js","_app/immutable/chunks/BJy2OeFQ.js","_app/immutable/chunks/D0iwhpLH.js","_app/immutable/entry/app.CD5nZ3Ht.js","_app/immutable/chunks/BoJMCFVt.js","_app/immutable/chunks/DQsj6ZHF.js","_app/immutable/chunks/CijGG5-r.js","_app/immutable/chunks/D_0qg-IN.js","_app/immutable/chunks/BJy2OeFQ.js","_app/immutable/chunks/DJHLDjRM.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/__data.json","/about","/blog","/blog/__data.json","/blog/first-proof"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
