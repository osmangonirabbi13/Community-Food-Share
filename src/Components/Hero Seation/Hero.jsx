import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./style.css";
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="">
      <Swiper className="mySwiper h-[500px] bg-[#F1F6F2]  md:h-[350px] lg:h-[500px]   ">
        <SwiperSlide>
          <div
            className="hero  h-[500px]"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/1fR97V2z/pexels-senuscape-728360-2313682.jpg)",
            }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-xl">
                <h1 className="mb-5 text-3xl md:text-4xl lg:text-5xl font-bold bg-[#0000004f] opacity-200 py-3 px-3">
                  One Dish, Infinite Bonds
                </h1>

                <Link to="/available-food">
                  <button className="btn btn-primary">View All Food</button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero  h-[500px]"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/TqcC76MK/pexels-ella-olsson-572949-1640777.jpg)",
            }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-2xl">
                <h1 className="mb-5 text-3xl md:text-4xl lg:text-5xl font-bold bg-[#0000004f] opacity-200 py-3 px-3">
                  Sharing Meals, Spreading Love
                </h1>
                <Link to="/available-food">
                  <button className="btn btn-primary">View All Food</button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero  h-[500px]"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/Pv0FgjRN/pexels-jdgromov-4669300.jpg)",
            }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-2xl">
                <h1 className="mb-5 text-3xl md:text-4xl lg:text-5xl font-bold bg-[#0000004f] opacity-200 py-3 px-3">
                  Mealtime Magic, One Heartfelt Bite at a Time
                </h1>

                <Link to="/available-food">
                  <button className="btn btn-primary">View All Food</button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
