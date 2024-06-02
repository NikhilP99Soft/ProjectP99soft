import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        height: "100px",
        backgroundColor: "#DCDCDC",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
      }}
    >
      <h1 style={{ marginTop: "30px" }}>Conctact Us:</h1>
      <img
        src="src\assets\facebook.png"
        style={{ height: "50px", width: "50px", marginTop: "25px" }}
      />
      <img
        src="src\assets\insta.png"
        style={{ height: "50px", width: "50px", marginTop: "25px" }}
      />
      <img
        src="src\assets\twitter-new.png"
        style={{ height: "50px", width: "50px", marginTop: "25px" }}
      />
      <img
        src="src\assets\yt-new-tra.png"
        style={{ height: "50px", width: "50px", marginTop: "25px" }}
      />
    </div>
  );
};

export default Footer;
