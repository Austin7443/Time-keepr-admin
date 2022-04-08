import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Add from "./pages/add/Add";
import User from "./pages/user/User";
import Analytics from "./pages/analytics/Analytics";
import Notifications from "./pages/notifications/Notifications";
import Settings from "./pages/settings/Settings";
import "../src/index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={"/"} element={<Dashboard />} />
        <Route exact path={"/add"} element={<Add />} />
        <Route exact path={"/user"} element={<User />} />
        <Route exact path={"/analytics"} element={<Analytics />} />
        <Route exact path={"/notifications"} element={<Notifications />} />
        <Route exact path={"/settings"} element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
