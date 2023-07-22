import React, { useState, useEffect } from "react";
import { AiFillCaretRight } from "react-icons/ai";
import { BsFillStopFill } from "react-icons/bs";
import { BsFillPauseFill } from "react-icons/bs";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isCounting, setIsCounting] = useState(true);

  useEffect(() => {
    let timeInterval = null;

    // If the timer is Counting, set up an interval to increment the seconds

    if (isCounting) {
      timeInterval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    // Clean up the interval
    return () => {
      clearInterval(timeInterval);
    };
  }, [isCounting]);

  // Function to format the time in minutes and seconds
  const timeFormat = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    let minFormatted = minutes.toString().padStart(2, "0");
    let secFormatted = seconds.toString().padStart(2, "0");

    return `${minFormatted}:${secFormatted}`;
  };

  // Function to handle the Play/Pause button click
  const handlePlayPaues = () => {
    setIsCounting((play) => !play);
  };

  // Function to handle the Stop button click
  const handleStop = () => {
    setIsCounting(false);
    setSeconds(0);
  };

  return (
    <div className="flex justify-center p-10 border-2 mx-auto m-10 md:w-8/12 w-12/12 rounded-3xl h-full">
      <div>
        <h1 className="font-extrablod text-center text-3xl py-6">
          Focus Timer
        </h1>
        <div className="rounded-full border-[#c086de] border-8 h-40 w-40 text-center pt-12 my-5">
          <p className="text-3xl">{timeFormat(seconds)}</p>
        </div>
        <div className="flex text-center px-10 py-6">
          <button
            className="bg-[#c086de] rounded-full p-2 text-lg"
            onClick={handlePlayPaues}
          >
            {isCounting ? <BsFillPauseFill /> : <AiFillCaretRight />}
          </button>

          <button
            className="bg-[#c086de] rounded-full p-2 ml-3  text-lg"
            onClick={handleStop}
          >
            <BsFillStopFill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
