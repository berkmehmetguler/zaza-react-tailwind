import React from "react";

const Footer = () => {
  return (
    <footer className="mt-4 bg-slate-400">
      <div className="grid grid-rows-1 md:grid-cols-3 gap-4 ">
        <div className="h-[200px] w-content mt-2 bg-slate-300 ">
          <h2 className="text-2xl border-b-[3px] text-center border-slate-600">
            About Us
          </h2>
          <ul className="list-disc p-4 mx-auto text-center text-xl">
            <li>
              <a href="">Link</a>
            </li>
            <li>
              <a href="">Link</a>
            </li>
            <li>
              <a href="">Link</a>
            </li>
            <li>
              <a href="">Link</a>
            </li>
          </ul>
        </div>
        <div className="h-[200px] w-content mt-2 bg-slate-300 ">
          <h2 className="text-2xl border-b-[3px] text-center border-slate-600">
            Services
          </h2>
          <ul className="list-disc p-4 mx-auto text-center text-xl">
            <li>
              <a href="">Link</a>
            </li>
            <li>
              <a href="">Link</a>
            </li>
            <li>
              <a href="">Link</a>
            </li>
            <li>
              <a href="">Link</a>
            </li>
          </ul>
        </div>
        <div className="h-[200px] w-content mt-2 bg-slate-300 ">
          <h2 className="text-2xl border-b-[3px] text-center border-slate-600">
            Contact
          </h2>
          <ul className="list-disc p-4 mx-auto text-center text-xl">
            <li>
              <a href="">Link</a>
            </li>
            <li>
              <a href="">Link</a>
            </li>
            <li>
              <a href="">Link</a>
            </li>
            <li>
              <a href="">Link</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
