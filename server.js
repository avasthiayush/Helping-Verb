/*Including Express.*/
let express=require('express');

/*Including controller.*/
let homecontroller=require('./controllers/homecontroller');

/*Firing Express to Include Modules to app.*/
let app=express();

/*Setting Templating engine.*/
app.set('view engine','ejs');

/*Access to static files.*/
app.use(express.static('./Public'));

/*Calling controller.*/
app(homecontroller);

/*Listening to server.*/
app.listen(5500);

/*Confirmation of Listening to server.*/
console.log("You are listening to port:5500");