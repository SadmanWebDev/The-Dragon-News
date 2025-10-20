import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center justify-center my-7">
      <p className="bg-secondary text-white py-2 px-5 w-fit">Latest</p>
      <div className="bg-base-200 py-2 ">
        <Marquee className="flex" pauseOnHover={true} speed={70}>
          <p className="font-semibold mr-5">
            Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military
            Aid Package Yet
          </p>
          <p className="mr-5">|</p>
          <p className="font-semibold mr-5">
            Bangladesh's Export Earnings Show Strong Growth in Q1 2025
          </p>
          <p className="mr-5">|</p>
          <p className="font-semibold mr-5">
            Central Bank Announces New Monetary Policy to Control Inflation
          </p>
          <p className="mr-5">|</p>
          <p className="font-semibold mr-5">
            Central Bank Announces New Monetary Policy to Control Inflation
          </p>
          <p className="mr-5">|</p>
          {/* <p className="font-semibold mr-5">
            Foreign Investment in Bangladesh Reaches Record High in Fiscal Year
            2024-25
          </p>
          <p className="mr-5">|</p>
          <p className="font-semibold mr-5">
            Local Businesses Adapt to Rising Raw Material Costs
          </p>
          <p className="mr-5">|</p>
          <p className="font-semibold mr-5">
            Government Announces New Incentives for Small and Medium Enterprises
            (SMEs)
          </p>
          <p className="mr-5">|</p> */}
        </Marquee>
      </div>
    </div>
  );
};

export default LatestNews;
