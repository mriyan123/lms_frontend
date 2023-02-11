import React from "react";
import { Link } from "react-router-dom";
const leaveArray = ["CL", "SL", "PL", "ML", "LP"];
const HomePage = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {leaveArray.map((item) => (
        <div style={{ height: "100px", width: "100px", color: "red" }}>
          <Link to={'/details'}>{item}</Link>
        </div>
      ))}
    </div>
  );
};
export default HomePage;
