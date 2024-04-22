'use client'
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
    initial={{opacity:0,y:100}}
    animate={{opacity:1,y:0}}
    className="HeroSection flex justify-center pt-20 pb-10">
      
      <p className="text-4xl md:text-6xl  leading-[39px] md:leading-[69px] text-center bg-clip-text max-w-[337px] md:max-w-[70%] bg-gradient-to-b from-white to-gray-400 text-transparent">
        a creative bringing ideas into reality, building digital
        products and documenting it all.
      </p>
      <div className="w-full absolute inset-0 h-full -z-10">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={30}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
        </div>
    </motion.div>
  );
};

export default Hero;
