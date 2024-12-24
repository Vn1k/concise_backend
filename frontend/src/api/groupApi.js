import axios from "axios";

export const createGroup = async (groupData) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/group/create`,
      groupData,
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
