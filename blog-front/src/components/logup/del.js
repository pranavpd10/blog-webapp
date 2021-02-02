import React, {Component} from 'react'

class New extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             nw:"name"
        }
    }
    render(){
        return(<h1>{this.state.nw}</h1>)
    }
}

export default New