import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="bg-base-200 pt-5">
      <header className="max-w-11/12 mx-auto">
        <Navbar></Navbar>
      </header>
      <main className="max-w-11/12 mx-auto">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default AuthLayout;
