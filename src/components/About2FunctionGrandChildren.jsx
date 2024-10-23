import React, { useEffect } from "react";

const About2FunctionGrandChildren = ({name}) => {

  console.log("child render",name)
  
  useEffect(()=>{
    console.log("child did mount",name);
  },[])

  return (
    <>
      <div>About2Function GrandChildren</div>
    </>
  );
};

export default About2FunctionGrandChildren;
