import React, { useState, useEffect, use } from "react";
import { useParams } from "react-router-dom";
import { getAllGroups, addMemberToGroup } from "../../api/groupApi";

function JoinGroup({ userId }) {
  const [groups, setGroups] = useState([]);
  useEffect(() => {
    const getGroups = async () => {
      try {
        const groupData = await getAllGroups();
        setGroups(groupData);
      } catch (error) {
        console.log("error", error);
      }
    };
    getGroups();
  }, []);

  const handleJoin = async (groupId) => {
    try {
      if (!userId) {
        console.log("User id gk nemu");
        return;
      }
      if (!groupId) {
        console.log("Group id gk nemu");
        return;
      }
      await addMemberToGroup(groupId, userId);
      console.log("User joined group", userId, groupId);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div>
      <h1>Join Group</h1>
      <ul>
        {groups.map((group) => (
          <li key={group.id}>
            {group.name}, {group.desc},{" "}
            <button onClick={() => handleJoin(group.id)}>join</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JoinGroup;
