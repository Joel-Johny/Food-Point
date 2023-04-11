import React from "react"
import Skeleton,{SkeletonTheme } from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'

export default function Shimmer(){
    const shimmer=Array(25).fill(0).map((value,index)=>{
        return(

        <div className="card" key={index}>

            <div style={{marginBottom:'1.5rem'}}> <Skeleton height={140} /></div>
            <h2><Skeleton/></h2>
            <h4><Skeleton/></h4>
            <h5><Skeleton/></h5>
        </div>

        )
    })
    return(
        shimmer
    )
}