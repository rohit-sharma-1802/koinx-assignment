import React, { useRef } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import KeyEvent from "./KeyEvent";

const Slider = ({ children, speed }) => {
  const sliderRef = useRef(null);

  const handleRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += speed;
    }
  };
  const handleLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= speed;
    }
  };

  return (
    <div className="flex relative z-20 items-center h-full">
      <FaChevronLeft
        className="cursor-pointer absolute m-2 p-2 bg-white left-0 shadow rounded-full"
        size={30}
        onClick={handleLeft}
      />
      <div
        ref={sliderRef}
        className="tab scroll-smooth w-full flex gap-5 h-full overflow-auto  overflow-x-scroll"
      >
        {children}
      </div>
      <FaChevronRight
        className="cursor-pointer absolute m-2 p-2 bg-white shadow right-0 rounded-full"
        size={30}
        onClick={handleRight}
      />
    </div>
  );
};

export default Slider;
