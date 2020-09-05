import React, { useState } from "react";
import Post from "./Post";

const Profile = () => {
  const [username, setUsername] = useState("instagram");
  const [isFollowed, setIsFollowed] = useState(false);

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
      <Post src="https://via.placeholder.com/300" />
    </>
  );
};

export default Profile;
