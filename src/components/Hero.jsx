import React from "react";
import Banner from "../assets/banner1.png";
import Banner2 from "../assets/banner2.png";
import Tax from "../assets/tax.jpg";

const Hero = () => {
  return (
    <section className="bg-transparent bg-slate-500 h-fit">
      <div className="flex flex-col  max-w-7xl mx-auto py-auto p-4">
        <div className="flex flex-col md:flex-row align-middle gap-10 mx-auto py-4 mt-4 ">
          <img
            src={Banner2}
            alt="banner"
            className=" md:max-w-lg text-center mt-4 object-cover rounded border-[5px] w-full"
          />
          <div className="text-center flex flex-col justify-center md:max-w-lg   ">
            <h2 className="text-gray-100 text-center text-2xl my-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi,
              consequuntur!
            </h2>
            <button className=" text-center align-middle text-black rounded p-1 mx-4 text-2xl bg-slate-200">
              Call Us
            </button>
          </div>
          <p className="text-gray-800 text-center md:hidden">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            ducimus hic, iure veniam animi assumenda quae harum. Sequi,
            asperiores commodi?
          </p>
        </div>

        <div className="flex flex-col md:flex-row-reverse align-middle mx-auto py-4 gap-10 mt-4 ">
          <img
            src={Tax}
            alt="Banner2"
            className="h-fit md:max-w-lg mt-4 object-cover rounded border-[5px] w-full"
          />

          <div className="text-center flex flex-col justify-center md:max-w-lg ">
            <h2 className="text-gray-100 text-center text-2xl my-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi,
              consequuntur!
            </h2>
            <button className=" text-center align-middle text-black rounded p-1 mx-4 text-2xl bg-slate-200">
              Call Us
            </button>
          </div>
          <p className="text-gray-800 text-center md:hidden">
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
