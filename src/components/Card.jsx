import { url } from "../constant"
import React, { useEffect } from "react";

export default function Card({name,cloudinaryImageId,cuisines,areaName}){

    useEffect(() => {
        // Return the cleanup function, which runs when the component is unmounted
        return () => {
            console.log("Component unmounted card filtered/deleted", name);
        };
    }, []); // Dependency array
    
    
    return(
        <div className="card">
            <img src={url+cloudinaryImageId} alt="some image" className="rest-img" />
            <strong className="rest-name">{name}</strong>
            <h4>{cuisines.slice(0,2)}</h4>
            <h5>{areaName}</h5>
        </div>
    )
}