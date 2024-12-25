import React, { useState, useEffect } from "react";
import { getGroupsByUserId } from "../../api/userApi";

function ListGroupByUser({ id }) {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const getGroups = async () => {
      try {
        const groupData = await getGroupsByUserId(id);
        setGroups(groupData);
      } catch (error) {
        console.log("error", error);
      }
    };
    getGroups();
  }, [id]);

  return (
    <div>
      <h1>List Group joined</h1>
      <ul>
        {groups.map((group) => (
          <li key={group.id}>
            {group.name}, {group.desc}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroupByUser;
