import React, { useEffect } from "react";
import About2FunctionChildren from "./About2FunctionChildren";

const About2Function = () => {
  console.log("About2Function Parent Render");

  useEffect(()=>{
    console.log("About2Function Parent Mounted");
  },[])
  return (
    <>
      <div>About2Function</div>
      <About2FunctionChildren name={"First"}/>
      <About2FunctionChildren name={"Second"}/>
    </>
  );
};

export default About2Function;
