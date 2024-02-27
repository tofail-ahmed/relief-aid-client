import img1 from "../../assets/right-side.jpg";
import img2 from "../../assets/one-side-3.jpg";
import img3 from "../../assets/helping-hand-1.jpg";
import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { PiPlanetFill } from "react-icons/pi";
import { TiPlus } from "react-icons/ti";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Banner.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current!.style.setProperty("--progress", 1 - progress);
    progressContent.current!.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={50}
        centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="lg:w-[1280px] w-[550px] lg:h-[500px] h-[150px] relative">
            <img src={img1} alt="" />
            <div className="absolute lg:top-[20%] top-[2%] lg:left-[5%] left-[5%] text-start lg:space-y-4 space-y-1">
              <h1 className="text-white lg:text-5xl text-xl lg:font-extrabold fontbold">
                YOU HELP PEOPLE <span className="text-orange-500">?</span>
              </h1>
              <h1 className="text-white lg:text-5xl text-md lg:font-extrabold fontbold">
                BECOME A VOLUNTEER
              </h1>
              <p className="text-white lg:font-medium lg:text-lg text-sm">
                Join us in making a difference! Donate to support our cause or
                volunteer <br /> your time to help those in need. Together, we
                can create positive change.
              </p>
              <div className="flex flex-row gap-2 ">
                <button className=" flex items-center gap-1 text-white bg-orange-500 lg:text-md text-sm p-2 font-medium rounded-md hover:text-black hover:bg-slate-500 duration-500">
                  Get Started
                  <PiPlanetFill />
                </button>
                <button className="flex items-center gap-1 text-white bg-orange-500 lg:text-md text-sm p-2 font-medium rounded-md hover:text-black hover:bg-slate-500 duration-500">
                  More Details
                  <TiPlus />
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="lg:w-[1280px] w-[550px] lg:h-[500px] h-[150px] relative">
            <img src={img2} alt="" />
            <div className="absolute lg:top-[20%] top-[5%] right-[8%] text-start">
              <h1 className="text-white lg:text-5xl text-xl lg:font-extrabold fontbold">
                NEED CHANGES <span className="text-orange-500">?</span>
              </h1>
              <h1 className="text-white lg:text-5xl text-md lg:font-extrabold fontbold">
                MAKE A DONATION
              </h1>
              <p className="text-white lg:font-medium lg:text-lg text-sm">
                Join us in making a difference! Donate to support our cause or
                volunteer <br /> your time to help those in need. Together, we
                can create positive change.
              </p>
              <div className="flex flex-row justify-end gap-2 ">
                <button className=" flex items-center gap-1 text-white bg-orange-500 lg:text-md text-sm p-2 font-medium rounded-md hover:text-black hover:bg-slate-500 duration-500">
                  Get Started
                  <PiPlanetFill />
                </button>
                <button className="flex items-center gap-1 text-white bg-orange-500 lg:text-md text-sm p-2 font-medium rounded-md hover:text-black hover:bg-slate-500 duration-500">
                  More Details
                  <TiPlus />
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="lg:w-[1280px] w-[550px] lg:h-[500px] h-[150px] relative">
            <img src={img3} alt="" />
            <div className="absolute lg:top-[30%] top-[5%] lg:left-[25%] left-[8%] text-start">
              <h1 className="text-slate-500 lg:text-5xl text-xl lg:font-extrabold fontbold">
              GIVE HOPE, GIVE HELP, 
              </h1>
              <h1 className="text-slate-500 lg:text-5xl text-md lg:font-extrabold fontbold">
              GIVE BACK: <span className="text-orange-500">DONATE TODAY</span>
              </h1>
              <p className="text-slate-500 lg:font-medium lg:text-lg text-sm">
                Join us in making a difference! Donate to support our cause or
                volunteer <br /> your time to help those in need. Together, we
                can create positive change.
              </p>
              <div className="flex flex-row gap-2 ">
                <button className=" flex items-center gap-1 text-white bg-orange-500 lg:text-md text-sm p-2 font-medium rounded-md hover:text-black hover:bg-slate-500 duration-500">
                  Get Started
                  <PiPlanetFill />
                </button>
                <button className="flex items-center gap-1 text-white bg-orange-500 lg:text-md text-sm p-2 font-medium rounded-md hover:text-black hover:bg-slate-500 duration-500">
                  More Details
                  <TiPlus />
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
