import { Component } from "react";

const validStates = [
  {
    top: 'red',
    middle: 'black',
    bottom: 'black'  
  },
  {
    top: 'black',
    middle: 'black',
    bottom: 'green'  
  },
  {
    top: 'black',
    middle: 'yellow',
    bottom: 'black'  
  }

]

export class ClassTrafficLight extends Component {
  
  state = {
    index: 0
  }

  changeLightColor = () => {
    if (this.state.index < validStates.length - 1) {
      this.setState(() => {
        return {index: this.state.index + 1}
      })
    } else {
      this.setState(() => {
        return {index: 0}
      })
    }
  }

  render() {

    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          {/* Background color can be black | yellow | red | green */}
          <div className={`circle black ${validStates[this.state.index].top}`}></div>
          <div className={`circle black ${validStates[this.state.index].middle}`}></div>
          <div className={`circle black ${validStates[this.state.index].bottom}`}></div>
        </div>
        <button className="next-state-button" onClick={this.changeLightColor}>Next State</button>
      </div>
    );
  }
}
