import { useState, useEffect } from "react";
import {
  getAllGroups,
  deleteGroupById,
  getGroupById,
} from "../../api/groupApi";
import { Link, useNavigate } from "react-router-dom";

function ListGroup() {
  const [groups, setGroups] = useState([]);
  const navigate = useNavigate();

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
      setGroups(groups.filter((group) => group.id !== id));
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleView = async (id) => {
    try {
      await getGroupById(id);
      navigate(`/view-group/${id}`);
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
            <button onClick={() => handleView(group.id, navigate)}>view</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;
