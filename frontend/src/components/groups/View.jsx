import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getGroupById } from "../../api/groupApi";
import ListUserByGroup from "./ListUserByGroup";

function View() {
  const { id } = useParams();
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

  return (
    <div>
      <h1>View Group id: {id}</h1>
      <div>
        <label>
          Name:
          {groupData.name}
        </label>
      </div>
      <div>
        <label>
          Description:
          {groupData.desc}
        </label>
      </div>
      <ListUserByGroup id={id} />
    </div>
  );
}

export default View;
