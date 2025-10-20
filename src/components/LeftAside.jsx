import React, { Suspense } from "react";
import Categories from "./Categories";

const LeftAside = () => {
  return (
    <div>
      <Suspense
        fallback={<span className="loading loading-spinner loading-sm"></span>}
      >
        <Categories></Categories>
      </Suspense>
      <div className="flex justify-center items-center bg-base-200 mt-5 min-h-[600px] rounded-xl">
          <p className="text-4xl font-bold text-base-300">Ad</p>
      </div>
    </div>
  );
};

export default LeftAside;
