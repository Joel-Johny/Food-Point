import React from "react";

class AboutClassChildren extends React.Component {

  constructor(props) {
    super(props);  // Call super with 'props'
    // Now you can destructure 'props' if needed
    this.state = {
      count1: 0,
      count2: 0,
    };
    console.log("child constructor",this.props.name)
  }

  componentDidMount(){
    console.log("Child did mount",this.props.name)
  }

  render() {
    console.log("child render",this.props.name)

    const { name, age } = this.props; // Destructure here if not done in constructor
    const { count1,count2 } = this.state; // Destructure here if not done in constructor
    return (
      <div>
        <h1>About Us</h1>
        <p>This is the About Us page for {name}, aged {age}. (Class-based)</p>
        {/* no need to do ...this.state it will work without it also inside this.state you just have tyo give prop you want to change  */}
        <button onClick={()=>{this.setState({...this.state,count1:this.state.count1+1})}}>Click ME</button>
        {count1}
        <button onClick={()=>{this.setState({count2:this.state.count2+1})}}>Click ME</button>
        {count2}
      </div>
    );
  }
}

export default AboutClassChildren;
