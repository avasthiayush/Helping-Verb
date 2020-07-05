let mongoose = require('mongoose');

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

 module.exports = {
    First,
    Second,
    Third,
    Final
};