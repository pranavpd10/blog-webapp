const express = require('express');
const blogrouter = express.Router();
const Blog = require('../model/userblogs');

blogrouter.post('/newblog',(req,res) =>{
    const {blogBody : body , blogTitle : title, email} = req.body
    console.log(body, title, email)
    const blog = new Blog({email, title, body});
    blog.save()
            .then(result => {
            console.log("blog created")
            res.json({'massage':"blog created"});
            })
            .catch(err => {
            console.log(err);
            res.json({'massage':"error creation"})
            });
})

blogrouter.get("/getall",(req,res)=>{
    console.log("found")
    Blog.find().then(result=>{
        console.log("found")
        res.json(result)})
})

blogrouter.get("/getpersonal/:email",(req,res)=>{
    console.log("found")
    Blog.find({email:req.params.email}).then(result=>{
        console.log("found")
        res.json(result)})
})
blogrouter.delete("/personaldel/:id",(req,res)=>{
    // console.log("found")
    Blog.findByIdAndDelete(req.params.id).then(result=>{
        console.log("delete")
        res.json({massage:"deleted"})})
})


module.exports =  blogrouter;
