import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getTaskById } from "../../api/taskApi";
import ListUserByTask from "./ListUserByTask";

function View() {
  const { id } = useParams();
  const [taskData, setTaskData] = useState({
    name: "",
    deadline: "",
  });

  useEffect(() => {
    const getTask = async () => {
      try {
        const task = await getTaskById(id);
        setTaskData(task);
      } catch (error) {
        console.log("error", error);
      }
    };
    getTask();
  }, [id]);

  return (
    <div>
      <h1>View Task id: {id}</h1>
      <div>
        <label>
          Name:
          {taskData.name}
        </label>
      </div>
      <div>
        <label>
          Deadline:
          {taskData.deadline}
        </label>
      </div>
      <ListUserByTask id={id} />
    </div>
  );
}

export default View;
