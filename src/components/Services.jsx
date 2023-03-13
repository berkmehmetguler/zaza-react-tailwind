import React from "react";
import Fea1 from "../assets/fea1.jpg";
import Warehouse from "../assets/warehouse.jpg";
import Banks from "../assets/dutchbanks.jpg";

const Services = () => {
  return (
    <section className="flex flex-row">
      <div className="flex flex-col md:flex-row mb-4 gap-4 md:gap-6 mt-6 mx-auto  px-4">
        <div className="flex flex-col bg-sky-500/75 w-full rounded max-w-lg  cursor-pointer">
          <h2 className="text-xl text-center">Citizen service number (BSN)</h2>
          <img
            src={Warehouse}
            alt="BSN Number"
            className="h-36 w-full object-cover md:h-48"
          />
        </div>
        <div className="flex flex-col bg-sky-500/75 w-full rounded max-w-lg  cursor-pointer">
          <h2 className="text-xl text-center">Dutch Bank Account</h2>
          <img
            src={Banks}
            alt=""
            className="h-36 w-full object-cover md:h-48"
          />
        </div>
        <div className="flex flex-col bg-sky-500/75 w-full rounded max-w-lg  cursor-pointer">
          <h2 className="text-xl text-center">
            Registration (KVK) & Health Insurance
          </h2>
          <img src={Fea1} alt="" className="h-36 w-full object-cover md:h-48" />
        </div>
      </div>
    </section>
  );
};

export default Services;
