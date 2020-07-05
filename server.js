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
mongoose.connect(process.env.MONGODB, { useNewUrlParser: true,useUnifiedTopology: true })

/*models importing.*/
let Profile= require('./models/profile-model');

let Contest= require('./models/contest-model');

 /*method override including.*/
 app.use(methodOverride('_method'));

 mongoose.set('useFindAndModify', false);

 let Controller=require('./site-controllers/get-request');

/*Firing urlpareser.*/
let urlencodedParser = bodyParser.urlencoded({ extended: false });

/*Setting Templating engine.*/
app.set('view engine','ejs');

/*Access to static files.*/
app.use(express.static(path.join(__dirname + '/public')));

Controller(app);

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
        Profile.First.findOneAndUpdate({arenaid:req.body.pass},
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
       Profile.Second.findOneAndUpdate({arenaid:req.body.pass},
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
      Profile.Third.findOneAndUpdate({arenaid:req.body.pass},
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
     Profile.Final.findOneAndUpdate({arenaid:req.body.pass},
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
    Profile.First.findOneAndUpdate({arenaid:req.body.pass},
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
   Profile.Second.findOneAndUpdate({arenaid:req.body.pass},
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
  Profile.Third.findOneAndUpdate({arenaid:req.body.pass},
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
 Profile.Final.findOneAndUpdate({arenaid:req.body.pass},
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