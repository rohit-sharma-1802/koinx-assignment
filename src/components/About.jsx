import React from "react";
import ProfitImage from "../assets/profit.png";
import { FaArrowRightLong } from "react-icons/fa6";

const About = () => {
  return (
    <div className="m-5 bg-white p-5 rounded-md max-w-full min-w-[300px]">
      <h2 className="text-2xl font-semibold pt-2 pb-4">About Bitcoin</h2>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold">What is Bitcoin?</h3>
          <p>
            Bitcoin's price today is US$16,951.82, with a 24-hour trading volume
            of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently
            -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from
            its 7-day all-time low of $16,394.75. BTC has a circulating supply
            of 19.24 M BTC and a max supply of 21 M BTC.
          </p>
        </div>

        <hr className="h-[3px] w-full bg-gray-50 mb-2" />

        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-bold"> Lorem ipsum dolor sit amet</h3>
          <div className="flex flex-col gap-5">
            <p>
              Quis id incididunt excepteur nulla deserunt nisi ad aute elit
              aliquip excepteur. Ex magna labore et aute eu officia. Pariatur
              Lorem eu id reprehenderit do duis ad. Veniam ut duis qui cupidatat
              cupidatat cillum dolore dolor ullamco sunt. Cupidatat aliqua quis
              aliquip ad do irure ad Lorem culpa sit labore laboris proident
              adipisicing.
            </p>

            <p>
              Irure veniam occaecat reprehenderit incididunt cillum mollit
              tempor irure fugiat cupidatat sunt qui. Labore consectetur laboris
              consequat laboris do culpa officia culpa deserunt qui aliqua elit
              consequat. Sit laboris commodo magna reprehenderit cillum enim
              magna ea amet. Sint sunt adipisicing esse nisi reprehenderit
              laborum velit. Mollit aute incididunt officia dolore officia
              exercitation Lorem consectetur amet.
            </p>

            <p>
              Sunt eu est mollit cupidatat voluptate cupidatat nulla ipsum
              consequat fugiat proident duis quis. In non exercitation deserunt
              reprehenderit esse sunt proident Lorem cillum. Duis proident id
              nisi esse nulla adipisicing laboris ea non.
            </p>
          </div>
        </div>
      </div>

      <hr className="h-[3px] w-full bg-gray-50 mt-5" />

      <h2 className="text-2xl font-semibold py-4 pt-5">
        Already Holding Bitcoin?
      </h2>

      <div className="flex flex-col w-full md:justify-between md:flex-row gap-5 mb-5 ">
        <div className="flex gap-5 bg-gradient-to-br from-[#78efa4] from-10% to-[#0f5ead] to-[90%] py-4 px-2 rounded-md min-w-[300px] max-w-full md:max-w-[500px] w-full">
          <img
            src={ProfitImage}
            alt="profits Image"
            className="w-[110px] object-cover rounded-md"
          />
          <div className="flex flex-col gap-3">
            <h2 className="text-white text-xl font-semibold">
              Calculate your <br /> Profits
            </h2>
            <button className="bg-[white] text-sm w-fit px-4 py-1 flex items-center gap-2.5 rounded-md font-medium">
              Check Now <FaArrowRightLong />
            </button>
          </div>
        </div>
        <div className="flex gap-5 bg-gradient-to-br from-[#ff9664] from-10% to-[#f13b37] rounded-md to-[90%] py-4 px-2 min-w-[300px] max-w-full md:max-w-[500px] w-full">
          <img
            src={ProfitImage}
            alt="profits Image"
            className="w-[110px] object-cover rounded-md"
          />
          <div className="flex flex-col gap-3">
            <h2 className="text-white text-xl font-semibold">
              Calculate your tax <br /> liability
            </h2>
            <button className="bg-[white] text-sm w-fit px-4 py-1 flex items-center gap-2.5 rounded-md font-medium">
              Check Now <FaArrowRightLong />
            </button>
          </div>
        </div>
      </div>

      <hr className="h-[3px] mb-2 w-full bg-gray-50" />

      <p className="py-4">
        Culpa esse dolor laboris commodo laboris qui laborum incididunt minim.
        Ullamco cillum Lorem in irure id culpa veniam officia dolore aliqua aute
        enim et. Ex qui veniam non mollit cupidatat excepteur ea pariatur
        exercitation aliqua dolor. Laborum consequat duis magna et eiusmod
        consequat tempor voluptate ex esse enim ullamco tempor. Nulla nostrud
        incididunt sunt nostrud cillum mollit laboris nostrud. Magna dolor.
      </p>
    </div>
  );
};

export default About;
