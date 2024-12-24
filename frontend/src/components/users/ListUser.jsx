import { useState, useEffect } from "react";
import { getAllUsers } from "../../api/userApi";
import { Link } from "react-router-dom";

function ListUser() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const userData = await getAllUsers();
        setUsers(userData);
      } catch (error) {
        console.log("error", error);
      }
    };
    getUsers();
  }, []);
  return (
    <div>
      <h1>List Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}, {user.email}, {user.phone}, {user.address}{" "}
            <Link to={`/update-user/${user.id}`}>edit</Link>{" "}
            <Link to={`/delete-user/${user.id}`}>delete</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListUser;
