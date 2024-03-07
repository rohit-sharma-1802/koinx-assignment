import React from "react";

const Card = ({ img, title, percent, price, sparkline }) => {
  return (
    <div className="boder min-w-[200px] md:min-w-[230px] p-5 border shadow-lg border-gray-300 rounded-lg">
      <div className="flex items-center gap-2">
        <img src={img} alt={title} className="w-[30px] rounded-full" />
        <span className="text-xs">{title}</span>
        <div
          className={`${
            percent.toFixed(2) > 0
              ? "bg-[#ebf9f4] text-[#2fb988] "
              : " text-[#e96975] bg-[#fdf0ee] "
          } text-xs p-1 rounded-md `}
        >
          {percent.toFixed(2)} %
        </div>
      </div>
      <div>
        <span>{price}</span>
        <img src={sparkline} alt="sparkline" />
      </div>
    </div>
  );
};

export default Card;
