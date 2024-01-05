const gulp = require("gulp");
const { paths, baseDir, browserSync, isProd } = require("./utils.js");
const { compilePug } = require("./pug.gulp.js");
var connect = require('gulp-connect');

/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
|  Watcher
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/

var gls = require('gulp-live-server');


gulp.task('connect', function() {

	function connectServe(done){
		var server = gls.new('./server.js');
		return server.start();
	}

	connectServe()
});


