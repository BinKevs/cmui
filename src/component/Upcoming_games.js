import React from "react";
import claw_machine from "../static/claw-machine.png";
import basketball from "../static/basketball.png";
import coming_soon from "../static/coming-soon.png";

class Upcoming_games extends React.Component {
  render() {
    return (
      <>
        <div className="bg-white xl:h-screen h-full flex flex-col w-full xl:pb-0 pb-36">
          <div className="my-auto space-y-20">
            <div className="text-5xl font-outfit font-black text-center text-black mt-16">
              UPCOMING GAMES IN THE METAVERSE
            </div>
            <div className="flex xl:flex-row flex-col w-full justify-center xl:space-x-5 xl:space-y-0 space-y-10 items-center">
              <div className="xl:w-1/4 w-4/5 ">
                <img src={claw_machine} alt="" className="mx-auto" />
              </div>

              <div className="xl:w-1/4 w-4/5  mx-auto">
                <img src={basketball} alt="" className="mx-auto" />
              </div>
              <div className="xl:w-1/4 w-4/5 mx-auto">
                <img src={coming_soon} alt="" className="mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Upcoming_games;
