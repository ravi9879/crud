import React from 'react'
import {Link , useLocation} from 'react-router-dom'

function Nav() {
    const location = useLocation() ;
    return (
        <nav className='container1'> 
            <Link className={`${location.pathname === "/" ? "" : "li"}`} to="/">Log Out</Link>
            <Link className={`${location.pathname === "/delete" ? "" : "li"}`} to="/delete">Delete</Link>
            <Link className={`${location.pathname === "/studs" ? "" : "li"}`} to="/studs">Home</Link>
            <Link className={`${location.pathname === "/update" ? "" : "li"}`} to="/update">Update</Link>
            <Link className={`${location.pathname === "/create" ? "" : "li"}`} to="/create">Create</Link>
        </nav>
    )
}

export default Nav