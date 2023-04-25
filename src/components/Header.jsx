import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export default function Header(){

    const cartCount=useSelector((store)=>{
        return store.cart.total
    })
    const [hamvis,setHamvis]=React.useState(true)
    function toggleTox(){
        document.getElementsByClassName("expand")[0].classList.add("show")
        setHamvis((old)=>{
            return !old
        })

    }   
     function toggleToH(){
        document.getElementsByClassName("expand")[0].classList.remove("show")
        setHamvis((old)=>{
            return !old
        })
    }
    return(
        <>
        <div className="section ">
            <div className="header">
            <Link to="/">
            <div className="logo">
                <img id="title" src="/logo.jpg" alt="some logo" />
                <h1 htmlFor="title">Food-Point</h1>
            </div>
            </Link>

            <div >
            <div className="mobile-nav-items">

                <ul style={{listStyle:"none"}}>
                    <li><Link to="/cartRedux"><div style={{display:`flex`,gap:`0.4rem`,alignItems:'center',justifyContent:'center'}}>Cart <div style={{border:'1px solid black',height:'20px',width:'35px',display:`flex`,alignItems:'center',justifyContent:'center'}}>{cartCount}</div></div></Link></li>
                </ul>
                
                {hamvis &&
                 (<div className="hamburger" onClick={toggleTox}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>)
                }
                {
                    !hamvis && <img onClick={toggleToH} style={{height:'20px',width:'20px'}} src="/cross.png"/>
                }
            </div>
           

                <ul className="pc-nav-items">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/accordian">Accordian</Link></li>
                    <li><Link to="/cartRedux"><div style={{display:`flex`,gap:`0.4rem`,alignItems:'center',justifyContent:'center'}}>Cart <div style={{border:'1px solid black',height:'20px',width:'35px',display:`flex`,alignItems:'center',justifyContent:'center'}}>{cartCount}</div></div></Link></li>
                </ul>


                
            </div>
            </div>
            <div className="expand">
                <ul className="expand-nav-items">
                    <li onClick={toggleToH}><Link to="/">Home</Link></li>
                    <li onClick={toggleToH}><Link to="/about">About</Link></li>
                    <li onClick={toggleToH}><Link to="/accordian">Accordian</Link></li>
                </ul>
            </div>


        </div>
        </>
       
    )
}

