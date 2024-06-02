import React, { useState, useEffect } from "react";

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div
      style={{
        padding: "2em",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        backgroundColor: "#f0f0f0",
      }}
    >
      {users.map((user) => (
        <div
          key={user.id}
          className="card"
          style={{
            border: "1px solid #ddd",
            borderRadius: "5px",
            padding: "20px",
            margin: "50px 50px",
            width: "400px",
            height: "300px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          }}
        >
          <h2>{user.name}</h2>
          <p>
            <strong>Address:</strong> {user.address.street}
            {user.address.suite}, {user.address.city}, {user.address.zipcode}
          </p>
          <p>
            <strong>Email:</strong>
            {user.email}
          </p>
          <p>
            <strong>Website:</strong>

            {user.website}
          </p>
          <p>
            <strong>Company:</strong> {user.company.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default UsersPage;
