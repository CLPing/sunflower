var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');

config.entry.app.unshift("webpack-dev-server/client?http://localhost:8080/", "webpack/hot/dev-server");
var compiler = webpack(config);
var server = new webpackDevServer(compiler, {
	historyApiFallback: true,
	hot: true,
	inline: true,
	progress: true,
	contentBase: './app',
	stats: { colors: true }
});

server.listen(8080, "localhost", function(err) {
	if(err) {
		console.log(err);
	}
	console.log('Listening at localhost:8080...');
});