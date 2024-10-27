import React from "react";
import AboutClassChildren from "./AboutClassChildren";



class About2Class extends React.Component{
  constructor(props){
    super(props);
   console.log("Parent constructor")
  }

  componentDidMount(){
    console.log("Parent component did mount")
  }

  render(){
    console.log("Parent render")

    return (
      <>
        <div className="summary">
  
          <AboutClassChildren name={"First"} age={"18"} />
          {/* <AboutClassChildren name={"Second"} age={"1820"} /> */}
        </div>
      </>
    );
  }
 
}


export default About2Class;
