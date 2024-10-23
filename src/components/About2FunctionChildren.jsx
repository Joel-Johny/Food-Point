import React, { useEffect } from "react";
import About2FunctionGrandChildren from "./About2FunctionGrandChildren"
const About2FunctionChildren = ({name}) => {

  console.log("child render",name)
  
  useEffect(()=>{
    console.log("child did mount",name);
  },[])

  return (
    <>
      <div>About2Function Children</div>
      <About2FunctionGrandChildren name={"grand1"}/>
      <About2FunctionGrandChildren name={"grand2"}/>
    </>
  );
};

export default About2FunctionChildren;
