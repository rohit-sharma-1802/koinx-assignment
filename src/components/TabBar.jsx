import React, { useState } from "react";

const TabBar = () => {
  const tabs = [
    "Overview",
    "Fundamentals",
    "News Insights",
    "Sentiments",
    "Team",
    "Technicals",
    "Tokenomics",
  ];
  const [currTab, setCurrTab] = useState(0);
  return (
    <ul className="flex tab gap-5 bg-[#eff2f5] font-medium border-b-2 border-gray-200 text-gray-600 px-5 min-w-[300px] overflow-x-auto overflow-hidden">
      {tabs.map((tab, index) => (
        <li
          key={index}
          className={`min-w-fit cursor-pointer p-2 ${
            currTab === index ? "text-blue-600 border-b-4 border-blue-500" : ""
          }`}
          onClick={() => setCurrTab(index)}
        >
          <a href={`#${tab.toLowerCase()}`}>{tab}</a>
        </li>
      ))}
    </ul>
  );
};

export default TabBar;
