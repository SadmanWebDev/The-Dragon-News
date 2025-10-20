import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="my-7 flex items-center justify-center">
      <p className="bg-secondary text-white py-2 px-5 w-fit">Latest</p>
      <div className="bg-base-200 py-2 ">
        <Marquee className="flex gap-4" pauseOnHover={true} speed={70}>
          <p className="font-semibold">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
            commodi optio vel cupiditate aspernatur laboriosam.
          </p>
          <p className="font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            veritatis laboriosam facilis pariatur? Inventore praesentium ea
            alias quibusdam officiis!
          </p>
          <p className="font-semibold">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi
            commodi optio vel cupiditate aspernatur laboriosam. Lorem ipsum
            dolor sit amet consectetur adipisicing elit.
          </p>
        </Marquee>
      </div>
    </div>
  );
};

export default LatestNews;
