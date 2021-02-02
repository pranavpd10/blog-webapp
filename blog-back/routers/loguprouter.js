const express = require('express');
const loguprouter = express.Router();
const Bloguser = require('../model/usermodel');

loguprouter.post('/signup',(req,res) =>{
    // console.log(req.body)
    const {fname, lname, email, password} = req.body
    console.log(fname, lname, email, password)
    let newuser = false
    Bloguser.findOne({email: `${email.trim().toLowerCase()}`})
    .then(result=>{console.log(result==null);
        if(!(result===null)){
            console.log("false user");
            res.json({'massage':"user already exists please login"});
        }else{
            newuser = true
           
        }
        } )
        .then(()=>{
            console.log(`newuser ${newuser}`)
        if(newuser === true){
        console.log("true user")
        const blog = new Bloguser({fname,lname,email, password});
        blog.save()
            .then(result => {
            console.log("created")
            res.json(result);
            })
            .catch(err => {
            console.log(err);
            });
            // res.end()
    }
        })
        .catch(err=>console.log(err))
});

loguprouter.post('/login',(req,res) =>{
    const {email, password} = req.body
    // console.log(email, password)
    Bloguser.findOne({email: `${email.trim().toLowerCase()}`})
    .then(result => {
        if(result === null){
            res.json({'massage':"user doesn't exists please signup"});
        }
        else if(password == result.password){
            res.json({'massage':`signed in as ${result.fname.toLowerCase()} ${result.lname.toLowerCase()}`,
            'redirection':'/viewpersonal', 'email':`${result.email.toLowerCase()}`})
        }
        else{
            res.json({'massage':'invalid username password'})
        }
    })
})


module.exports =  loguprouter;