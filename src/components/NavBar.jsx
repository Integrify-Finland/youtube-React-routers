import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="nav">
      <Link to="/home">Home</Link>
      <Link to="/product">Products</Link>
    </div>
  );
}
