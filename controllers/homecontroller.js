/* Including body parser.*/
let bodyParser = require('body-parser');

/* Including mongoose for communicating to data base.*/
let mongoose = require('mongoose');

/*connect to database.*/
mongoose.connect('mongodb://helpingverb:sonusir@helpingverb-shard-00-00-lonlm.mongodb.net:27017,helpingverb-shard-00-01-lonlm.mongodb.net:27017,helpingverb-shard-00-02-lonlm.mongodb.net:27017/helpingverb?ssl=true&replicaSet=HelpingVerb-shard-0&authSource=admin&retryWrites=true&w=majority', { useNewUrlParser: true,useUnifiedTopology: true })


 /*model for contest.*/
let Byschema=new mongoose.Schema({
    name:String,
    cname:Array,
    curl:Array,
    hname:Array,
    hurl:Array,
    oname:Array,
    ourl:Array
 });

 /*Model for profile.*/
 let Myschema=new mongoose.Schema({
    name:String,
    arenaid:String,
    clink:String,
    glink:String,
    skills:Array
 });
 
 let First=mongoose.model('First',Myschema);

 let Second=mongoose.model('Second',Myschema);

 let Third=mongoose.model('Third',Myschema);

 let Final=mongoose.model('Final',Myschema);

 /* Creating model for blueprint.*/
 let Contest=mongoose.model('Contest',Byschema);
 
/*Firing urlpareser.*/
let urlencodedParser = bodyParser.urlencoded({ extended: false });

/*Canavas.*/
module.exports=function(app)
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
    // app.get('/contest',function(req,res)
    // {
    //     res.render('contest'); 
    // });
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