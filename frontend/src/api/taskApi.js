import axios from "axios";

export const createTask = async (taskData) => {
  try {
    const payload = {
      ...taskData,
      user_id: taskData.user_id || null
    };

    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/task/create`,
      taskData, payload,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateTaskById = async (id, taskData) => {
  try {
    const payload = {
      ...taskData,
      user_id: taskData.user_id || null
    };

    const response = await axios.put(
      `${process.env.REACT_APP_API_URL}/task/update/${id}`,
      payload,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error?.response?.data || error;
  }
};

export const deleteTaskById = async (id) => {
  try {
    const response = await axios.delete(`${process.env.REACT_APP_API_URL}/task/delete/${id}`);
    return response.data;
  } catch (error) {
    throw error?.response?.data || error;
  }
};

export const getAllTasks = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/task`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getTaskById = async (id) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/task/${id}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};