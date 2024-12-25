import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import User from "./pages/users/User";
import Group from "./pages/Group";
import Navbar from "./Navbar";
import UpdateUser from "./components/users/UpdateUser";
import UpdateGroup from "./components/groups/UpdateGroup";
import ViewUser from "./pages/users/ViewUser";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="user" element={<User />} />
          <Route path="update-user/:id" element={<UpdateUser />} />
          <Route path="view-user/:id" element={<ViewUser />} />

          <Route path="group" element={<Group />} />
          <Route path="update-group/:id" element={<UpdateGroup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
