import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item: { id, cover, catgeory, title, authorName, time } }) => {
  return (
    <>
      <div className="box">
        <div className="img">
          <img src={cover} alt="" />
        </div>
        <Link to={`/SinglePage/${id}`}>
          <div className="text">
            <span className="category">{catgeory}</span>
            <h1 className="titleBg">{title}</h1>

            <div className="author flex">
              <span>by {authorName}</span>
              <span>{time}</span>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Card;
