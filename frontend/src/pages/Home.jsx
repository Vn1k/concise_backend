import React from "react";

function Home() {
  return (
    <div>
      <h1>API Testing Frontend</h1>
      <h3>general information</h3>
      <ul>
        <li>
          after <strong>create user or group</strong> and{" "}
          <strong>Join Group</strong>, you need to refresh the page to see the
          results
        </li>
        <li>
          the backend is using CASCADE when the group or user is remove its
          affect 2 sides
        </li>
      </ul>
    </div>
  );
}

export default Home;
