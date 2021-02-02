import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch,NavLink} from "react-router-dom";
import  axios from 'axios'
import ViewPersonal from "../views/ViewPersonal.js"
import Createblog from "../Createblog"

class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
            email : "",
            password : "",
            massage:"",
            loggedin:"",
            loggedstate:false
        };
    }

    changeHandler = (e)=>{
        // console.log([e.target.name],e.target.value,this.state.email)
            this.setState({[e.target.name]:e.target.value})
    }

    loginsubmit = (e)=>{
        e.preventDefault()
        console.log(this.state)
        this.setState({massage:""})
        this.setState({loggedin:""})
        axios.post("http://localhost:3001/logup/login",this.state)
        .then(result =>{
            if(result.data.massage === "user doesn't exists please signup" ||
            result.data.massage === "invalid username password"){
            this.setState({massage: `${result.data.massage}`})
            }else{
            this.setState({loggedstate:true,loggedin: `${result.data.massage}`})
            this.props.setloggedemail(result.data.email)
            this.props.setuserlogged(true)
                this.props.setloggedname(result.data.massage)
                
            }
            }
            )
    }

    loggedstatechange= () =>{
        this.setState({email:"",password:"",massage:"",loggedin:"",loggedstate:false})
    }
    
    render(){
        return(
        <div>
            <form style = {{display:this.state.loggedstate?'none':'initial'}}  onSubmit={this.loginsubmit} >
                <label htmlFor="email">email:</label>
                <input type="text" name="email" id="email" onChange={this.changeHandler}
                value={this.state.email}/><br/>
                <label htmlFor="password">password:</label>
                <input type="password" name="password" id="password" onChange={this.changeHandler}
                value={this.state.password}/>
                <br/>
                <button type="submit">Login</button>
            </form>
            <div>{this.state.massage}</div>
            <div>{this.state.loggedin}</div>
            <button onClick={this.loggedstatechange}
            style={{display:this.state.loggedstate?'initial':'none'}}>logout</button>
        </div>
        );
    }
}

export default Login
