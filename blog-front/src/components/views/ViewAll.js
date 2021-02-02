import React, { useState,useEffect } from 'react';
import  axios from 'axios';

// in the key= {blog.blogTitle} use {blog._id}

// const jsn = [ {blogTitle:"you", blogBody: "hi"},
//             {blogTitle:"mi", blogBody: "bye"},
//             {blogTitle:"ni", blogBody: "kay"}] 


function Renderblogs(prop) {
        const mapitem = prop.dataarr.map((blog)=>{
            return(<React.Fragment key={blog._id}>
            <h1>{blog.title}</h1>
            <p>{blog.body}</p>
            </React.Fragment>)
        })

    return (
        <div>
            {mapitem}
        </div>
    )
}

function ViewAll() {
    let [isLoading, setisLoading] = useState(false);
    let [divView, setdivView] = useState("Loading...");
    let [dataarr,setdataarr] = useState(()=>[]);
    useEffect(()=>{axios.get("http://localhost:3001/blog/getall").then(result =>{
        let rearr = result.data
        console.log(rearr)
        setdataarr(rearr)
        setisLoading(false)
    })},[])
    
    if(!isLoading && divView==="Loading..."){
        setdivView("Loaded")
        console.log(dataarr, divView)
        // let renderele = <Renderblogs dataarr={dataarr}/>
        // setdivView(renderele)
    }
    return (
        <div>
            {/* {divView} */}
            {!isLoading ? <Renderblogs dataarr={dataarr}/> : divView} 
        </div>
    )
    
}


export default ViewAll