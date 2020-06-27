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
        res.render('homepage');
    });
    app.get('/profile',function(req,res)
    {
        res.render('profile');
    });
    app.get('/contest',function(req,res)
    {
        res.render('contest'); 
    });
    app.get('/avatar',function(req,res)
    {
        res.render('avatar');
    });
    app.get('/about',function(req,res)
    {
        res.render('about');
    });
    app.get('/homepage',function(req,res)
    {
        res.render('homepage');
    });
}; 