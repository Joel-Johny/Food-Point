import React from "react"
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from "react-loading-skeleton"
const MenuShimmer=()=>{

    return(
            <>
            <div className="title-shimmer">
                    <div className="img-shimmer"><Skeleton height={200} width={317.4}/></div>
                    <div className="label-shimmer">
                        <h2><Skeleton width={320} /></h2>
                        <h3><Skeleton width={180}/></h3>
                        <h3><Skeleton width={150}/></h3>        
                    </div>
            </div>


            </>

    )
}

export default MenuShimmer