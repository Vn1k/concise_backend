import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { updateTaskById, getTaskById } from "../../api/taskApi";
import { getAllUsers } from "../../api/userApi";

function Update() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [taskData, setTaskData] = useState({
    name: "",
    deadline: "",
    user_id: "",
  });
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userData = await getAllUsers();
        setUsers(userData);
      } catch (error) {
        console.log("Gagal mengambil data users", error);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const getTask = async () => {
      try {
        const task = await getTaskById(id);
        setTaskData({
          ...task,
          deadline: task.deadline?.split("T")[0],
          user_id: task.user_id?.toString() || "",
        });
      } catch (error) {
        console.log("error", error);
      }
    };
    getTask();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...taskData,
        user_id: taskData.user_id || null
      };
      await updateTaskById(id, payload);
      navigate("/task");
    } catch (error) {
      console.log("Failed to update task", error);
    }
  };

  return (
    <div>
      <h1>Update Task</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={taskData.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Deadline:
            <input
              type="date"
              name="deadline"
              value={taskData.deadline}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <select
            name="user_id"
            value={taskData.user_id}
            onChange={handleChange}
          >
            <option value="">Select User</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Update Task</button>
      </form>
    </div>
  );
}

export default Update;
