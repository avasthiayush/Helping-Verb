const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/*Creating model for hospital Database using mongoose schema.*/

/*Profile model.*/
const spartanSchema = new Schema({
    name:{ type:String ,uppercase:true},
    githubid:{ type:String},
    linkedinid:{ type:String},
    facebookid:{ type:String},
    skills:{type:Array, default: ["","","","","","",""]},
});

/*coding contest model.*/
const codingSchema = new Schema({
    name:{type:Array, default: ["1.","2.","3.","4.","5.","6.","7.","8.","9.","10."]},
    link:{type:Array, default: ["","","","","","","","","",""]}
});

/*hackathon contest model.*/
const hackathonSchema = new Schema({
    name:{type:Array, default: ["1.","2.","3.","4.","5.","6.","7.","8.","9.","10."]},
    link:{type:Array, default: ["","","","","","","","","",""]}
});

/*others link model.*/
const othersSchema = new Schema({
    name:{type:Array, default: ["1.","2.","3.","4.","5.","6.","7.","8.","9.","10."]},
    link:{type:Array, default: ["","","","","","","","","",""]}
});

const Spartan = mongoose.model('spartan',spartanSchema);
const Contest =mongoose.model('contest',contestSchema);
const Hackathon =mongoose.model('hackathon',hackathonSchema);
const Others =mongoose.model('others',othersSchema);

/*Exporting all models.*/
module.exports = Spartan;
module.exports = Contest;
module.exports = Hackathon;
module.exports = Others;
