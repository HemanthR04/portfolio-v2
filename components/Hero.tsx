import React from "react";
import { SparklesCore } from "./ui/sparkles";

const Hero = () => {
  return (
    <div className="HeroSection flex justify-center pt-20 pb-10">
        <div className="w-full absolute inset-0 h-[400px]">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={15}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
        </div>
      <p className="text-4xl  leading-[39px] text-center bg-clip-text max-w-[337px] bg-gradient-to-b from-white to-gray-400 text-transparent">
        a third culture creative bringing ideas into reality, building digital
        products and documenting it all.
      </p>
    </div>
  );
};

export default Hero;
