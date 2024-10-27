import React,{useEffect} from "react";


const useOnline = () => {

const [online,setOnline]=React.useState(true)

useEffect(()=>{



    // return()=>{
    //     window.removeEventListener("online",online)
    //     window.removeEventListener("offline",offline)
    //     //to cleanUP the function
    // }

}
,[])

function onlineF(){
    setOnline(true)
    console.log("called online")
}

function offlineF(){
    setOnline(false)
    console.log("called offline")
}


window.addEventListener("online",onlineF)
window.addEventListener("offline",offlineF)

return online
}

export default useOnline
