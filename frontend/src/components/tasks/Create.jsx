import React, { useState, useEffect } from "react";
import { createTask } from "../../api/taskApi";
import { getAllUsers } from "../../api/userApi";

function Create() {
  const [taskData, setTaskData] = useState({
    name: "",
    deadline: "",
    user_id: "",
  });

  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userData = await getAllUsers();
        setUsers(userData);
      } catch (error) {
        console.log("Failed to fetch users", error);
      }
    };
    fetchUsers();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData({
      ...taskData,
      [name]: value,
    });
  };

  const handleUserSelect = (e) => {
    const userId = e.target.value;
    setSelectedUser(userId);
    setTaskData({
      ...taskData,
      user_id: userId || null,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await createTask(taskData);
      console.log("Task created", data);
      setTaskData({
        name: "",
        deadline: "",
        user_id: "",
      });
      setSelectedUser("");
    } catch (error) {
      console.log("Failed to create Task", error);
      alert("Task name already exists");
    }
  };

  return (
    <div>
      <h1>Create Task</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={taskData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Deadline:
          <input
            type="datetime-local"
            name="deadline"
            value={taskData.deadline}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Assign to:
          <select
            name="user_id"
            value={selectedUser}
            onChange={handleUserSelect}
          >
            <option value="">Select User</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </label>
        <br />
        <button type="submit">Create Task</button>
      </form>
    </div>
  );
}

export default Create;
