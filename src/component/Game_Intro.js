import React from "react";
import { Animated } from "react-animated-css";
import cval from "../static/CVAL-logo.png";
class Game_Intro extends React.Component {
  render() {
    return (
      <>
        <div className="bg-white lg:h-screen h-full flex md:py-0 py-20">
          <div className="m-auto">
            <Animated
              animationIn="flipInY"
              animationOut="flipOutY"
              animationInDuration={2000}
              isVisible={true}
            >
              <img src={cval} alt="" className="mx-auto lg:w-40 w-20 z-10" />
            </Animated>
            <div className="space-y-10">
              <div className="lg:text-8xl text-5xl lg:w-2/5 w-11/12 mx-auto font-outfit font-black text-center text-black">
                PLAY TO EARN
              </div>
              <div className="lg:text-2xl text-lg lg:w-2/5 w-11/12 mx-auto font-outfit font-black text-center text-black ">
                COLOR GAME IS A POPULAR CARNIVAL GAME IN SOUTH EAST ASIA WHERE
                YOU BET ON A COLOR ATTACHED ON A CUSTOMIZED SIX-SIDED DIE TO
                WIN.
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Game_Intro;
