import React from 'react'
import { PiPlayCircle } from "react-icons/pi";

export const Heroleftmain = () => {
  return (
    <>
    <div className="hero-left-main">
              <div className="hero-left">
                <div>
                  Convert <span className="text-yellow-500">Anything</span>{" "}
                  <br /> To{" "}
                  <span className="text-yellow-500">Everything !!</span>
                </div>
                <div className="text-gray-500">
                  You can turn every file into anything you want{" "}
                  <span className="text-gray-100">Quick, Easy, Free!</span>{" "}
                </div>
                <button>
                  <PiPlayCircle />
                  how it works ?
                </button>
              </div>
            </div></>
  )
}
