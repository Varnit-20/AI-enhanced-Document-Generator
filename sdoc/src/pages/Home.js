import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="card">
      <h2>Welcome to sdoc</h2>
      <p>
        A lightweight interactive front-end for generating short documents from
        prompts.
      </p>
      <Link to="/generate">
        <button className="btn">Go to Generate →</button>
      </Link>
    </div>
  );
}
