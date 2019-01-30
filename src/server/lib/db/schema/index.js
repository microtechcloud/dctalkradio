const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//Define User Schema
const UserSchema = new Schema({
    //personal details
    firstName:{type:String, required:true},
    LasttName:{type:String, required:true},
    OtherNames:{type:String},
    BOD:{type:String},
        //contacts
    address:{type: String},
    email:{type:String},
    phone:{type:String},
        //operations
    articles:{},
    podcasts:{},
    scripts:{},
    logs:{},
    messages:{},
    library:{},
    shows:{},
    timetable:{},
        //authentication
    role:{},
    password:{type:String,required:true}
});

//PODCASTS
const PodCastSchema = new Schema({
    postedBy:{},
    datePosted:{},
    title:{},
    description:{},
    mediaLink:{},
    cover:{},
    metadata:{},
    deleted:{},
    likes:{},
    dislikes:{},
    downloads:{},
    category:{},
    tags:{}
});

//SCRIPTS
const ScriptSchema = new Schema({

});

//LOG SHEETS
const LogSheetSchema = new Schema({

});
//NOTIFICATIONS
const NotificationSchema = new Schema({});
//EMAILS
const EmailSchema = new Schema({

});

//LIBRARY
const LibrarySchema = new Schema({

});

//GUESTS
const   GuestSchema = new Schema({

});
//SHOWS
const ShowSchema = new Schema({
    postedBy:{},
    datePosted:{},
    title:{},
    category:{},
    tags:{},
    description:{},
    body:{},
    partners:{}, //status:potential | actual
    scripts:{},
    aproved:{},
    aprovedBy:{}

});
//TIME TABLE
const TimeTableSchema = new Schema({
    
});
module.exports = {UserSchema};