import React from "react";

const About = () => {
  const [visible, setVisible] = React.useState("");
  const Collapse = ({ name, description, id, setVisible }) => {
    function toggle(){
      if(visible==id)
      setVisible("")
      else
      setVisible(id)
    }
    return( 
    <div className="accord" onClick={toggle}>
        <em>{(visible==id)?`↓${name}`:`→${name}`}</em>
        {(visible==id)&&<p>{description}</p>}
    </div>
    )
  };
  return (
    <>
    <div className="summary">
      <p>
      Food-Point is a responsive web application built using React, Redux, and React Router on the front-end, with Express on the back-end to fetch data from Swiggy's API. The website allows users to search for and view details of restaurants, menus, and prices on any device, including desktops, tablets, and smartphones. However, as I am still learning, there may be some bugs that need to be found and sorted out..!
      </p>

    </div>
      <div className="">
        <h2 style={{textAlign:"center"}}>Tech-Stack used:</h2>
        <div className="collapse" style={{border:"none",cursor:"pointer"}}>
          <Collapse
            name="React"
            description="A JavaScript library for building user interfaces that allows for reusable components, efficient rendering, and one-way data flow, resulting in a highly responsive and interactive UI."
            id="react"
            setVisible={setVisible}
          />
          <Collapse
            name="Redux-Toolkit"
            description="It's predictable state container for JavaScript applications, which allows for centralized state management and simplifies the flow of data across components, leading to more maintainable and scalable code."
            id="redux"
            setVisible={setVisible}
          />
          <Collapse
            name="React-Router"
            description="A popular routing library for React applications that enables client-side routing, allowing for efficient navigation between different views of the app without requiring a page refresh."
            id="router"
            setVisible={setVisible}
          />
          <Collapse
            name="Express"
            description="Utilized Express to fetch data from Swiggy's API and serve it to the front end, allowing for dynamic and up-to-date information on restaurant menus, images, and prices."
            id="express"
            setVisible={setVisible}
          />
        </div>
      </div>

      <h2 style={{textAlign:"center"}}>My Socials:</h2>
      <div className="socials">
      <a href="https://github.com/Joel-Johny" target="_blank" rel="noopener noreferrer"><img src="/github.png" alt="" style={{width:'50px'} }/></a>
        <a href="https://www.linkedin.com/in/joel--johny/" target="_blank" rel="noopener noreferrer"><img src="/lin.png" alt="" style={{width:'75px'}}/></a>
        <a href="mailto:joelj088@gmail.com"><img src="/gmail.jpg" alt="" style={{width:'49px'}}/></a>
      </div>
      <h2 style={{textAlign:"center",fontSize:"smaller",marginBottom:"1rem"}}>Developed with ❤️ by JJ</h2>

    </>
  );
};

export default About;
