import React from "react";
import { NavLink } from "react-router-dom";
import bitcoinLogo from "../assets/bitcoin.webp";
import ethereumLogo from "../assets/ethereum.webp";
import rippleLogo from "../assets/xrp.webp";

const Home = () => {
  const samples = [
    { name: "Bitcoin", icon: bitcoinLogo, url: "bitcoin" },
    { name: "Ethereum", icon: ethereumLogo, url: "ethereum" },
    { name: "Ripple", icon: rippleLogo, url: "ripple" },
  ];

  return (
    <div className="h-screen flex justify-center mt-[100px]">
      <div>
        <h2 className="text-3xl font-medium text-center py-10">Select Coin</h2>
        <div className="flex text-center flex-row gap-5">
          {samples.map((sample, index) => (
            <NavLink
              key={index}
              className="flex items-center font-bold p-3 rounded-lg bg-white capitalize"
              to={`/${sample.url}`}
            >
              <img
                src={sample.icon}
                alt={sample.name}
                className="h-8 w-8 mr-2"
              />
              {sample.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
