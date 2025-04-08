import React from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const {username} = useParams()

  return (
    <div style={{ textAlign: "center", padding: "20px", border: "1px solid #ddd", borderRadius: "10px", maxWidth: "300px", margin: "auto" }}>
      <h2>{username}</h2>
      <p><strong>Age:</strong> 20</p>
      <p><strong>Location:</strong> Bangalore</p>
      
    </div>
  );
};

export default Profile;
