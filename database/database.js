const mongoose = require('mongoose');
var db=async()=>{
    await mongoose.connect ("mongodb+srv://sha050:shakthi050@first.v7omroo.mongodb.net/?retryWrites=true&w=majority").then(()=>{console.log("yesssss")}).catch((err)=>{console.log(err)});
    console.log("work");
}

db();

const login=new mongoose.Schema({
    username:String,
    password:String,
    list:mongoose.Schema.Types.Mixed
})


const log_var=new mongoose.model("owntest",login);

module.exports={log_var};