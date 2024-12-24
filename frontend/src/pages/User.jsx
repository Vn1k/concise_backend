import React from "react";
import CreateUser from "../components/users/CreateUser";
import ListUser from "../components/users/ListUser";

function User() {
  return (
    <div>
      <CreateUser/>
      <ListUser />
    </div>
  );
}

export default User;
