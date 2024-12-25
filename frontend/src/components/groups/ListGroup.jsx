import { useState, useEffect } from "react";
import { getAllGroups, deleteGroupById } from "../../api/groupApi";
import { Link } from "react-router-dom";

function ListGroup() {
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

  const handleDelete = async (id) => {
    try {
      await deleteGroupById(id);
      setGroups(groups.filter((group => group.id !== id)));
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div>
      <h1>List Groups</h1>
      <ul>
        {groups.map((group) => (
          <li key={group.id}>
            {group.name}, {group.desc},{" "}
            <Link to={`/update-group/${group.id}`}>edit</Link>{" "}
            <button onClick={() => handleDelete(group.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;
