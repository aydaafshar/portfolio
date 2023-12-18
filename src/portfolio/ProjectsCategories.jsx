import React from "react";
import CategoriesBtn from "./CategoriesBtn";
import { useState } from "react";
export default function ProjectsCategories({ categories, onFilterProjects }) {
  const [activeCtegory, setActiveCtegory] = useState("all");

  const changeActiveCategory = (active) => {
    setActiveCtegory(active);
    onFilterProjects(active);
  };

  return (
    <div className="portfolio__categories">
      {categories.map((category) => (
        <CategoriesBtn
          key={category}
          category={category}
          className={`btn cat__btn ${
            activeCtegory == category ? "primary" : "white"
          }`}
          onChangeCategory={() => changeActiveCategory(category)}
        />
      ))}
    </div>
  );
}
