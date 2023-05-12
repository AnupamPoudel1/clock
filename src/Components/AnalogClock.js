import React, {useState} from 'react';

const AnalogClock = () => {

  const [hr, setHr] = useState();
  const [min, setMin] = useState();
  const [sec, setSecs] = useState();

  const updateClock = () => {
    let tm = new Date();
    let hours = tm.getHours();
    let minutes = tm.getMinutes();
    let seconds = tm.getSeconds();
    let miliseconds = tm.getMilliseconds();

    let hHandRotation = 30 * hours + 0.5 * minutes + (1 / 120) * seconds;
    let mHandRotation = 6 * minutes + (1 / 10) * seconds + (1 / 10000) * miliseconds;
    let sHandRotation = 6 * seconds + (6 / 1000) * miliseconds;

    setHr({rotate: hHandRotation+'deg'});
    setMin({rotate: mHandRotation+'deg'});
    setSecs({rotate: sHandRotation+'deg'});
  }

  setInterval(updateClock, 1);

  return (
    <div class="analog-clock">
      <div class="a-clock">
        <div id="hhand" style={hr}></div>
        <div id="mhand" style={min}></div>
        <div id="shand" style={sec}></div>
      </div>
    </div>
  )
}

export default AnalogClock
