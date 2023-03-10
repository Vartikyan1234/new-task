import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Главная</Link>
      <Link
        to={{
          pathname: "/about",
          state: {
            fromLocation: true,
          },
        }}
      >
        О проекте
      </Link>

      <Link
        to={{
          pathname: "/detali",
          state: {
            fromLocation: true,
          },
        }}
      >
        Messenges
      </Link>
      
    </div>
  );
}

export default Navigation;