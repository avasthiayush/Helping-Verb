/* Including body parser.*/
let bodyParser = require('body-parser');

/* Including mongoose for communicating to data base.*/
let mongoose = require('mongoose');

/*Firing urlpareser.*/
let urlencodedParser = bodyParser.urlencoded({ extended: false });

/*Canavas.*/
module.exports=function(app)
{
    app.get('/',function(req,res)
    {
        res.render('profile');
    });
}; 