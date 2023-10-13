import {useState} from 'react';

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

export const FunctionalTrafficLight = () => {

  const [index, setIndex] = useState(0);

  const changeLightColor = () => {
    if (index < validStates.length - 1) {
      setIndex(index + 1)
    } else {
      setIndex(0)
    }
  }

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        {/* Background color can be black | yellow | red | green */}
        <div className={`circle black ${validStates[index].top}`}></div>
        <div className={`circle black ${validStates[index].middle}`}></div>
        <div className={`circle black ${validStates[index].bottom}`}></div>
      </div>
      <button className="next-state-button" onClick={changeLightColor}>Next State</button>
    </div>
  );
};