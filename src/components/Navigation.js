import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink end to="/" >
        Accueil
      </NavLink>
      <NavLink end to="/news">
        News
      </NavLink>
      <NavLink end to="/a-propos">
        À propos
      </NavLink>
    </div>
  );
};

export default Navigation;
