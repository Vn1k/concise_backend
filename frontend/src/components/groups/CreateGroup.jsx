import { useState } from "react";
import { createGroup } from "../../api/groupApi";

function CreateGroup() {
  const [GroupData, setGroupData] = useState({
    name: "",
    desc: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGroupData({
      ...GroupData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await createGroup(GroupData);
      console.log("Group created", data);
    } catch (error) {
      console.log("Failed to create Group", error);
    }
  };

  return (
    <div>
      <h1>Create Group</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={GroupData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>
            Description:
            <input
              type="text"
              name="desc"
              value={GroupData.desc}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">Create Group</button>
      </form>
    </div>
  );
}

export default CreateGroup;
