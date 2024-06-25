// Home.js
import React from "react";
import pic from "../pictures/pic.jpg";

const Home = () => {
  return (
    <div>
      <h2>Welcome to the Application!</h2>
      <p>This is the home page content.</p>
      <img
        src={pic}
        alt="Description of the picture"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
};

export default Home;
