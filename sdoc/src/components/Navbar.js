import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const loc = useLocation();
  return (
    <nav className="nav">
      <div className="brand" style={{ fontWeight: 700 }}>
        sdoc
      </div>
      <div>
        <Link to="/" className={loc.pathname === "/" ? "active" : ""}>
          Home
        </Link>
        <Link
          to="/generate"
          className={loc.pathname === "/generate" ? "active" : ""}
        >
          Generate
        </Link>
      </div>
    </nav>
  );
}
