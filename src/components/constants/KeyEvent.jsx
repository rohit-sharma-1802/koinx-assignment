import React from "react";

const KeyEvent = ({ img, heading, paragraph, bg }) => {
  return (
    <div
      className={`bg-[${bg}] flex items-start gap-3 min-w-[330px] md:min-w-[450px] p-5 rounded-xl1`}
    >
      <img className="w-10 object-contain" src={img} alt="rank #1 crypto" />
      <div className="flex flex-col gap-1">
        <h1 className="font-medium text-sm">{heading}</h1>
        <p className="text-gray-500 text-xs md:text-sm">{paragraph}</p>
      </div>
    </div>
  );
};

export default KeyEvent;
