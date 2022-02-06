import React from "react";
import twitter from "../static/twitter.png";
import discord from "../static/discord.png";
import instagram from "../static/instagram.png";
import color_game_icon from "../static/color-game-icon.png";
import navbar from "../static/Navbar.png";
import close from "../static/close.png";
import { Animated } from "react-animated-css";
import color_game_img from "../static/landing-color-game.png";
import { Link } from "react-scroll";
class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ShowNav: false };
  }
  setShowNav = (event) => {
    event.preventDefault();
    this.setState({
      ShowNav: !this.state.ShowNav,
    });
  };
  render() {
    const { ShowNav } = this.state;
    return (
      <>
        <div className="flex justify-center text-white text-lg font-black my-20">
          <div className="space-x-6 lg:space-x-12 lg:p-7 p-4 px-14 xl:block hidden">
            <Link
              class=" hover:text-third-green-color cursor-pointer"
              to="Landing"
              smooth={true}
              spy={true}
            >
              HOME
            </Link>

            <Link
              class=" hover:text-third-green-color cursor-pointer"
              to="Overview"
              smooth={true}
              spy={true}
            >
              OVERVIEW
            </Link>

            <Link
              class=" hover:text-third-green-color cursor-pointer"
              to="NFT_Intro"
              smooth={true}
              spy={true}
            >
              NFT
            </Link>
            <Link
              class=" hover:text-third-green-color cursor-pointer"
              to="Roadmap"
              smooth={true}
              spy={true}
            >
              ROADMAP
            </Link>
            <Link
              class=" hover:text-third-green-color cursor-pointer"
              to="FAQ"
              smooth={true}
              spy={true}
            >
              FAQ
            </Link>
            <Link
              class="text-second-violet-color hover:text-third-green-color cursor-pointer"
              to="CVAL_token"
              smooth={true}
              spy={true}
            >
              $CVAL
            </Link>
          </div>

          {/* <div className="ml-10 mb-10">
            <button
              className={
                "px-10 py-8  text-xl font-outfit font-bold  bg-gray-700 text-white rounded-xl"
              }
            >
              BUY $CVAL
            </button>
          </div> */}
        </div>
        {!ShowNav ? (
          <div className="xl:hidden  fixed top-10 right-3 bg-fifth-black-color p-5 rounded-3xl">
            <img
              src={navbar}
              alt=""
              onClick={this.setShowNav}
              className=" h-8 w-10 "
            />
          </div>
        ) : (
          ""
        )}
        {ShowNav ? (
          <div className="xl:hidden  fixed top-2 right-2 bg-white bg-opacity-20 rounded-xl z-30">
            <img
              src={close}
              alt=""
              className="w-12 "
              onClick={this.setShowNav}
            />
          </div>
        ) : (
          ""
        )}
        {ShowNav ? (
          <Animated
            animationIn="fadeInRight"
            animationOut="fadeOutUp"
            animationInDuration={500}
            animationOutDuration={500}
            isVisible={ShowNav}
            id="LandingPage"
            className="fixed h-screen w-full bg-fifth-black-color z-20 flex"
          >
            <div className="m-auto space-y-10">
              <div>
                <img src={color_game_img} alt="" className="mx-auto w-20" />
                <div className=" text-3xl w-4/5 mx-auto font-outfit font-bold text-center text-white ">
                  THE FIRST NFT GAMBLING GAME ON SOLANA
                </div>
              </div>
              <div className="flex flex-col  z-20 text-white text-lg font-black space-y-10 text-center">
                <Link
                  class=" hover:text-third-green-color "
                  onClick={this.setShowNav}
                  to="Landing"
                  smooth={true}
                  spy={true}
                >
                  HOME
                </Link>

                <Link
                  class=" hover:text-third-green-color "
                  onClick={this.setShowNav}
                  to="Overview"
                  smooth={true}
                  spy={true}
                >
                  OVERVIEW
                </Link>

                <Link
                  class=" hover:text-third-green-color "
                  onClick={this.setShowNav}
                  to="NFT_Intro"
                  smooth={true}
                  spy={true}
                >
                  NFT
                </Link>
                <Link
                  class=" hover:text-third-green-color "
                  onClick={this.setShowNav}
                  to="Roadmap"
                  smooth={true}
                  spy={true}
                >
                  ROADMAP
                </Link>
                <Link
                  class=" hover:text-third-green-color "
                  onClick={this.setShowNav}
                  to="FAQ"
                  smooth={true}
                  spy={true}
                >
                  FAQ
                </Link>
                <Link
                  class="text-second-violet-color hover:text-third-green-color "
                  onClick={this.setShowNav}
                  to="CVAL_token"
                  smooth={true}
                  spy={true}
                >
                  $CVAL
                </Link>
              </div>
            </div>
          </Animated>
        ) : (
          ""
        )}
        <div className="fixed md:bottom-10 bottom-0 w-full flex md:justify-between justify-end md:px-16 z-10">
          <div className="bg-white bg-opacity-20 rounded-3xl space-y-8 py-10 px-2 md:block hidden">
            <img src={twitter} alt="" className="" />
            <img src={discord} alt="" className="" />
            <img src={instagram} alt="" className="" />
          </div>
          <div className="flex flex-row items-end md:-mb-0 -mb-14 md:-mr-0 -mr-8">
            <div>
              <img src={color_game_icon} alt="" className="w-20 " id="parcel" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Nav;
