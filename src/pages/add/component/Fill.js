import React from "react";
import "../component/Fill.scss";

const Fill = () => {
  return (
    <form action="/" method="get" id="form">
      <div className="ist">
        <h3>First Name</h3>
        <label for="First Name"></label>
        <input
          type="text"
          name="First Name"
          id="First Name"
          value=""
          required
        ></input>
        <small></small>
        <br></br>
        <h3>Department</h3>
        <label for="Department"></label>
        <input
          type="text"
          name="Department"
          id="Department"
          value=""
          required
        ></input>
        <small></small>
        <br></br>
        <h3>Email Address</h3>
        <label for="Email Address"></label>
        <input
          type="text"
          name="Email Address"
          id="Email Address"
          value=""
          required
        ></input>
        <small></small>
      </div>

      <div className="second">
        <h3>Last Name</h3>
        <label for="Last Name"></label>
        <input
          type="text"
          name="Last Name"
          id="Last Name"
          value=""
          required
        ></input>
        <small></small>
        <br></br>
        <h3>Phone number</h3>
        <label for="Phone number"></label>
        <input
          type="text"
          name="Phone number"
          id="Phone number"
          value=""
          required
        ></input>
        <small></small>
        <br></br>
        <h3>Fax</h3>
        <label for="Fax"></label>
        <input type="text" name="Fax" id="Fax" value="" required></input>
        <small></small>
      </div>
    </form>
  );
};

export default Fill;
