var webpack = require('webpack');
var path = require('path');
var config = {
	entry: [
		path.resolve(__dirname, 'src/app/index.js')       // 定义入口文件
	],
	output: {                                       // 定义出口目录
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	resolve: {                                      // resolve 指定可以被 import 的文件后缀
		extensions: ['', '.js', '.jsx']
	},
	devtool: "source-map",
	module: {
		loaders: [
			{
				test: /(\.css|\.scss)$/,
				loaders: ["style", "css?sourceMap", "sass?sourceMap"]
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loaders: [
					'file?hash=sha512&digest=hex&name=[hash].[ext]', // 生成 md5 hash 格式的文件名
					'image-webpack' // 图片压缩
				]
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
}

module.exports = config;