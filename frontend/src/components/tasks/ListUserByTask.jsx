import React, { useState, useEffect } from "react";
import { getTaskById } from "../../api/taskApi";

function ListUserByTask({ id }) {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      try {
        const taskData = await getTaskById(id);
        setUser(taskData.user || []);
      } catch (error) {
        console.log("error", error);
      }
    };
    getUser();
  }, [id]);

  return (
    <div>
      <h2>Task Assigned to user</h2>
      <div>
      <div key={user.id}>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Address:</strong> {user.address}</p>
        </div>
      </div>
    </div>
  );
}

export default ListUserByTask;
