const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: {
		index: "./src/index.js",
		battle: "./src/battleScene.js",
	},
	devtool: "inline-source-map",
	devServer: {
		static: "./dist",
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Mon Game",
			template: "src/index.html",
		}),
	],
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
		publicPath: "/",
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
			{
				test: /\.(mp3|wav)$/i,
				loader: "file-loader",
			},
		],
	},
	optimization: {
		runtimeChunk: "single",
	},
};
