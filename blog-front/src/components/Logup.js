import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import Login from "./logup/Login.js";
import Signup from "./logup/Signup.js";
import Createblog from './Createblog';
import ViewAll from './views/ViewAll';
import ViewPersonal from './views/ViewPersonal';
function Logup() {
    let compar = [<Signup/>, <Login/>]
    let [logcomp,setlogComp] = useState(0)
    let [userlogged, setuserlogged] = useState(false)
    let [loggedname, setloggedname] = useState("")
    let [loggedemail, setloggedemail] = useState("")
    let [signedrender,setsignedrender] = useState(0)
    let signedele = [<Createblog loggedemail={loggedemail}/>,
                    <ViewPersonal loggedemail={loggedemail}/>,
                    <ViewAll loggedemail={loggedemail}/>]
    useEffect(()=>console.log(userlogged,loggedname),[userlogged, loggedname])
    let logrenderele

    const setuplogin = () => {
        setuserlogged(false);
        setloggedname("")
    }


    if(userlogged === false){
        logrenderele = [
            <div key={0}>
                <button><span onClick = {() => logupHandler(0)}>singup</span></button>
                <button><span style={{margin:"5px"}} onClick = {() => logupHandler(1)}>login</span></button>
                {logcomp==0? <Signup/> : <Login setuserlogged={setuserlogged} 
                setloggedname={setloggedname} setloggedemail={setloggedemail}/>}
            </div>]
    }else{
        logrenderele = [
            <div key={1}>
                <h1 style={{fontSize:"15px"}}>{loggedname} </h1>
                <p style={{fontSize:"15px"}}>{loggedemail} </p>
                <button onClick = {setuplogin}>logout</button><br/>
                <span onClick={()=>{setsignedrender(0)}}  style={{margin:"5px"}}>Create blog</span>
                <span onClick={()=>{setsignedrender(1)}} style={{margin:"5px"}}>View Your Blogs</span>
                <span onClick={()=>{setsignedrender(2)}} style={{margin:"5px"}}>View all blog</span>
                <br/>
                {signedele[signedrender]}
                {/* <NavLink style={{margin:"5px"}} to = "/create"> Create blog </NavLink>
                <NavLink style = {{margin:"5px"}} to = "/viewpersonal">View Your Blogs</NavLink> */}
            </div>]
    }


    const logupHandler = (ele) => {
        if(ele === 0){
            setlogComp(0)
        }else{
            setlogComp(1)
        }
    } 
    
    return (
        <>
        {logrenderele}
        </>
    );
}

export default Logup