import React from "react";
import Banner from "../assets/banner1.png";

const Hero = () => {
  return (
    <section className="bg-gray-500">
      <div className="flex md:flex-row flex-col max-w-7xl h-full mx-auto p-4">
        <img src={Banner} alt="banner" className="w-1/2" />

        <div className="banner-text flex flex-col fit-content sm:min-w-full ">
          <h2 className="text-gray-100 text-center text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi,
            consequuntur!
          </h2>
          <p className="text-gray-800 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            ducimus hic, iure veniam animi assumenda quae harum. Sequi,
            asperiores commodi?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
