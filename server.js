var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');

var compiler = webpack(config);
var server = new webpackDevServer(compiler, {
	historyApiFallback: true,
	hot: true,
	inline: true,
	progress: true,
	contentBase: './app',
	stats: { colors: true }
});

config.entry.unshift("webpack-dev-server/client?http://localhost:6000/", "webpack/hot/dev-server");

server.listen(6000, "localhost", function(err) {
	if(err) {
		console.log(err);
	}
	console.log('Listening at localhost:6000...');
});