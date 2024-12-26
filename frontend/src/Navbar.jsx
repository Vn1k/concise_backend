import React from "react";
import { Outlet, Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/user">User</Link>
          </li>
          <li>
            <Link to="/group">Group</Link>
          </li>
          <li>
            <Link to="/task">Task</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navbar;
