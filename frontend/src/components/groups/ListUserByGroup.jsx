import React, { useState, useEffect } from "react";
import { getGroupById, removeMemberFromGroup } from "../../api/groupApi";

function ListUserByGroup({ id }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const groupData = await getGroupById(id);
        setUsers(groupData.users || []);
      } catch (error) {
        console.log("error", error);
      }
    };
    getUsers();
  }, [id]);

  const handleRemove = async (userId) => {
    try {
      await removeMemberFromGroup(id, userId);
      setUsers(users.filter((user) => user.id !== userId));
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div>
      <h2>List Group Members</h2>
      <div>
        <ul>
          {users && users.length > 0 ? (
            users.map((user) => (
              <li key={user.id}>
                {user.name}, {user.email}, {user.phone}, {user.address}
                <button onClick={() => handleRemove(user.id)}>remove</button>
              </li>
            ))
          ) : (
            <p>No users found</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default ListUserByGroup;
