import {useState} from 'react';

export const FunctionalTrafficLight = () => {

  const [circleOneColor, setCircleOneColor] = useState('red');
  const [circleTwoColor, setCircleTwoColor] = useState('');
  const [circleThreeColor, setCircleThreeColor] = useState('');

  const changeLightColor = () => {
    if (circleOneColor === 'red') {
      setCircleOneColor('')
      setCircleTwoColor('yellow')
    }
    if (circleTwoColor === 'yellow') {
      setCircleTwoColor('')
      setCircleThreeColor('green')
    }
    if (circleThreeColor === 'green') {
      setCircleThreeColor('')
      setCircleOneColor('red')
    }
  }

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        {/* Background color can be black | yellow | red | green */}
        <div className={`circle black ${circleOneColor}`}></div>
        <div className={`circle black ${circleTwoColor}`}></div>
        <div className={`circle black ${circleThreeColor}`}></div>
      </div>
      <button className="next-state-button" onClick={changeLightColor}>Next State</button>
    </div>
  );
};