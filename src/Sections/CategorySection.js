import React from "react";
import Headings from "../components/Headings";

const CategorySection = () => {
  const catgeory = [
    "world",
    "travel",
    "sport",
    "fun",
    "health",
    "fashion",
    "business",
    "technology",
  ];
  return (
    <div>
      <section className="catgorys">
        <Headings title="Catgeorys" />

        {catgeory.map((val, index) => {
          return (
            <div className="category category1" key={index}>
              <span>{val}</span>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default CategorySection;
