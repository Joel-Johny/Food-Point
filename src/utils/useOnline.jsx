import React,{useEffect} from "react";


const useOnline = () => {

const [online,setOnline]=React.useState(true)

useEffect(()=>{

    function online(){
        setOnline(true)
        console.log("called online")
    }
    
    function offline(){
        setOnline(false)
        console.log("called offline")
    }


    window.addEventListener("online",online)
    window.addEventListener("offline",offline)

    // return()=>{
    //     window.removeEventListener("online",online)
    //     window.removeEventListener("offline",offline)
    //     //to cleanUP the function
    // }

}
,[])


return online
}

export default useOnline
