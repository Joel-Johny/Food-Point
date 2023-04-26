import React from "react"
import Skeleton from "react-loading-skeleton"
import 'react-loading-skeleton/dist/skeleton.css'

export default function Shimmer(){
    const shimmer=Array(25).fill(0).map((value,index)=>{
        return(

        <div className="card-shimmer" key={index}>

            <div style={{marginBottom:'1rem',marginTop:'0.7rem'}}> <Skeleton height={149} width={220}/></div>
            <h2><Skeleton height={20} width={200}/></h2>
            <h4><Skeleton height={15} width={150}/></h4>
            <h5><Skeleton height={13} width={100}/></h5>
        </div>

        )
    })
    return(
        shimmer
    )
}