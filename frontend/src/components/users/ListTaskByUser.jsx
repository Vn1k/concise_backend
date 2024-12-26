import React, { useState, useEffect } from "react";
import { getTasksByUserId } from "../../api/userApi";

function ListTaskByUser({ id }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      try {
        const taskData = await getTasksByUserId(id);
        if (Array.isArray(taskData)) {
          setTasks(taskData);
        } else {
          console.log("Unexpected data format", taskData);
        }
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
            {task.name}, {task.deadline}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListTaskByUser;
