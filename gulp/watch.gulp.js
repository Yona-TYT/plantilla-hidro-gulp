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

gulp.task("watch", () => {
	//Browsersync Task
	function browsersyncServe(done){
		browserSync.init({
			server: {baseDir},
			//proxy: '127.0.0.1:8010',
			//port: 3000,
			open: false, // or "local"
			//host: "35.160.120.126",
			//notify: false,
			middleware: compilePug,
		});
		//done();
	}
	function browsersyncReload(cb){

		browsersync.reload();
		//cb();
	}
	//Watch Task
	function watchTask(){
		//console.log(browserSync)
		//console.log("YonaTest: "+paths.pug.src.all+"")
		//console.log("YonaTest: "+paths.watch.map((dir) => `${paths.dir.dev}/${dir}`))
		gulp.watch(paths.pug.src.all, gulp.series(browsersyncReload));
		gulp.watch(paths.style.src, gulp.series("style"));
		// gulp.watch(gulp.series("script"));
		gulp.watch(paths.script.src, gulp.series("script"));
		gulp.watch(
			paths.watch.map((dir) => `${paths.dir.dev}/${dir}`),
			gulp.series(browsersyncReload)
		);
	}

	browsersyncServe()
	watchTask()
});
