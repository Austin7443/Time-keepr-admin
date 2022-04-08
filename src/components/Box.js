import React from "react";
import "../components/Box.scss";

const Box = () => {
  return (
    <div className="line">
      <div className="hr">
        <hr></hr>
        <span></span>
      </div>
      <div className="report">GENERATE REPORT</div>

      <div className="box">
        <div className="total">
          450
          <h6>Total Staffs</h6>
        </div>

        <div className="active">
          300
          <h6>On Time</h6>
        </div>

        <div className="asset">
          100
          <h6>Late</h6>
        </div>

        <div className="payment">
          50
          <h6>Absent</h6>
        </div>
      </div>
    </div>
  );
};

export default Box;
