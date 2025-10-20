import React, { use } from "react";
const newsPromise = fetch("/categories.json").then((res) => res.json());
const Categories = () => {
  const newsCategories = use(newsPromise);
  console.log(newsCategories);
  return (
    <div>
      <h1 className="font-semibold">All Category</h1>
    </div>
  );
};

export default Categories;
