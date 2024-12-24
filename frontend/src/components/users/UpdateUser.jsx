import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { updateUserById, getUserById } from "../../api/userApi";

function UpdateUser() {
  const { id } = useParams();
  const navigate = useNavigate();
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await updateUserById(id, userData);
      console.log("User updated", data);
      navigate("/user");
    } catch (error) {
      console.log("Failed to update user", error);
    }
  };

  return (
    <div>
      <h1>Update User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Phone:
            <input
              type="text"
              name="phone"
              value={userData.phone}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={userData.address}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default UpdateUser;
