const express = require('express');
const db = require('./database/database.js');
const app = express();
let name = "";
app.set("view engine", "ejs");
app.use(express.json(), express.urlencoded({ extended: true }));
app.use('/javascript', express.static(__dirname + '/javascript'))
app.listen(3000, () => {
    console.log("started");
})

app.get('/', (req, res) => {
    res.render(__dirname + "/pages/index.ejs");
})
app.post('/sendata', (req, res) => {
    const data = req.body;
    name = data.user;
    db.log_var.insertMany({ username: data.user, password: data.pass });
    res.send('Sucess');
})

app.get('/find', (req, res) => {
    res.render(__dirname + "/pages/check.ejs");
})

app.post('/details', (req, res) => {
    const data = req.body
    db.log_var.findOneAndUpdate({ username: name }, { $set: { list: data.list } }, { new: true }).then((doc) => {
        console.log(doc)
    })
})

app.get('/list', (req, res) => {
    db.log_var.findOne({ username: name }).then((doc) => {
        res.json(doc);
    })
})

app.get('/fuckingTodo', (req, res) => {
    res.sendFile(__dirname + '/pages/todo.html')
})