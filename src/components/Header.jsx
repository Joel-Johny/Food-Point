import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export default function Header(){

    const cartCount=useSelector((store)=>{
        return store.cart.total
    })
    return(
        <div className="header">
            <Link to="/">
            <div className="logo">
                <img id="title" src="../public/vite.svg" alt="some logo" />
                <Title/>
            </div>
            </Link>

            <div >
                <ul className="pc-nav-items">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/accordian">Accordian</Link></li>
                    <li><Link to="/cartContext"><div style={{display:`flex`,gap:`0.4rem`,alignItems:'center',justifyContent:'center'}}>Cart <div style={{border:'1px solid black',height:'20px',width:'35px',display:`flex`,alignItems:'center',justifyContent:'center'}}>100</div></div></Link></li>
                    <li><Link to="/cartRedux"><div style={{display:`flex`,gap:`0.4rem`,alignItems:'center',justifyContent:'center'}}>Cart <div style={{border:'1px solid black',height:'20px',width:'35px',display:`flex`,alignItems:'center',justifyContent:'center'}}>{cartCount}</div></div></Link></li>
                </ul>

                <ul className="mobile-nav-items">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/accordian">Accordian</Link></li>
                    <li><Link to="/cartContext"><div style={{display:`flex`,gap:`0.4rem`,alignItems:'center',justifyContent:'center'}}>Cart <div style={{border:'1px solid black',height:'20px',width:'35px',display:`flex`,alignItems:'center',justifyContent:'center'}}>100</div></div></Link></li>
                    <li><Link to="/cartRedux"><div style={{display:`flex`,gap:`0.4rem`,alignItems:'center',justifyContent:'center'}}>Cart <div style={{border:'1px solid black',height:'20px',width:'35px',display:`flex`,alignItems:'center',justifyContent:'center'}}>{cartCount}</div></div></Link></li>
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