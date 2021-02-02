import React from 'react';
import {NavLink} from 'react-router-dom';

function Navbar() {
    return (
        <> 
            <div>
                <NavLink to = "/"> Signup/ Login </NavLink>
                {/* <NavLink style = {{margin:"5px"}} to = "/viewall">viewall Blogs</NavLink> */}
                {/* <NavLink style={{margin:"5px"}} to = "/create"> Create blog </NavLink> */}
                {/* <NavLink style = {{margin:"5px"}} to = "/viewpersonal">View Your Blogs</NavLink> */}           
            </div>
        </>
    );
}

export default Navbar