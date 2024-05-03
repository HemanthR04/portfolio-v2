/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import arrow from "../public/arrow.png";
import memoji1 from "../public/Memoji1.png";
import memoji2 from "../public/Memoji2.png";
import memoji3 from "../public/Memoji3.png";
import memoji4 from "../public/Memoji4.png";
import Image from "next/image";
import Link from "next/link";
import { animate, delay, motion } from "framer-motion";

const workData = [
  {
    id: 0,
    heading: "Work",
    subheading: "Explore some of my projects",
    image: memoji3,
    link: "/work",
  },
  {
    id: 0,
    heading: "Play",
    subheading: "Take a look at some of my creations",
    image: memoji1,
    link: "/play",
  },
  {
    id: 0,
    heading: "Southcrew",
    subheading: "Southcrew , a studio where art meets business",
    image: memoji2,
    link: "/southcrew",
  },
  {
    id: 0,
    heading: "About me",
    subheading: "Designer, Developer, Creative and more",
    image: memoji4,
    link: "/contact",
  },
];

const fadeInAnimationVariants = {
  intital: {
    opacity: 0,
    y: 100,
  },
  animate: (i:number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.10 * i,
    },
  }),
};

const WorkLinks = () => {
  return (
    <>
      <div className="workLinks flex flex-col justify-center items-center gap-2 ">
        {workData.map((item, i) => (
          <motion.div
            variants={fadeInAnimationVariants}
            initial="intital"
            animate="animate"
            whileInView="animate"
            viewport={{
              once: true,
            }}

            whileHover={{scale:1.1}}
            custom={i}
            key={i}
          >
            <div className="work bg-Secondary w-[382px] h-[97px] md:w-[550px] rounded-md m-1 flex justify-center items-center md:gap-8">
              <div className="workLogo w-[48px] h-[48px] md:w-[70px] md:h-[70px] bg-black rounded-md">
                <Image unoptimized src={item.image} alt="memoji" width={100} height={100} />
              </div>
              <div className="workText px-4">
                <h1 className="text-whiteFA">{item.heading}</h1>
                <p className="text-gray666 w-[220px] leading-4">
                  {item.subheading}
                </p>
              </div>
              <Link href={item.link}>
                <div className="workLogo w-[48px] h-[48px] bg-transparent rounded-md border-2 border-gray-400 md:hidden">
                  <Image unoptimized src={arrow} alt="arrow" />
                </div>
                <div className="workLogo w-[98px] h-[30px] text-center bg-transparent rounded-md border-2 border-gray-600 hidden md:block">
                  <span className="text-white text-[12px]">Learn More</span>
                </div>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default WorkLinks;
