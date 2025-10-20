import React, { use } from "react";
import { NavLink } from "react-router";
const newsPromise = fetch("/categories.json").then((res) => res.json());
const Categories = () => {
  const categories = use(newsPromise);
  // console.log(categories);
  return (
    <div>
      <h1 className="font-semibold">All Category</h1>
      <div className="grid grid-cols-1 mt-5 gap-3">
        {categories.map((category) => (
          <NavLink to={`/category/${category.id}`} key={category.id} className={"btn bg-white border-0 shadow-none text-accent"}>
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
