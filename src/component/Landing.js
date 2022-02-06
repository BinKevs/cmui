import React from "react";
import Nav from "./navbar";
import color_game_img from "../static/landing-color-game.png";
class Landing extends React.Component {
  render() {
    return (
      <>
        {/* <div className="bg-fifth-black-color h-full pt-16">
          <div className=" md:text-7xl text-5xl md:w-2/5 w-11/12 mx-auto font-outfit font-black text-center text-white md:py-60">
            THE FIRST NFT GAMBLING GAME ON SOLANA
          </div>
          <div className="flex flex-col lg:flex-row  justify-center items-center space-x-0 md:space-x-10 md:space-y-0 space-y-10 md:pt-20 pt-5 pb-40">
            <div className="bg-white p-10 rounded-3xl md:w-auto w-5/6">
              <img src={carnival_logo} alt="" className="mx-auto w-96" />
              <div className="text-center mt-10">
                <button
                  className={
                    "px-10 py-5  text-xl font-outfit font-bold  bg-violet-color text-white rounded-xl"
                  }
                >
                  Earn $CVAL
                </button>
              </div>
            </div>
            <div className="bg-white p-10 rounded-3xl md:w-auto w-5/6">
              <img src={carnival_logo} alt="" className="mx-auto w-96" />
              <div className="text-center mt-10">
                <button
                  className={
                    "px-10 py-5  text-xl font-outfit font-bold  bg-violet-color text-white rounded-xl"
                  }
                >
                  Game Intro
                </button>
              </div>
            </div>
          </div>
          {/* <div className="text-left py-20 ml-20">
            <button
              className={
                "px-16 py-8  text-xl font-outfit font-bold  bg-first-black-color bg-opacity-20 text-white rounded-xl"
              }
            >
              BUY $CVAL
            </button>
          </div> 
        </div> */}
        <div
          id="Landing"
          className="bg-fifth-black-color h-full  flex flex-col"
        >
          <Nav />
          <div className="m-auto py-40 mb-60">
            <img src={color_game_img} alt="" className="mx-auto w-48" />
            <div className=" md:text-9xl text-5xl font-outfit font-black text-center text-white">
              <span className="text-fifth-green-color">C</span>
              <span className="text-first-red-color">O</span>
              <span className="text-third-violet-color">L</span>
              <span className="text-first-yellow-color">O</span>
              <span className="text-fourth-violet-color">R</span> GAME
            </div>
            <div className=" md:text-3xl text-xl mx-auto font-outfit font-bold text-center text-white ">
              THE FIRST NFT GAMBLING GAME ON SOLANA
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Landing;
