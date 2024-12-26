import React, { useState, useEffect } from "react";
import { getTasksByUserId } from "../../api/userApi";

function ListTaskByUser({ id }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      try {
        const taskData = await getTasksByUserId(id);
        setTasks(taskData || []);
      } catch (error) {
        console.log("error", error);
      }
    };
    getTasks();
  }, [id]);

  return (
    <div>
      <h1>List Task</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <strong>{task.name}</strong> - Deadline: {task.deadline}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListTaskByUser;
