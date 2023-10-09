import { Component } from "react";

export class ClassTrafficLight extends Component {

  state = {
    circle1: 'red',
    circle2: '',
    circle3: ''
  }

  changeLight = () => {
    if (this.state.circle1 === 'red') {
      this.setState(() => {
        return {circle1: '', circle2: 'yellow', circle3: ''}
      })
    }
    
    if (this.state.circle2 === 'yellow') {
      this.setState(() => {
        return {circle1: '', circle2: '', circle3: 'green'}
      })
    }
      
    if (this.state.circle3 === 'green') {
      this.setState(() => {
        return {circle1: 'red', circle2: '', circle3: ''}
      })
    }
  }

  render() {

    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          {/* Background color can be black | yellow | red | green */}
          <div className={`circle black ${this.state.circle1}`}></div>
          <div className={`circle black ${this.state.circle2}`}></div>
          <div className={`circle black ${this.state.circle3}`}></div>
        </div>
        <button className="next-state-button" onClick={this.changeLight}>Next State</button>
      </div>
    );
  }
}
