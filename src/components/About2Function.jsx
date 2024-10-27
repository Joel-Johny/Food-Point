import React, { useEffect, useState } from "react";
import About2FunctionChildren from "./About2FunctionChildren";
import useOnline from "../utils/useOnline";

const About2Function = () => {
  console.log("About2Function Parent Render");
  const online = useOnline()



  const [count,setCount] = useState(0)
  useEffect(()=>{
    console.log("About2Function Parent did Mounted");
    return ()=>{console.log("Unmounted call from about 2 function")}
  },[count])
  
  if(!online)
    return (
      <div>You are offline</div>
    )
  return (
    <>
      <div>About2Function</div>
      <button onClick={()=>setCount((prev)=>prev+1)}>Count ++</button>
      {count}
      {/* <About2FunctionChildren name={"First"}/> */}
      {/* <About2FunctionChildren name={"Second"}/> */}
    </>
  );
};

export default About2Function;
