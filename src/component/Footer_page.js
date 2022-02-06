import React from "react";
import color_game_img from "../static/color-game-img.png";

class Footer_page extends React.Component {
  render() {
    return (
      <>
        <div className="bg-second-black-color h-full lg:pt-36 pt-16">
          <div className="bg-fourth-black-color lg:p-20 p-5 lg:mx-16 mx-20 rounded-3xl lg:space-y-10 space-y-3">
            <div className="text-center font-bold lg:mb-32">
              <div className="text-six-black-color  lg:text-2xl text-lg ">
                CARNIVAL METAVERSE
              </div>
              <div className="text-six-green-color lg:text-6xl text-4xl">
                SET THE WORLD ON FUN
              </div>
            </div>
            <div className="grid lg:grid-cols-3 grid-col-1 lg:gap-10 gap-5">
              <div className="bg-seven-black-color lg:py-6 py-3 text-center lg:text-2xl lg:rounded-3xl rounded-xl text-white font-bold">
                WHITEPAPER
              </div>
              <div className="bg-seven-black-color lg:py-6 py-3 text-center lg:text-2xl lg:rounded-3xl rounded-xl text-white font-bold">
                $CVAL TOKEN
              </div>
              <div className="bg-seven-black-color lg:py-6 py-3 text-center lg:text-2xl lg:rounded-3xl rounded-xl text-white font-bold">
                COLOR GAME (ALPHA)
              </div>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-5 lg:w-2/3 mx-auto">
              <div className="bg-seven-black-color lg:py-6 py-3 text-center lg:text-2xl lg:rounded-3xl rounded-xl text-white font-bold">
                CARNIVAL METAVERSE
              </div>
              <div className="bg-seven-black-color lg:py-6 py-3 text-center lg:text-2xl lg:rounded-3xl rounded-xl text-white font-bold">
                CONTACT US
              </div>
            </div>
          </div>
          <div className="text lg:text-2xl text-center font-bold text-six-black-color py-16">
            Copyright 2021 - Carnival Metaverse
          </div>
        </div>
      </>
    );
  }
}

export default Footer_page;
