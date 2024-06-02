import React from "react";
import { NavLink } from "react-router-dom";
import P99 from "../../assets/p99logo.png";

const Header = () => {
  return (
    <div
      style={{
        height: "100px",
        backgroundColor: "#DCDCDC",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <img
        src={P99}
        style={{ height: "70px", paddingTop: "10px", width: "200px" }}
      />
      <NavLink
        to=""
        style={{
          textDecoration: "none",
          textAlign: "center",
          paddingTop: "30px",
          color: "#808080",
          fontSize: "25px",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="post"
        style={{
          textDecoration: "none",
          textAlign: "center",
          paddingTop: "30px",
          color: "#808080",
          fontSize: "25px",
        }}
      >
        Post
      </NavLink>
      <NavLink
        to="photos"
        style={{
          textDecoration: "none",
          textAlign: "center",
          paddingTop: "30px",
          color: "#808080",
          fontSize: "25px",
        }}
      >
        Photos
      </NavLink>
      <NavLink
        to="user"
        style={{
          textDecoration: "none",
          textAlign: "center",
          paddingTop: "30px",
          color: "#808080",
          fontSize: "25px",
        }}
      >
        Users
      </NavLink>
    </div>
  );
};

export default Header;
