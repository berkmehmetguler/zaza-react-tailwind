import React from "react";
import Insan1 from "../assets/insan1.jpg";
import Insan2 from "../assets/insan2.jpg";
import Insan3 from "../assets/insan3.jpg";
import Insan4 from "../assets/insan4.jpg";

const Comman = () => {
  return (
    <section className="">
      <div
        className="grid border border-gray-200 rounded-md shadow-sm dark:border-gray-700 mx-auto w-full container p-4 my-4 sm:p-6 scroll-smooth"
        id="contact"
      >
        <div className="grid border-gray-200 rounded-md shadow-md dark:border-gray-700 gap-4  md:grid-cols-2">
          <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg  font-semibold text-gray-900 dark:text-white">
                Very easy this was to integrate
              </h3>
              <p className="my-4 font-light">
                If you care for your time, Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Suscipit, optio? I hands down
                would go with this."
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center space-x-3">
              <img
                className="w-10 h-10 rounded-full"
                src={Insan1}
                alt="profile picture1"
              />
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Bonnie Green</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Developer AI
                </div>
              </div>
            </figcaption>
          </figure>
          <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg  font-semibold text-gray-900 dark:text-white">
                Solid foundation for any project
              </h3>
              <p className="my-4 font-light">
                Designing with Figma components that can be easily translated to
                the utility classes of Tailwind CSS is a huge timesaver!"
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center space-x-3">
              <img
                className="w-10 h-10 rounded-full"
                src={Insan2}
                alt="profile picture2"
              />
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Roberta Casas</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Lead designer{" "}
                </div>
              </div>
            </figcaption>
          </figure>
          <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-bl-lg md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg  font-semibold text-gray-900 dark:text-white">
                Mindblowing workflow
              </h3>
              <p className="my-4 font-light">
                Aesthetically, the well designed components are beautiful and
                will undoubtedly level up your next application."
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center space-x-3">
              <img
                className="w-10 h-10 rounded-full"
                src={Insan3}
                alt="profile picture3"
              />

              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Jese Leos</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Software Engineer{" "}
                </div>
              </div>
            </figcaption>
          </figure>
          <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg  font-semibold text-gray-900 dark:text-white">
                Efficient Collaborating
              </h3>
              <p className="my-4 font-light">
                You have many examples that can be used to create a fast
                prototype for your team."
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center space-x-3">
              <img
                className="w-10 h-10 rounded-full"
                src={Insan4}
                alt="profile picture4"
              />
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Joseph McFall</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                  CTO at Google
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Comman;
