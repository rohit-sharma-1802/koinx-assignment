import React, { useEffect } from "react";
import BreadCrumbs from "./components/BreadCrumbs";
import TradingViewWidget from "./components/TradingViewWidget";
import Performance from "./components/Performance";
import TabBar from "./components/TabBar";
import Sentiment from "./components/Sentiment";
import About from "./components/About";
import Team from "./components/Team";
import Trending24 from "./components/Trending24";
import Tokenomics from "./components/Tokenomics";
import Footer from "./components/Footer";
import { useParams } from "react-router-dom";
import { useData } from "./contexts/CoinData";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const CoinDetails = () => {
  const { token } = useParams();
  const { fetchAllDetails, isDataLoaded, error } = useData();

  useEffect(() => {
    console.log("Inside APP");
    console.log(token);
    if (token) fetchAllDetails(token);
  }, [token]);

  if (error) {
    return (
      <div className="h-screen flex items-center justify-center flex-col gap-4">
        <h2 className="text-2xl text-center">{error}</h2>
        <span className="text-md">Re-check the coin name</span>
      </div>
    );
  }

  if (!isDataLoaded) {
    return (
      <div className="h-screen grid place-content-center w-full">
        <AiOutlineLoading3Quarters className="animate-spin" size={35} />
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row w-full">
      <div className="lg:w-[70%] w-full">
        <TradingViewWidget />
        <TabBar />
        <Performance />
        <Sentiment />
        <About />
        <Tokenomics />
        <Team />
        <div className="lg:hidden">
          <Footer />
        </div>
      </div>
      <div className="lg:w-[30%] lg:pr-5 w-full">
        <Trending24 />
      </div>
    </div>
  );
};

export default CoinDetails;
