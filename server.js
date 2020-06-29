/*Including Express.*/
let express=require('express');


/*Firing Express to Include Modules to app.*/
let app=express();


/* Including body parser.*/
let bodyParser = require('body-parser');


/* Including mongoose for communicating to data base.*/
let mongoose = require('mongoose');


/*Adding path.*/
let path=require('path');


/*Adding method override.*/
let methodOverride = require('method-override');


/*connect to database.*/
mongoose.connect('mongodb://helpingverb:sonusir@helpingverb-shard-00-00-lonlm.mongodb.net:27017,helpingverb-shard-00-01-lonlm.mongodb.net:27017,helpingverb-shard-00-02-lonlm.mongodb.net:27017/helpingverb?ssl=true&replicaSet=HelpingVerb-shard-0&authSource=admin&retryWrites=true&w=majority', { useNewUrlParser: true,useUnifiedTopology: true })


 /*Schema for contest.*/
let Byschema=new mongoose.Schema({
    name:String,
    cname:Array,
    curl:Array,
    hname:Array,
    hurl:Array,
    oname:Array,
    ourl:Array
 });

 /*Schema for profile.*/
 let Myschema=new mongoose.Schema({
    name:String,
    arenaid:String,
    clink:String,
    glink:String,
    skills:Array
 });
 
 /*profile models.*/
 let First=mongoose.model('First',Myschema);

 let Second=mongoose.model('Second',Myschema);

 let Third=mongoose.model('Third',Myschema);

 let Final=mongoose.model('Final',Myschema);

 /* Creating model for blueprint.*/
 let Contest=mongoose.model('Contest',Byschema);
 app.use(methodOverride('_method'));
 mongoose.set('useFindAndModify', false);

/*Firing urlpareser.*/
let urlencodedParser = bodyParser.urlencoded({ extended: false });
/*Setting Templating engine.*/
app.set('view engine','ejs');

/*Access to static files.*/
app.use(express.static('./public'));

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

app.get('/',function(req,res)
{
    res.render('homepage');
});

app.get('/arena-1',function(req,res)
{
    First.find({},function(err,data)
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
    Second.find({},function(err,data)
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
    Third.find({},function(err,data)
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
    Final.find({},function(err,data)
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

app.get('/homepage',function(req,res)
{
    res.render('homepage');
});

/*All post request.*/
app.post('/update/general',urlencodedParser,function(req,res){
        First.findOneAndUpdate({arenaid:req.body.pass},
        {
            name:req.body.name
        },
        function(err, docs)
        {
            if(err) 
            {
                
                res.render('contest');
                // res.json(err);
            }
            else
            { 
            res.render('avatar');
            }
       });
});

app.post('/update/id',urlencodedParser,function(req,res){
    First.findOneAndUpdate({arenaid:req.body.pass},
    {
        arenaid:req.body.pass1
    },
    function(err, docs)
    {
        if(err) 
        {
            
            res.render('contest');
            // res.json(err);
        }
        else
        { 
        res.render('avatar');
        }
   });
});

/*Listening to server.*/
app.listen(3000);

/*Confirmation of Listening to server.*/
console.log("You are listening to port:3000");