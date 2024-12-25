import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateGroupById, getGroupById } from "../../api/groupApi";

function UpdateGroup() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [groupData, setGroupData] = useState({
    name: "",
    desc: "",
  });

  useEffect(() => {
    const getGroup = async () => {
      try {
        const group = await getGroupById(id);
        setGroupData(group);
      } catch (error) {
        console.log("error", error);
      }
    };
    getGroup();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGroupData({
      ...groupData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await updateGroupById(id, groupData);
      console.log("Group updated", data);
      navigate("/group");
    } catch (error) {
      console.log("Failed to update group", error);
    }
  };

  return (
    <div>
      <h1>Update Group</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={groupData.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Description:
            <input
              type="text"
              name="desc"
              value={groupData.desc}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateGroup;
