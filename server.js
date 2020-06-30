/*Including Express.*/
let express=require('express');

require('dotenv').config();

/*Firing Express to Include Modules to app.*/
let app=express();

app.use(express.json());

let port = process.env.PORT || 3000;

/* Including body parser.*/
let bodyParser = require('body-parser');


/* Including mongoose for communicating to data base.*/
let mongoose = require('mongoose');


/*Adding path.*/
let path=require('path');


/*Adding method override.*/
let methodOverride = require('method-override');
const { stringify } = require('querystring');


/*connect to database.*/
mongoose.connect('mongodb://helpingverb:sonusir@helpingverb-shard-00-00-lonlm.mongodb.net:27017,helpingverb-shard-00-01-lonlm.mongodb.net:27017,helpingverb-shard-00-02-lonlm.mongodb.net:27017/helpingverb?ssl=true&replicaSet=HelpingVerb-shard-0&authSource=admin&retryWrites=true&w=majority', { useNewUrlParser: true,useUnifiedTopology: true })

/*Schema and Models.*/

 /*Schema for contest.*/
let Byschema=new mongoose.Schema({
    ctype:String,
    cname:Array,
    curl:Array,
 });

 /*Schema for profile.*/
 let Myschema=new mongoose.Schema({
    name:String,
    arenaid:String,
    clink:String,
    glink:String,
    skills:Array
 });

 /*Arana ID schema.*/
 let Zyschema=new mongoose.Schema({
    id:String,
 });
 
/*Arena id model.*/
 let Arenaid=mongoose.model('Arenaid',Zyschema);

 /*profile models.*/
 let First=mongoose.model('First',Myschema);

 let Second=mongoose.model('Second',Myschema);

 let Third=mongoose.model('Third',Myschema);

 let Final=mongoose.model('Final',Myschema);

 /* Creating model for blueprint.*/
 let Contest=mongoose.model('Contest',Byschema);

 /*schema and model end.*/

 /*method override including.*/
 app.use(methodOverride('_method'));

 mongoose.set('useFindAndModify', false);

/*Firing urlpareser.*/
let urlencodedParser = bodyParser.urlencoded({ extended: false });

/*Setting Templating engine.*/
app.set('view engine','ejs');

/*Access to static files.*/
app.use(express.static(path.join(__dirname + '/public')));

/*get request for contest page.*/
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

app.get('/test',function(req,res)
{
    res.render('test');
});

app.get('/homepage',function(req,res)
{
    res.render('homepage');
});

/*All post request.*/
app.post('/update/general',urlencodedParser,function(req,res){
        let aman=new Object
        if(req.body.name.length>0)
        {
            aman.name=req.body.name;
        }
        if(req.body.clink.length>0)
        {
            aman.clink=req.body.clink;
        }
        if(req.body.glink.length>0)
        {
            aman.glink=req.body.glink;
        }
        if(req.body.yr==1)
        {
        First.findOneAndUpdate({arenaid:req.body.pass},
        aman,
        function(err, docs)
        {
            if(err) 
            {
                res.json(err);
            }
            else
            { 
                res.redirect('/avatar');
            }
       });
       }
       else if(req.body.yr==2)
       {
       Second.findOneAndUpdate({arenaid:req.body.pass},
       aman,
       function(err, docs)
       {
           if(err) 
           {
               
               
               res.json(err);
           }
           else
           { 
            res.redirect('/avatar');
           }
      });
      }
      else if(req.body.yr==3)
      {
      Third.findOneAndUpdate({arenaid:req.body.pass},
      aman,
      function(err, docs)
      {
          if(err) 
          {
            
              res.json(err);
          }
          else
          { 
            res.redirect('/avatar');
          }
     });
     }
     else if(req.body.yr==4)
     {
     Final.findOneAndUpdate({arenaid:req.body.pass},
     aman,
     function(err, docs)
     {
         if(err) 
         {
             
            
             res.json(err);
         }
         else
         { 
            res.redirect('/avatar');
         }
    });
    }
});


/*add contest.*/
app.post('/addcontest',urlencodedParser,function(req,res){
    Contest.findOneAndUpdate({ctype:req.body.contest},
    {
        $push: {curl:req.body.contesturl,cname:req.body.cname}
    },
    function(err, docs)
    {
        if(err) 
        {
            res.json(err);
        }
        else
        { 
            res.redirect('/contest');
        }
   });
});

/*add skill.*/
app.post('/addskill',urlencodedParser,function(req,res){
    if(req.body.yr==1)
    {
    First.findOneAndUpdate({arenaid:req.body.pass},
    {
        $push: {skills:req.body.skill}
    },
    function(err, docs)
    {
        if(err) 
        {
            
            res.json(err);
        }
        else
        { 
            
            res.redirect('/avatar');
        }
   });
   }
   else if(req.body.yr==2)
   {
   Second.findOneAndUpdate({arenaid:req.body.pass},
   {
       $push: {skills:req.body.skill}
   },
   function(err, docs)
   {
       if(err) 
       {
           
           res.json(err);
       }
       else
       { 
           res.redirect('/avatar');
       }
  });
  }
  else if(req.body.yr==3)
  {
  Third.findOneAndUpdate({arenaid:req.body.pass},
  {
      $push: {skills:req.body.skill}
  },
  function(err, docs)
  {
      if(err) 
      {
          
          res.json(err);
      }
      else
      { 
          res.redirect('/avatar');
      }
 });
 }
 else if(req.body.yr==4)
 {
 Final.findOneAndUpdate({arenaid:req.body.pass},
 {
     $push: {skills:req.body.skill}
 },
 function(err, docs)
 {
     if(err) 
     {
         
         res.json(err);
     }
     else
     { 
         
         res.redirect('/avatar');
     }
});
}
});



app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
});