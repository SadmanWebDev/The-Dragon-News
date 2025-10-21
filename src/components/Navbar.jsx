import React from "react";
import { Link, NavLink } from "react-router";
import { RiAccountCircle2Fill, RiAccountCircle2Line } from "react-icons/ri";
const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div className=""></div>
      <div className="nav flex gap-8 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex gap-3">
        <RiAccountCircle2Line className="text-primary" size={45} />
        <Link to="/auth/login" className="btn btn-primary px-10">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
