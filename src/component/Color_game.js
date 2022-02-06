import React from "react";

import carnival_logo from "../static/carnival-metaverse-logo.png";
class Color_game extends React.Component {
  render() {
    return (
      <>
        <div
          id="Overview"
          className="bg-white md:h-screen h-full flex flex-col md:mt-0 mt-20"
        >
          <div className="bg-second-black-color lg:p-16 p-8 xl:w-1/4 lg:w-2/5 w-11/12 rounded-3xl m-auto">
            <div className="lg:text-4xl text-3xl mx-auto font-outfit font-black text-center text-white mt-6">
              COLOR GAME
            </div>
            <div className="text-md mx-auto font-outfit font-bold text-center text-white mt-5 lg:space-y-5 space-y-1">
              <div>
                Color Game is one of Asia’s popular carnival game, where you bet
                some money on a color that you think will appear after a die is
                thrown.
              </div>
              <div>
                Earn $CVAL Tokens as you win bets, mint the Color Game NFT for
                more lucrative benefits, and fill your wallet with those $$$.
              </div>
            </div>
            <div className="text-center mt-10">
              <button
                className={
                  "px-10 py-5 text-lg font-outfit font-bold  bg-second-violet-color  text-white rounded-xl"
                }
              >
                WHITEPAPER
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Color_game;
