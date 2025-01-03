import { useState } from "react";
import { createUser } from "../../api/userApi";

function CreateUser() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

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
      const data = await createUser(userData);
      console.log("User created", data);
    } catch (error) {
      console.log("Failed to create user", error);
    }
  };

  return (
    <div>
      <h1>Create User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
          />
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
        <button type="submit">Create User</button>
      </form>
    </div>
  );
}

export default CreateUser;
