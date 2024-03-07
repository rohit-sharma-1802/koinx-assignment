 import React from "react";
import BackgroudImage from "../assets/bg.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineArrowDropUp, MdOutlineArrowDropDown } from "react-icons/md";
import { useData } from "../contexts/CoinData";

const Trending24 = () => {
  const { topThree } = useData();
  return (
    <div className="flex flex-col gap-5 w-full lg:sticky lg:top-[10px] my-2 min-w-[300px] max-w-full lg:max-w-full">
      <div className="bg-[#0052fe] p-5 mx-5 lg:mx-0 rounded-xl flex flex-col items-center">
        <div className="flex md:flex-col items-center flex-col-reverse">
          <div>
            <h2 className="text-2xl mx-5 text-center text-white font-bold">
              Get Started with KoinX for FREE
            </h2>
            <p className="text-white text-center text-sm mt-3 px-5">
              With our ranges of features that you can equip for free, KoinX allows you
              to be more educated and aware of your tax reports.
            </p>
          </div>
          <img
            src={BackgroudImage}
            alt="bg"
            className="w-[150px] object-cover h-[150px]"
          />
        </div>
        <button className="bg-white my-5 flex items-center gap-2 py-3 px-7 rounded-md font-medium">
          Get Started for FREE
          <FaArrowRightLong />
        </button>
      </div>

      <div className="bg-white p-5 w-full lg:rounded-xl">
        <h2 className="text-2xl font-semibold py-2">Trending Coins (24h)</h2>

        <div className="flex flex-col gap-5 mt-6">
          {topThree && topThree.map((coin, index) => {
            return (
              <div key={index} className="flex gap-3 items-center w-full max-w-full min-w-[200px] justify-between">
                <div className="flex items-center truncate gap-3">
                  <img
                    className="w-[35px] rounded-full"
                    src={coin.item.thumb}
                    alt={coin.item.name}
                  />
                  <p className="font-medium text-sm truncate">{coin.item.name}</p>
                </div>
                <div
                  className={`${
                    coin.item.data.price_change_percentage_24h.usd > 0
                      ? "bg-[#ebf9f4] text-[#2fb988]"
                      : "bg-[#fdf0ee] text-[#e96975]"
                  } p-2 min-w-[80px] max-w-[90px] w-full items-center justify-center rounded-md px-2 h-7 flex`}
                >
                  <div className="flex items-center font-medium">
                    {coin.item.data.price_change_percentage_24h.usd > 0 ? (
                      <MdOutlineArrowDropUp size={25} />
                    ) : (
                      <MdOutlineArrowDropDown size={25} />
                    )}
                    <span className="text-sm">
                      {Math.abs(
                        coin.item.data.price_change_percentage_24h.usd.toFixed(
                          2
                        )
                      )}
                      %
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Trending24;
