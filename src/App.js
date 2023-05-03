import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./bootstrap.min.css";
// import "./styles2.css";
import HomeScreen from "./screens/HomeScreen";
import NewsScreen from "./screens/NewsScreen";
import NewsPageScreen from "./screens/NewsPageScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/SinglePage/:id" element={<NewsPageScreen />} />
        <Route path="/:category" element={<NewsScreen />} />
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
