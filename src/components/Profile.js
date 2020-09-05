import React, { useState, useEffect } from "react";
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

  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log(search);
  }, [search]);

  return (
    <>
      <input
        placeholder="search profile"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <br />
      <br />

      <img src="https://via.placeholder.com/150" alt="profile picture" />
      <div>@{username}</div>
      <button onClick={() => setIsFollowed(!isFollowed)}>
        {isFollowed ? "Unfollow" : "Follow"}
      </button>
      <div>Posts</div>
      <div>Followers</div>
      <div>Following</div>
      <div>Bio</div>
      <div className="posts">
        {posts.length > 0
          ? posts.map((post, index) => <Post src={post} key={index} />)
          : "No Post Yet"}
      </div>
    </>
  );
};

export default Profile;
