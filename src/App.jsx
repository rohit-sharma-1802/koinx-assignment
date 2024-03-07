import { useState, useEffect } from "react";
import "./App.css";
import CoinDeatils from "./CoinDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BreadCrumbs from "./components/BreadCrumbs";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-[#eff2f5]">
      <Navbar />
      <BreadCrumbs />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/:token"
          element={<CoinDeatils />}
        />
      </Routes>
      <div className={`hidden lg:block w-full`}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
