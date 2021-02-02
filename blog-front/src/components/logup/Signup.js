import React, {Component} from 'react'
import  axios from 'axios'

class Signup extends Component{
    constructor(props) {
        super(props);
        this.state = {
            fname : "",
            lname : "",
            email : "",
            password : "",
            massage:""
        };
    }

    changeHandler = (e)=>{
            this.setState({[e.target.name]:e.target.value})
    }

    signupsubmit = (e)=>{
        e.preventDefault()
        this.setState({massage:""})
        console.log(this.state)
        axios.post("http://localhost:3001/logup/signup",this.state)
             .then(result =>{console.log(result.data.massage === "user already exists please login")
            if(result.data.massage === "user already exists please login"){
                this.setState({massage: "user already exists please login"})
            }
            })
    }
    render(){
        return(
        <div>
            <form onSubmit={this.signupsubmit}>
                <label htmlFor="fname" >First name:</label>
                <input type="text" id="fname" name="fname" onChange={this.changeHandler}/><br/>
                <label htmlFor="lname">Last name:</label>
                <input type="text" id="lname" name="lname" onChange={this.changeHandler}/><br/>
                <label htmlFor="email">email:</label>
                <input type="text" name="email" id="email" onChange={this.changeHandler}/><br/>
                <label htmlFor="password">password:</label>
                <input type="password" name="password" id="password" onChange={this.changeHandler}/>
                <br/>
                <button type="submit"> Sign Up</button>
            </form>
            <div className = "massage"> {this.state.massage} </div>
        </div>
        );
    }
}

export default Signup
