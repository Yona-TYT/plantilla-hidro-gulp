const { compilePug } = require("./gulp/pug.gulp.js");




const express = require('express');

// Crea una Express app.
const app = express();

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// Set 'views' directory for any views 
// being rendered res.render()
app.set('public', path.join(__dirname, 'public'));
  
const port = process.env.PORT || 3000;
  
app.use('/', function(req, res, next) {
	compilePug(req, res, next)
});

  
app.listen(port, (error) =>{ 
    if(!error) 
        console.log("Server is Successfully Running, and App is listening on port "+ port) 
    else 
        console.log("Error occurred, server can't start", error); 
    } 
);

