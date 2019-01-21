const audio = require("../../lib/audio");


module.exports = (req,res,next)=>{
    
    audio.sendAudio(req,res,next); //send audio
}