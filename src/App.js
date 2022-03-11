import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import News from "./pages/News";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact strict path="/" element={<Home />} />
        <Route exact strict path="/news" element={<News />} />
        <Route exact strict path="/a-propos" element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
