import React from "react";

const Card = ({ user }) => {
  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "5px",
    padding: "20px",
    margin: "50px 50px",
    width: "400px",
    height: "300px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  };

  const headerStyle = {
    fontSize: "1.5em",
    marginBottom: "10px",
  };

  const infoStyle = {
    marginBottom: "8px",
  };

  return (
    <div style={cardStyle}>
      <h3 style={headerStyle}>{user.id}</h3>
      <p style={infoStyle}>
        <strong>Title:</strong> {user.title}
      </p>
      <p style={infoStyle}>
        <strong>Body:</strong> {user.body}
      </p>
    </div>
  );
};

export default Card;
