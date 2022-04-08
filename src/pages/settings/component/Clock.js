import React, { useState } from "react";
import "../component/Clock.scss";

const Clock = () => {
  const time = new Date().toLocaleTimeString();

  const [ctime, setctime] = useState(time);

  const Updatetime = () => {
    // eslint-disable-next-line no-const-assign
    time = new Date().toLocaleTimeString();
    setctime(time);
  };

  setInterval(Updatetime, 10);
  return (
    <div>
      <div className="clock">{ctime}</div>
      <button id="clockbutton">Reset Time</button>
    </div>
  );
};

export default Clock;
