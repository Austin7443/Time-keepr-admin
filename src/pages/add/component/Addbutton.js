import React from "react";
import "../component/Addbutton.scss";

const Addbutton = () => {
  return (
    <div className="Addbutton">
      <button id="save">Save</button>
      <button id="add">Save & Add User</button>
      <button id="cancel">Cancel</button>
    </div>
  );
};

export default Addbutton;
