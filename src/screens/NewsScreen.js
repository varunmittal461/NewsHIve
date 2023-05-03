import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NewsSliderSection from "../Sections/NewsSliderSection";
import Loader from "../components/Loader";
import Headings from "../components/Headings";
import { useParams } from "react-router-dom";

const NewsScreen = () => {
  const { category } = useParams();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);
  return (
    <div>
      <Header />
      <main className="container Content">
        {loading ? (
          <Loader />
        ) : (
          <div>
            <Headings title={category} />
            <NewsSliderSection />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default NewsScreen;
