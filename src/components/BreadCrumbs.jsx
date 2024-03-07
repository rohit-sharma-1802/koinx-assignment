import React, { useEffect } from "react";
import makeApiCall from "../api";
import { HiMiniChevronDoubleRight } from "react-icons/hi2";
import { useParams } from "react-router-dom";
import { useData } from "../contexts/CoinData";

const BreadCrumbs = () => {
  const { cyptoData } = useData();
  return (
    <div className="bg-[#eff2f5] px-5 h-[40px] pt-1 text-gray-500 flex gap-2 items-center">
      <div>Cryptocurrencies </div>

      {cyptoData && cyptoData.name && (
        <>
          <HiMiniChevronDoubleRight />
          <div className="text-gray-900 font-medium">{cyptoData.name}</div>
        </>
      )}
    </div>
  );
};

export default BreadCrumbs;
