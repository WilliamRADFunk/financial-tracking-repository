var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('babel', function()
{
	return gulp.src("js/development/*.js")
		.pipe(babel())
		.on('error', function(msg)
		{
			console.log("Babel Transpile Fail Error: ");
			console.log("pos: " + msg.pos + "\n");
			console.log("loc: " + msg.loc + "\n");
			console.log("_babel: " + msg._babel + "\n");
			console.log("codeFrame: ");
			console.log(msg.codeFrame + "\n");
			console.log("name: " + msg.name + "\n");
			console.log("message: " + msg.message + "\n");
			//console.log("stack: " + msg.stack + "\n");
			console.log("fileName: " + msg.fileName + "\n");
			console.log("showStack: " + msg.showStack + "\n");
			console.log("showProperties: " + msg.showProperties + "\n");
			console.log("plugin: " + msg.plugin);
			this.emit('end');
		})
		.pipe(gulp.dest("js/"));
});

gulp.task('watch', function() {
	return gulp.watch("js/development/*.js", ['babel']);
});

gulp.task('default', ['babel', 'watch']);