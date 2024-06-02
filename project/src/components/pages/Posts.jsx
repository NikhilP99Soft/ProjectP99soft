import React, { useEffect, useState } from "react";
import Card from "../ReqComponents/Card";
// import { Outlet } from "react-router-dom";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data.slice(0, 21)));
  }, []);
  console.log(posts);

  const cardColumn = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    padding: "20px",
    backgroundColor: "#f0f0f0",
  };

  return (
    <div>
      <div style={cardColumn}>
        {posts.map((post) => (
          <Card key={post.id} user={post} />
        ))}
      </div>
    </div>
  );
}

export default Posts;
