// Script to set rapaits

var fs = require('fs');
const file = "./node_modules/gulp-sass/index.js";
const old_tx = "replacement";
const new_tx = "sass";

fs.readFile(file, 'utf8', function (err,data) {
	if (err) {
		return console.log(err);
	}
	var result = data.replace(old_tx, new_tx);

	fs.writeFile(file, result, 'utf8', function (err) {
		 if (err) return console.log(err);
	});
});



//Start Project
const { exec } = require("child_process");

exec("gulp", (error, stdout, stderr) => {
		if (error) {
				console.log(`error: ${error.message}`);
				return;
		}
		if (stderr) {
				console.log(`stderr: ${stderr}`);
				return;
		}
		console.log(`stdout: ${stdout}`);
});
