const path = require("path");

module.exports = {
	env: {
		API_URL: process.env.NEXT_PUBLIC_API_URL,
	},

	publicRuntimeConfig: {
		API_URL: process.env.NEXT_PUBLIC_API_URL,
	},

	async rewrites() {
		return [
			{
				source: "/login",
				destination: "/auth/login",
			},
			{
				source: "/register",
				destination: "/auth/register",
			},
		];
	},

	images: {
		deviceSizes: [640, 768, 1024, 1280, 1600],
		imageSizes: [16, 32, 48, 64, 96, 120, 256, 384],
		domains: [process.env.IMAGES_DOMAIN || "localhost"],
		path: "/_next/image",
		loader: "default",
	},

	// webpack: (config) => {
	// 	config.resolve.alias["components"] = path.join(__dirname, "components");
	// 	config.resolve.alias["public"] = path.join(__dirname, "public");

	// 	return config;
	// },
};
