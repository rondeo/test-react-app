import React from 'react';
import './FirstTest.css';

class FirstTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {class: "off", label: "Press me"};

        this.press = this.press.bind(this);

    }
    press() {
        let className = (this.state.class === "off") ? "on" : "off";
        let label = (this.state.class === "off") ? "on" : "off";
        this.setState({class: className, label: label})
    }
    render() {
      return <div>
                <p>Name: {this.props.name}</p>
                <p>Age: {this.props.age}</p>
                <button onClick = {this.press} className = {this.state.class}>{this.state.label}</button>
                <div id="nav"></div>
              </div>;
    }
  }

// function FirstTest(props) {
//     return <div>
//         <p>Name: {props.name}</p>
//         <p>Name: {props.age}</p>
//     </div>;
// }

FirstTest.defaultProps = {name: "Daria", age: 22};

export default FirstTest;
