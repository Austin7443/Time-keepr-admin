import React from "react";
import "../component/Details.scss";
import Clock from "./Clock";
import Geofence from "./Geofence";

const Details = () => {
  return (
    <div className="alldetails">
      <div className="details">
        <h1>Location Details</h1>
        <form action="/" method="get" id="form">
          <textarea name="Message" rows="10" cols="30">
            Location...
          </textarea>
          <br></br>
          <label for="State"></label>
          <input
            type="text"
            name="State"
            id="State"
            value="State"
            required
          ></input>
          <br></br>

          <label for="City"></label>
          <input
            type="text"
            name="City"
            id="City"
            value="City"
            required
          ></input>
          <br></br>

          <label for="L.G.A"></label>
          <input
            type="text"
            name="L.G.A"
            id="L.G.A"
            value="L.G.A"
            required
          ></input>
          <br></br>

          <label for="Country"></label>
          <input
            type="text"
            name="Country"
            id="Country"
            value="Country"
            required
          ></input>
          <br></br>

          <button>Submit</button>
        </form>
      </div>

      <div className="rightdetails">
        <h2>Clock in Time Limit</h2>
        <Clock />
        <Geofence />
      </div>
    </div>
  );
};

export default Details;
