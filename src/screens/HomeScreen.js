import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainSection from "../Sections/MainSection";
import PopularSection from "../Sections/PopularSection";
import PostSection from "../Sections/PostSection";
import SocailMediaSection from "../Sections/SocailMediaSection";
import NewsLetter from "../Sections/NewsLetter";
import CategorySection from "../Sections/CategorySection";
import Loader from "../components/Loader";

const HomeScreen = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);
  return (
    <div>
      <Header />
      {loading ? (
        <Loader />
      ) : (
        <div className="container ">
          <MainSection />
          <main>
            <div className="container">
              <section className="mainContent">
                <PopularSection />
                <PostSection />
              </section>
              <aside className="sideContent">
                <SocailMediaSection />
                <NewsLetter />
                <CategorySection />
              </aside>
            </div>
          </main>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default HomeScreen;
