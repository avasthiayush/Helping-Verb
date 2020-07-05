let mongoose = require('mongoose');

/*Schema for contest.*/
let Byschema=new mongoose.Schema({
    ctype:String,
    cname:Array,
    curl:Array,
 });


 /* Creating model for blueprint.*/
 let Contest=mongoose.model('Contest',Byschema);


 module.exports =Contest;