import React from 'react'
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUserById } from "../../api/userApi";

function View() {
    const { id } = useParams();
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    });

    useEffect(() => {
        const getUser = async () => {
            try {
                const user = await getUserById(id);
                setUserData(user);
            } catch (error) {
                console.log("error", error);
            }
        };
        getUser();
    }, [id]);


  return (
    <div>
      <h1>View User id: {id}</h1>
        <div>
            <label>
            Name:
            {userData.name}
            </label>
        </div>
        <div>
            <label>
            Email:
            {userData.email}
            </label>
        </div>
        <div>
            <label>
            Phone:
            {userData.phone}
            </label>
        </div>
        <div>
            <label>
            Address:
            {userData.address}
            </label>
        </div>
    </div>
  )
}

export default View