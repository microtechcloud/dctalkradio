const request = require("request");
const path = require("path");
const fs = require("fs");
/**
 * Interface
 * 
 * source: url
 * method:
*/

exports.GetAudio = function(){

};

exports.sendAudio = function(req,res,next){
    //attach headers

    res.json({success:true,message:"getting audio"});
};

exports.saveAudio = function(){

};

exports.retrieveAudio = function(){

};

exports.deleteAudio = function(){

};

exports.shareAudio = function(){

};
