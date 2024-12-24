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

export const updateUser = async (id, userData) => {
  try {
    const response = await axios.put(
      `${process.env.REACT_APP_API_URL}/user/update/${id}`, userData,
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

export const fetchUsers = async () => {
  try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/users`)
      return response.data
  } catch (error) {
      console.log('error', error)
  }
}