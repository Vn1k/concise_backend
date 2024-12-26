import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import User from "./pages/users/User";
import Group from "./pages/groups/Group";
import Navbar from "./Navbar";
import UpdateUser from "./components/users/UpdateUser";
import UpdateGroup from "./components/groups/UpdateGroup";
import ViewUser from "./pages/users/ViewUser";
import ViewGroup from "./pages/groups/ViewGroup";
import Task from "./pages/tasks/Task";
import UpdateTask from "./components/tasks/Update";
import ViewTask from "./pages/tasks/ViewTask";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />

          {/* <-- User --> */}
          <Route path="user" element={<User />} />
          <Route path="update-user/:id" element={<UpdateUser />} />
          <Route path="view-user/:id" element={<ViewUser />} />

          {/* <-- Group --> */}
          <Route path="group" element={<Group />} />
          <Route path="update-group/:id" element={<UpdateGroup />} />
          <Route path="view-group/:id" element={<ViewGroup />} />

          {/* <-- Task --> */}
          <Route path="task" element={<Task />} />
          <Route path="update-task/:id" element={<UpdateTask />} />
          <Route path="view-task/:id" element={<ViewTask/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
