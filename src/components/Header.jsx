import React from "react"
import { Link } from "react-router-dom"

export default function Header(){

    return(
        <div className="header">
            <Link to="/">
            <div className="logo">
                <img id="title" src="../public/vite.svg" alt="some logo" />
                <Title/>
            </div>
            </Link>

            <div >
                <ul className="nav-items">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>
        </div>
    )
}

 function Title(){

    return(
        <h1 htmlFor="title">Food-Point</h1>
    )
}