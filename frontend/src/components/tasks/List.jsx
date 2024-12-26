import { useState, useEffect } from "react";
import { getAllTasks, getTaskById, deleteTaskById } from "../../api/taskApi";
import { Link, useNavigate } from "react-router-dom";

function List() {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getTasks = async () => {
      try {
        const taskData = await getAllTasks();
        setTasks(taskData);
      } catch (error) {
        console.log("error", error);
      }
    };
    getTasks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteTaskById(id);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.log("error", error);
    }
  };

    const handleView = async (id) => {
      try {
        await getTaskById(id);
        navigate(`/view-task/${id}`);
      } catch (error) {
        console.log("error", error);
      }
    };
  return (
    <div>
      <h1>List tasks</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            name: {task.name}, deadline: {task.deadline}, assigned to: {task.user?.name}{" "}
            <Link to={`/update-task/${task.id}`}>edit</Link>{" "}
            <button onClick={() => handleDelete(task.id)}>delete</button>
            <button onClick={() => handleView(task.id, navigate)}>view</button> 
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
