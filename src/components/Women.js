import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const Women = () => {
  return (
    <div>
      Women Items
      <ul>
        <li>
          {" "}
          <NavLink to="Grooming">Grooming</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="Shirt">Shirt</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to="Trouser">Trouser</NavLink>
        </li>
        <li>
          <NavLink to="Jewellery">Jewellery</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Women;
