import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [username, setUsername] = useState("instagram");

  return (
    <>
      <img src="https://via.placeholder.com/300" alt="prfile picture" />
      <div>@{username}</div>
      <button>Follow</button>
      <div>Posts</div>
      <div>Followers</div>
      <div>Following</div>
      <div>Bio</div>
    </>
  );
}
