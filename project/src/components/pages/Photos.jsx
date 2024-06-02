import React, { useEffect, useState } from "react";
import UserPhotos from "../ReqComponents/UsersPhotos";
// import { NavLink } from "react-router-dom";

function Photos() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPhotos(data.slice(0, 21));
      })
      .catch((err) => console.log(err));
  }, []);

  const cardRow = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    padding: "20px",
    backgroundColor: "#f0f0f0",
  };

  return (
    <div style={cardRow}>
      {photos.map((photo, i) => (
        <UserPhotos user={photo} key={i} />
      ))}
    </div>
  );
}

export default Photos;
