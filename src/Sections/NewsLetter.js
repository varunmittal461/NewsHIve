import React from "react";
import Headings from "../components/Headings";

const NewsLetter = () => {
  return (
    <div>
      <Headings title="Subscribe" />

      <section className="subscribe">
        <h1 className="title">Subscribe to our New Stories</h1>
        <form action="">
          <input type="email" placeholder="Email Address..." />
          <button>
            <i className="fa fa-paper-plane"></i> SUBMIT
          </button>
        </form>
      </section>
    </div>
  );
};

export default NewsLetter;
