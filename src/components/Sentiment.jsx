import React from "react";
import { RiInformationFill } from "react-icons/ri";
import KeyImage1 from "../assets/key1.png";
import KeyImage2 from "../assets/key2.png";
import KeyEvent from "./constants/KeyEvent";
import Slider from "./constants/Slider";

const Sentiment = () => {
  const events = [
    {
      bg: "#ebf9f4",
      img: KeyImage1,
      heading: "Excepteur esse veniam aliqua Lorem ipsum irure in amet culpa",
      paragraph:
        "Amet ut et sunt officia velit magna occaecat sit. Cupidatat ipsum fugiat ut non consectetur ea dolor ex voluptate. Occaecat aliquip nostrud est ut aliquip cillum irure aliquip deserunt Lorem. Sint duis ex cillum in. Nostrud commodo est in ex.",
    },
    {
      bg: "#e8f4fd",
      img: KeyImage2,
      heading: "Ea Lorem excepteur aliquip aute et minim cillum Dolor conse",
      paragraph:
        "Amet ut et sunt officia velit magna occaecat sit. Cupidatat ipsum fugiat ut non consectetur ea dolor ex voluptate. Occaecat aliquip nostrud est ut aliquip cillum irure aliquip deserunt Lorem. Sint duis ex cillum in. Nostrud commodo est in ex.",
    },
    {
      bg: "#ebf9f4",
      img: KeyImage1,
      heading: "Excepteur esse veniam aliqua Lorem ipsum irure in amet culpa",
      paragraph:
        "Amet ut et sunt officia velit magna occaecat sit. Cupidatat ipsum fugiat ut non consectetur ea dolor ex voluptate. Occaecat aliquip nostrud est ut aliquip cillum irure aliquip deserunt Lorem. Sint duis ex cillum in. Nostrud commodo est in ex.",
    },
    {
      bg: "#e8f4fd",
      img: KeyImage2,
      heading:
        "Ea Lorem excepteur aliquip aute et minim cillum Dolor consequat id",
      paragraph:
        "Amet ut et sunt officia velit magna occaecat sit. Cupidatat ipsum fugiat ut non consectetur ea dolor ex voluptate. Occaecat aliquip nostrud est ut aliquip cillum irure aliquip deserunt Lorem. Sint duis ex cillum in. Nostrud commodo est in ex.",
    },
  ];
  return (
    <div id="sentiments" className="m-5 bg-white p-5 rounded-md max-w-full min-w-[300px]">
      <h2 className="text-2xl font-semibold py-2">Sentiment</h2>
      <div className="flex gap-2 items-center py-2">
        <h3 className="text-xl text-gray-500 font-semibold">Key Events</h3>
        <RiInformationFill className="text-gray-500 cursor-pointer" />
      </div>

      <div className="h-[180px] md:h-[200px]">
        <Slider speed={500}>
          {events.map((event, index) => (
            <KeyEvent
              key={index}
              img={event.img}
              heading={event.heading}
              paragraph={event.paragraph}
              bg={event.bg}
            />
          ))}
        </Slider>
      </div>

      <div className="flex gap-2 items-center py-4">
        <h3 className="text-xl text-gray-500 font-semibold">
          Analyst Estimates
        </h3>
        <RiInformationFill className="text-gray-500 cursor-pointer" />
      </div>

      <div className="flex gap-2 md:gap-10 items-center">
        <div className="p-14 md:p-16 bg-[#ebf9f4] relative text-[#0fba83] rounded-full w-fit text-3xl font-medium">
          <span className="absolute top-9 left-8 md:top-12 md:left-10">
            76%
          </span>
        </div>
        <div className="flex flex-col w-full max-w-[500px] gap-2">
          <div className="flex gap-3 items-center">
            <span className="text-gray-500 w-10">Buy</span>
            <div className="w-full flex gap-2 items-center rounded-full h-1.5">
              <div className="bg-[#0fba83] h-1.5 rounded-full w-[76%]"></div>
              <span className="text-gray-500">76%</span>
            </div>
          </div>

          <div className="flex gap-3 items-center">
            <span className="text-gray-500 w-10">Hold</span>
            <div className="w-full flex gap-2 items-center rounded-full h-1.5">
              <div className="bg-[#c7c8ce] h-1.5 rounded-full w-[8%]"></div>
              <span className="text-gray-500">8%</span>
            </div>
          </div>

          <div className="flex gap-3 items-center">
            <span className="text-gray-500 w-10">Sell</span>
            <div className="w-full flex gap-2 items-center rounded-full h-1.5">
              <div className="bg-[#f7324c] h-1.5 rounded-full w-[16%]"></div>
              <span className="text-gray-500">16%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sentiment;
