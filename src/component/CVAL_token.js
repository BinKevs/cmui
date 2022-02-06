import React from "react";
import CvalTokenImg from "../static/Cval-token-img.png";

class CVAL_token extends React.Component {
  render() {
    return (
      <>
        <div
          id="CVAL_token"
          className="xl:bg-cval-token-bg bg-white xl:h-screen h-full flex flex-col xl:flex-row xl:pt-0 pt-36 lg:space-x-10 space-x-0"
        >
          <div className="xl:w-1/2 w-full flex xl:justify-end justify-center">
            <div className="w-4/5 my-auto">
              {" "}
              <div className="flex flex-col md:flex-row justify-center items-center md:space-x-6">
                <div className="md:text-5xl text-3xl font-outfit font-black xl:text-start text-center text-black my-auto">
                  $CVAL TOKEN
                </div>
                <div>
                  <button
                    className={
                      "xl:px-14 px-8 xl:py-5 py-4  xl:text-lg text-md font-outfit font-bold  bg-violet-color text-white rounded-xl"
                    }
                  >
                    ADD TO PHANTOM
                  </button>
                </div>
              </div>
              <div className="md:text-2xl text-lg mx-auto font-outfit font-bold xl:text-left text-center text-black mt-8 xl:space-y-10 space-y-5 xl:w-11/12 w-full ">
                <div>
                  $CVAL Tokens are used as an in-game currency for all the games
                  introduced in the Carnival Metaverse.
                </div>
                <div>
                  $CVAL Official Contract Address
                  <div className="text-violet-color">
                    0xJ1H23jh123123n H141h9t5Ps562x24bG557
                  </div>
                </div>
                <div>
                  Listing and Game Release:
                  <div>-$CVAL will be listed on Pancakeswap on February.</div>
                  <div>
                    -Game will be released on March 1, in a web platform.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:w-1/2 w-full flex xl:justify-start justify-center overflow-hidden">
            <img
              src={CvalTokenImg}
              className="xl:w-3/4 lg:w-1/2 md:w-1/2 w-4/5 xl:-mr-0 -mr-10 my-auto xl:py-0 py-10"
              alt=""
            />
          </div>
        </div>
      </>
    );
  }
}

export default CVAL_token;
