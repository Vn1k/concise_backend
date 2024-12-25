import axios from "axios";

export const getAllGroups = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/groups`);
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const getGroupById = async (id) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/group/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching group:", error);
  }
};

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

export const updateGroupById = async (id, groupData) => {
  try {
    const response = await axios.put(
      `${process.env.REACT_APP_API_URL}/group/update/${id}`,
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

export const deleteGroupById = async (id) => {
  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_API_URL}/group/delete/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting group:", error);
  }
};

export const addMemberToGroup = async (groupId, userId) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/group/${groupId}/users/${userId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error adding member to group:", error);
    throw error;
  }
};

export const removeMemberFromGroup = async (groupId, userId) => {
  try {
    const response = await axios.delete(
      `${process.env.REACT_APP_API_URL}/remove-member-from-group/${groupId}/users/${userId}`
    );
    return response.data;
  } catch (error) {
    console.error("Error removing member from group:", error);
  }
};