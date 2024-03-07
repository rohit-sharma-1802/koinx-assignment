import React, { useEffect } from "react";
import Slider from "./constants/Slider";
import Card from "./constants/Card";
import { useData } from "../contexts/CoinData";

const Footer = () => {
  const { trendingCoins } = useData();
  
  return (
    <div className="p-5 bg-white mt-10 m-5 lg:m-0">
      <h2 className="text-xl font-semibold pt-2 pb-4">You May Also Like</h2>
      <Slider speed={300}>
        {trendingCoins &&
          trendingCoins.map((coin, index) => {
            return (
              <Card
                key={index}
                img={coin.item.small}
                title={coin.item.symbol}
                percent={coin.item.data.price_change_percentage_24h.usd}
                sparkline={coin.item.data.sparkline}
              />
            );
          })}
      </Slider>
      <h2 className="text-xl font-semibold py-4 pb-4">Trending Coins</h2>
      <Slider speed={300}>
        {trendingCoins && trendingCoins.map((coin, index) => {
          return (
            <Card
              key={index}
              img={coin.item.small}
              title={coin.item.symbol}
              percent={coin.item.data.price_change_percentage_24h.usd}
              sparkline={coin.item.data.sparkline}
            />
          );
        })}
      </Slider>
    </div>
  );
};

export default Footer;
