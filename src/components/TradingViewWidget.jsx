import React, { useEffect, useRef, memo } from "react";
import { MdOutlineArrowDropUp } from "react-icons/md";
import { useData } from "../contexts/CoinData";
import Graph from "./constants/Graph";
import { useParams } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function TradingViewWidget() {
  const { token } = useParams();
  const { cyptoData, price, isDataLoaded } = useData();

  if (!cyptoData || !price) {
    return (
      <div className="grid place-content-center w-full">
        <AiOutlineLoading3Quarters className="animate-spin" size={35} />
      </div>
    );
  }

  return (
    <>
      <div className="mx-5 my-2 px-5 md:hidden flex items-center bg-[#eff2f5] md:bg-white py-5 gap-5">
        <div className="flex items-center justify-center gap-2">
          <img
            className="w-9 object-contain"
            src={cyptoData && cyptoData.image.small}
            alt="rank #1 crypto"
          />
          <h1 className="text-xl font-bold">{cyptoData && cyptoData.name}</h1>
          <p className="font-medium text-gray-500">
            {cyptoData && cyptoData.symbol.toUpperCase()}
          </p>
        </div>
        <div className="bg-[#768396] rounded-md text-white px-2 py-1">
          Rank #{cyptoData && cyptoData.market_cap_rank}
        </div>
      </div>
      <div className="mx-5 rounded-md my-2 max-w-full bg-white px-5 min-w-[300px]">
        <div className="items-center hidden md:flex py-5 gap-5">
          <div className="flex items-center justify-center gap-2">
            <img
              className="w-9 object-contain"
              src={cyptoData && cyptoData.image.small}
              alt="rank #1 crypto"
            />
            <h1 className="text-xl font-bold">{cyptoData && cyptoData.name}</h1>
            <p className="font-medium text-gray-500">
              {cyptoData && cyptoData.symbol.toUpperCase()}
            </p>
          </div>
          <div className="bg-[#768396] rounded-md text-white px-2 py-1">
            Rank #{cyptoData && cyptoData.market_cap_rank}
          </div>
        </div>
        <div className="flex rounded-md bg-white flex-col gap-1 py-5">
          <div className="flex gap-3 md:gap-5 items-center">
            <span className="text-3xl font-bold">
              ${price && price[token] && price[token].usd.toLocaleString()}
            </span>
            <div className="bg-[#ebf9f4] flex w-fit px-2 py-1 rounded-md">
              <MdOutlineArrowDropUp className="text-[#14b079]" size={25} />
              <span className="text-[#14b079] text-sm font-medium">
                {price && price[token] && price[token].usd_24h_change.toFixed(2)} %
              </span>
            </div>
            <span className="text-gray-400 text-sm font-semibold">(24H)</span>
          </div>
          <div>
            <span className="text-md font-medium">
              ₹ {price && price[token] && price[token].inr.toLocaleString()}
            </span>
          </div>
        </div>
        <Graph />
      </div>
    </>
  );
}

export default memo(TradingViewWidget);
