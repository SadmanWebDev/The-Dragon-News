import React from "react";
import logo from "../../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="flex justify-center flex-col items-center">
      <img className="w-[450px] mb-5" src={logo} alt="" />
      <p className="text-accent mb-2">Journalism Without Fear or Favour</p>
      <p className="font-semibold text-accent">
        {" "}
        {format(new Date(), "EEEE, MMMM MM, yyyy")}
      </p>
    </div>
  );
};

export default Header;
