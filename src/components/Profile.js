import React, { useState } from "react";
import Post from "./Post";

const Profile = () => {
  const [username, setUsername] = useState("instagram");
  const [isFollowed, setIsFollowed] = useState(false);
  const [posts, setPosts] = useState([
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300"
  ]);

  return (
    <>
      <img src="https://via.placeholder.com/150" alt="profile picture" />
      <div>@{username}</div>
      <button onClick={() => setIsFollowed(!isFollowed)}>
        {isFollowed ? "Unfollow" : "Follow"}
      </button>
      <div>Posts</div>
      <div>Followers</div>
      <div>Following</div>
      <div>Bio</div>
      {posts.length > 0
        ? posts.map((post, index) => <Post src={post} key={index} />)
        : "No Post Yet"}
    </>
  );
};

export default Profile;
