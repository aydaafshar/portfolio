import React from "react";

export default function CategoriesBtn({
  category,
  className,
  onChangeCategory,
}) {
  return (
    <div className={className} onClick={() => onChangeCategory(category)}>
      {category}
    </div>
  );
}
