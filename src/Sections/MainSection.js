import React from "react";
import Card from "../components/Card";
import { highlights } from "../dummyData";

const MainSection = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          {highlights.map((item) => {
            return (
              <>
                <Card key={item.id} item={item} />
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default MainSection;
