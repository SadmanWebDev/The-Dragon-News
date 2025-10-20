import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div className="mt-7 mb-5">
      <h1 className="text-xl font-semibold">Find Us On</h1>
      <div className="">
        <div className="join join-vertical w-full mt-5">
          <button className="btn bg-base-100 justify-start join-item text-accent"><FaFacebook size={20}></FaFacebook>Facebook</button>
          <button className="btn bg-base-100 justify-start join-item text-accent"><FaTwitter size={20}></FaTwitter>Twitter</button>
          <button className="btn bg-base-100 justify-start join-item text-accent"><FaInstagram size={20}></FaInstagram>Instagram</button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
