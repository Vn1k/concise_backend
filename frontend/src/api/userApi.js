import axios from "axios";

export const createUser = async (userData) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/user/create`,
      userData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const updateUserById = async (id, userData) => {
  try {
    const response = await axios.put(
      `${process.env.REACT_APP_API_URL}/user/update/${id}`,
      userData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const getUserById = async (id) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/user/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
  }
};

export const deleteUserById = async (id) => {
  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_API_URL}/user/delete/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting user:", error);
  }
};

export const getAllUsers = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/users`);
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const getGroupsByUserId = async (id) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/users/${id}/groups`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching groups:", error);
  }
};
