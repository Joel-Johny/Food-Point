import React, { useEffect } from "react";

const About2FunctionGrandChildren = ({name}) => {

  console.log("Grand child render",name)
  
  useEffect(()=>{
    console.log("Grand child did mount",name);
  },[])

  return (
    <>
      <div>About2Function GrandChildren</div>
    </>
  );
};

export default About2FunctionGrandChildren;
