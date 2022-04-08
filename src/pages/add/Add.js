import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Fill from "./component/Fill";
import Addbutton from "./component/Addbutton";

const Add = () => {
  return (
    <div>
      <Navbar name="Add users" />
      <Sidebar />
      <Fill />
      <Addbutton />
    </div>
  );
};

export default Add;
