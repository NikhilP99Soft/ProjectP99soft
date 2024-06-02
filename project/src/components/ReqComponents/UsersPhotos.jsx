import React from "react";

const UserPhotos = ({ user }) => {
  if (!user || !user.thumbnailUrl || !user.title) {
    return <div>Invalid photo data</div>;
  }

  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "5px",
    padding: "20px",
    margin: "50px 50px",
    width: "400px",
    height: "300px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  };

  const imageStyle = {
    height: "80%",
    width: "100%",
    objectFit: "cover",
  };

  return (
    <div style={cardStyle}>
      <img src={user.thumbnailUrl} alt={user.title} style={imageStyle} />
      <p>{user.title}</p>
    </div>
  );
};

export default UserPhotos;
