import React, { Component } from 'react';
import  axios from 'axios';

class Createblog extends Component{
    constructor(props) {
        super(props);
        this.state = {
            blogTitle : "",
            blogBody : "",
            massage:""
        };
    }

    changeHandler = (e)=>{
        // console.log([e.target.name], e.target.value)
        this.setState({[e.target.name]: e.target.value})
    }

    resetHandler = (e)=> {
        e.preventDefault()
        // console.log(this.state)
        let statekeys = Object.keys(this.state)
        for(let i=0; i<statekeys.length;i++){
            let keyval = statekeys[i]
            // console.log([`${keyval}`])
            this.setState((prevState)=>{return {[`${keyval}`] : ""}})   
            // console.log(this.state[`${keyval}`])
        }
        // this.setState({blogBody:"", blogTitle:""})
    }

    blogsubmit = (e)=>{
        e.preventDefault()
        console.log({...this.state, email:this.props.loggedemail})
        axios.post("http://localhost:3001/blog/newblog",
        {...this.state, email:this.props.loggedemail})
        .then((result)=>{if(result.data.massage ==="blog created"){
            console.log(result)
            let statekeys = Object.keys(this.state)
            for(let i=0; i<statekeys.length;i++){
                let keyval = statekeys[i]
                this.setState((prevState)=>{return {[`${keyval}`] : ""}})
            }
            this.setState({massage:"blog created"})
            console.log(`massage va ${this.state.massage}`)
        }else{
            this.setState(prevState => ({massage:result.data.massage}))
        }
    })
    }

    render(){
        return(
        <div>
            <div>{this.state.massage}</div>
            <form onSubmit={this.blogsubmit}>
                <label htmlFor="blogTitle"> Title:</label>
                <br/>
                <input type="text" id = "blogTitle" name="blogTitle" size="50"
                onChange={this.changeHandler} value = {this.state.blogTitle}/>
                <br/>
                <label htmlFor="blogBody"> Blog:</label><br/>
                <textarea style={{overflow :"auto", resize:"none"}} placeholder="write your feelings here..."
                id="blogBody" name="blogBody" rows="30" cols="50"
                onChange={this.changeHandler} value = {this.state.blogBody}>
                </textarea>
                <br/>
                <button> Create Blog</button>
                <button onClick = {this.resetHandler}>reset blog</button>
            </form>
        </div>
        );
    }
}

export default Createblog