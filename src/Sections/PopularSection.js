import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { popular } from "../dummyData";
import Headings from "../components/Headings";

const PopularSection = () => {
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 2,
    speed: 500,
    rows: 4,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 4,
        },
      },
    ],
  };
  return (
    <>
      <section className="popular">
        <Headings title="Headlines" />
        <div className="content">
          <Slider {...settings}>
            {popular.map((val, index) => {
              return (
                <div className="items" key={index}>
                  <div className="box shadow pSection">
                    <div className="images row">
                      <div className="img">
                        <img src={val.cover} alt="" />
                      </div>
                      <div class="category category1">
                        <span>{val.catgeory}</span>
                      </div>
                    </div>
                    <div className="text row">
                      <h1 className="title">{val.title.slice(0, 40)}...</h1>
                      <div className="date">
                        <i class="fas fa-calendar-days"></i>
                        <label>{val.date}</label>
                      </div>
                      <div className="comment">
                        <i class="fas fa-comments"></i>
                        <label>{val.comments}</label>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default PopularSection;
