'use client'
import React from "react";
import InstaLogo from "../public/instagramLogo.png";
import TwitterLogo from "../public/twitterLogo.png";
import LinkedinLogo from "../public/linkedinLogo.png";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
const ContactLinks = () => {
  return (
    <>
      <motion.div 
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay:0.5}}
      className="contactLinks">
        <div className="contactLnks flex justify-center gap-4 py-1">
          <Link href={"https://www.instagram.com/hemanthhhhhh/"}>
            <div className="link flex gap-2 px-2 py-1 bg-Secondary items-center rounded-xl">
              <div className="inkLogo">
                <Image unoptimized src={InstaLogo} alt="Logo" />
              </div>
              <div className="linkText text-white text-[16px] pb-1">
                @hemanth
              </div>
              <div></div>
            </div>
          </Link>
          <Link href={"https://twitter.com/HemanthR04"}>
            <div className="link flex gap-2 px-2 py-1 bg-Secondary items-center rounded-xl">
              <div className="inkLogo">
                <Image unoptimized src={TwitterLogo} alt="Logo" />
              </div>
              <div className="linkText text-white text-[16px] pb-1">
                @hemanth
              </div>
              <div></div>
            </div>
          </Link>
        </div>
        <div className="contactLnks flex justify-center gap-4 py-2">
          <Link href={"https://www.linkedin.com/in/hemanthr04/"}>
            <div className="link flex gap-2 px-2 py-1 bg-Secondary items-center rounded-xl">
              <div className="inkLogo">
                <Image unoptimized src={LinkedinLogo} alt="Logo" />
              </div>
              <div className="linkText text-white text-[16px] pb-1">
                @hemanth
              </div>
              <div></div>
            </div>
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default ContactLinks;
