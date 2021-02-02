const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const loguprouter = require('./routers/loguprouter');
const blogrouter = require('./routers/blogrouter');
require('dotenv').config();


const dbURI = process.env.DATABASE_URI;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(3001, () => console.log("server is listening on 3001...")))
  .catch(err => console.log(err));
mongoose.set('useCreateIndex',true)

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use((req,res,next) => {
    console.log(typeof dbURI);
    next()});   


app.use('/logup', loguprouter);
app.use('/blog', blogrouter);

app.get('/pranav',(req, res) => {
    console.log("new response")
    res.sendFile("./views/pranav.html",{root:__dirname})
    });

const err4 = (req, res) =>{
    console.log("not found")
    res.end()
}
 
app.use(err4); 


// app.listen(3001, () => console.log("server is listening on 3001..."))