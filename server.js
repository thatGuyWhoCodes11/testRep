const express=require('express');
const db=require('/Works/Web development/Sending datas to backend/database/database.js');
const app=express();
let name="";
app.set("view engine","ejs");
app.use(express.json(),express.urlencoded({extended:true})); 
app.listen(3000,()=>{
    console.log("started");
})

app.get('/',(req,res)=>{
    res.render(__dirname+"/pages/index.ejs");
})
app.post('/sendata',(req,res)=>{
    const data=req.body;
    name=data.user; 
    db.log_var.insertMany({username:data.user,password:data.pass});
    res.send('Sucess');
})

app.get('/find',(req,res)=>{
    res.render(__dirname+"/pages/check.ejs");
})

app.post('/details',(req,res)=>{
    const data = req.body;
    console.log(data);
    db.log_var.findOne({username:data.user}).then((doc)=>{
        res.send(doc.password);
    })
})

app.get('/list',(req,res)=>{
    db.log_var.findOne({username:name}).then((doc)=>{
        console.log(name);
        res.json(doc);
    })
})

