import axios from "axios";

export const createTask = async (taskData) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/task/create`,
      taskData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getTasksByUser = async (userId) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/task/user/${userId}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
