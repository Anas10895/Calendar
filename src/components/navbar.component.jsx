import React, { Component } from 'react'
import {Link} from "react-router-dom"
export default class Navbar extends Component {
    render() {
        return (
<nav className="navba navbar-light bg-primary navbar-expand-lg">
<Link to="/" className="navbar-brand" > Offices Booking </Link>
<div className="collpase navbar-collapse">
    <ul className="navbar-nav mr-auto">
        <li className="navbar-item"> 
            <Link to="/" className="nav-link">All booking</Link>
        </li>
        <li className="navbar-item">
        <Link to="/create" className="nav-link">Book an Office</Link>

        </li>
        <li className="navbar-item">
        <Link to="/user" className="nav-link">Create user</Link>

        </li>
        <li className="navbar-item">
        <Link to="/calender" className="nav-link">Calender</Link>

        </li>
    
    </ul> 
</div>





</nav>
        )
    }
}
