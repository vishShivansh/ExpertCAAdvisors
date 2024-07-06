/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Carousel({ children: slides }) {
  const [curr, setCurr] = useState(0);
  const [onHover, setOnHover] = useState(false);

  // Autoplay settings
  const autoplayDelay = 3000; // Adjust autoplay delay in milliseconds
  const [autoplay, setAutoplay] = useState(true);

  function prev() {
    console.log("Prev button clicked");
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  }

  function next() {
    console.log("Next button clicked");
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  }

  // Function to move to the next slide
  function moveToNextSlide() {
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  }

  // Autoplay functionality using useEffect
  useEffect(() => {
    let intervalId;

    if (autoplay) {
      intervalId = setInterval(moveToNextSlide, autoplayDelay);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [autoplay, autoplayDelay]);

  return (
    <div
      className="overflow-hidden relative w-full h-[600px] "
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      <div
        className="flex transition-transform ease-linear duration-1000 w-full h-full"
        style={{
          transform: `translateX(-${curr * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div className="w-full h-full flex-shrink-0" key={index}>
            {slide}
          </div>
        ))}
      </div>
      {onHover && (
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={prev}
            className="size-10 p-1 shadow bg-blue-700/80 hover:bg-white z-10"
          >
            <ChevronLeftIcon className="text-white hover:text-blue-700/80" />
          </button>
          <button
            onClick={next}
            className="size-10 p-1 shadow bg-blue-700/80 hover:bg-white z-10"
          >
            <ChevronRightIcon className="text-white hover:text-blue-700/80" />
          </button>
        </div>
      )}
      <div className="absolute inset-0 flex flex-col items-center justify-center right-[500px] text-center w-[1/2]  bg-white bg-opacity-40 2sm:w-full 2sm:bg-opacity-75">
        <h3 className="text-blue-800 font-bold text-3xl pb-2 2sm:text-cyan-900 2sm:text-xl 2sm:w-[400px]">
          WE PROVIDE BEST TAX SOLUTIONS
        </h3>
        <h1 className="text-[#006b63] font-bold text-4xl pb-2 2sm:text-3xl 2sm:w-[400px]">
          Expert CA Advisors
        </h1>
        <div className="w-[500px] 2sm:w-[350px]">
          <p className="line-clamp-4 text-lg pb-2 text-black 2sm:text-md font-semibold ">
            At Expert CA Advisors, we are dedicated to providing comprehensive
            financial and accounting services tailored to meet the unique needs
            of each of our clients.
          </p>
        </div>
        <Link
          className="font-bold text-gray-100 border border-black p-2 hover:bg-gray-400 hover:bg-opacity-90 2sm:text-gray-400"
          to={"AboutUs.aspx"}
        >
          VIEW SERVICES
        </Link>
      </div>
    </div>
  );
}
