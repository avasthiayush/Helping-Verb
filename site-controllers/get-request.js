require('dotenv').config();

/* Including body parser.*/
let bodyParser = require('body-parser');

/* Including mongoose for communicating to data base.*/
let mongoose = require('mongoose');

/*Adding path.*/
let path=require('path');


/*Adding method override.*/
let methodOverride = require('method-override');
let { stringify } = require('querystring');


/*connect to database.*/
mongoose.connect(process.env.MONGODB, { useNewUrlParser: true,useUnifiedTopology: true })

/*models importing.*/
let Profile= require('../models/profile-model');

let Contest= require('../models/contest-model');


 mongoose.set('useFindAndModify', false);

/*Firing urlpareser.*/
let urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports =  function(app)
{
    app.get('/contest',function(req,res)
    {
        Contest.find({},function(err,data)
        {
            if(err)
            {
                process.exit(1);
            }
            res.render('contest',{data:data});
        })
    });
    
    /*get request for home page.*/
    app.get('/',function(req,res)
    {
        res.render('homepage');
    });
    
    
    app.get('/arena-1',function(req,res)
    {
        Profile.First.find({},function(err,data)
        {
            if(err)
            {
                process.exit(1);
            }
            res.render('arena-1',{data:data});
        })
    });
    
    app.get('/arena-2',function(req,res)
    {
        Profile.Second.find({},function(err,data)
        {
            if(err)
            {
                process.exit(1);
            }
            res.render('arena-2',{data:data});
        })
    });
    
    app.get('/arena-3',function(req,res)
    {
        Profile.Third.find({},function(err,data)
        {
            if(err)
            {
                process.exit(1);
            }
            res.render('arena-3',{data:data});
        })
    });
    
    app.get('/arena-4',function(req,res)
    {
        Profile.Final.find({},function(err,data)
        {
            if(err)
            {
                process.exit(1);
            }
            res.render('arena-4',{data:data});
        })
    });
    
    app.get('/profile',function(req,res)
    {
        res.render('profile');
    });
    
    app.get('/avatar',function(req,res)
    {
        res.render('avatar');
    });
    
    app.get('/about',function(req,res)
    {
        res.render('about');
    });
    
    app.get('/test',function(req,res)
    {
        res.render('test');
    });
    
    app.get('/homepage',function(req,res)
    {
        res.render('homepage');
    });
};