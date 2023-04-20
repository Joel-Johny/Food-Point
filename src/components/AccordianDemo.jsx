import React from "react";

const Basic=({title,description})=>{
     //child
    const [visible,setVisible]=React.useState(false)
    function toggleView(){
        setVisible((old)=>!old)
    }
    return(
        <div onClick={toggleView} className="accord">
            {visible?<em>{"↓"+title}</em>:<em>{"→"+title}</em>}
            {visible && <p>{description}</p>}
        </div>
    )
}

const Collapse=({title,description,setVisible,visibility,id})=>{
    //child
   function toggleView(){
        //1st way 
    //     setVisible((old)=>{
    //         let object={...old}
    //         for(let i in old)
    //             object[i]=false
    //         object[id]=!old[id]
    //         console.log(old,object)
    //         return object
    //     }
    //    )

    //2nd way 

    setVisible((old)=>{

        if (old.length==0){
            console.log(old,id)
            return id
        }

        else {
            
            if(old==id)
                return ""
            else
                return id
        }
    })

   }
   return(
       <div onClick={toggleView} className="accord">
            {/* {console.log(visibility)} */}
           {visibility?<em>{"↓"+title}</em>:<em>{"→"+title}</em>}
           {visibility && <p>{description}</p>}
       </div>
   )
}


const AccordianDemo =()=>{
    //Parent

    //1st way
    // const [visible,setVisible]=React.useState({
    //     "col1":false,
    //     "col2":false,
    //     "col3":false,
    // })

    //2nd way
    const [visible,setVisible]=React.useState("")
    return (
        <>
        <div className="basic">
            <h2>This is Basic Accordian. </h2>
            <p>Here state is maintained by indivuidual Accordian Component</p>
            <Basic title={"Something basic 1"} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}/>
            <Basic title={"Something basic 2"} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}/>
            <Basic title={"Something basic 3"} description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}/>
        </div>
        {/* 1st way */}
        {/* <div className="collapse">
            <h1>This is collapsile Accordian.Here only one menu can open at a time </h1>
            <h2>Unlike "Basic" this implement concept of "Lifting State Up"   </h2>
            <Collapse
             title={"Something basic 1"} 
             description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}
             visibility={visible.col1}
             setVisible={setVisible}
             id={"col1"}
             />

            <Collapse
                title={"Something basic 2"}
                setVisible={setVisible}
                visibility={visible.col2}
                id={"col2"}
                description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}
                />

            
            <Collapse
                title={"Something basic 3"}
                setVisible={setVisible}
                visibility={visible.col3}
                id={"col3"}
                description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}
                />

        </div> */}

        {/* 2nd way  */}
        <div className="collapse">
            <h2>This is collapsile Accordian.Here only one menu can open at a time </h2>
            <p>Unlike "Basic" this implements concept of "Lifting State Up".Here state is maintained by parent component   </p>
            <Collapse
             title={"Something basic 1"} 
             description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}
             visibility={"col1"==visible}
             setVisible={setVisible}
             id={"col1"}
             />

            <Collapse
                title={"Something basic 2"}
                setVisible={setVisible}
                visibility={visible=="col2"}
                id={"col2"}
                description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}
                />

            
            <Collapse
                title={"Something basic 3"}
                setVisible={setVisible}
                visibility={visible=="col3"}
                id={"col3"}
                description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"}
                />

        </div>
        </>
    )
}

export default AccordianDemo