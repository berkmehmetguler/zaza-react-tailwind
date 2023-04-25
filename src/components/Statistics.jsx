import React from "react";

const Statistics = () => {
  return (
    <section className="mb-4">
      <div className="mx-auto w-full container gap-4 p-4 sm:p-6" id="services">
        <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="sm:hidden">
            <label className="sr-only">Select tab</label>
            <select
              id="tabs"
              className="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option>Statistics</option>
              <option>Services</option>
              <option>FAQ</option>
            </select>
          </div>
          <ul
            className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400"
            id="fullWidthTab"
            data-tabs-toggle="#fullWidthTabContent"
            role="tablist"
          >
            <li className="w-full">
              <button
                id="stats-tab"
                role="tab"
                aria-controls="stats"
                aria-selected="true"
                className="inline-block w-full p-4 rounded-tl-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                Statistics
              </button>
            </li>
            <li className="w-full">
              <button
                id="about-tab"
                role="tab"
                aria-controls="about"
                aria-selected="false"
                className="inline-block w-full p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                Services
              </button>
            </li>
            <li className="w-full">
              <button
                id="faq-tab"
                role="tab"
                aria-controls="faq"
                aria-selected="false"
                className="inline-block w-full p-4 rounded-tr-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                FAQ
              </button>
            </li>
          </ul>
          <div
            id="fullWidthTabContent"
            className="border-t border-separate border-gray-200 dark:border-gray-600"
          >
            <div
              className=" p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
              id="stats"
            >
              <dl className="grid max-w-screen-xl grid-cols-1 gap-8 p-4 mx-auto  border-gray-300 rounded-md  text-gray-900 sm:grid-cols-2 lg:grid-cols-3 dark:text-white sm:p-8">
                <div className="flex flex-col items-center justify-center">
                  <dt className="mb-2 text-3xl font-extrabold">3M+</dt>
                  <dd className=" font-normal text-gray-500 dark:text-gray-400">
                    Customers
                  </dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <dt className="mb-2 text-3xl font-extrabold">14M+</dt>
                  <dd className=" font-normal text-gray-500 dark:text-gray-400">
                    Public Feedback
                  </dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <dt className="mb-2 text-3xl font-extrabold">1st</dt>
                  <dd className=" font-normal text-gray-500 dark:text-gray-400">
                    Our service projects
                  </dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <dt className="mb-2 text-3xl font-extrabold">1B+</dt>
                  <dd className=" font-normal text-gray-500 dark:text-gray-400">
                    Contributors
                  </dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <dt className="mb-2 text-3xl font-extrabold">90+</dt>
                  <dd className=" font-normal text-gray-500 dark:text-gray-400">
                    Top Forbes companies
                  </dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <dt className="mb-2 text-3xl font-extrabold">20+</dt>
                  <dd className=" font-normal text-gray-500 dark:text-gray-400">
                    Organizations
                  </dd>
                </div>
              </dl>
            </div>

            {/* Services */}
            {/* <div
              className=" p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
              id="about"
            >
              <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                We invest in the world’s potential
              </h2>
              <ul className="space-y-4 text-gray-500 dark:text-gray-400">
                <li className="flex space-x-2">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                  </svg>
                  <span className="font-light leading-tight">
                    Dynamic reports and dashboards
                  </span>
                </li>
                <li className="flex space-x-2">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                  </svg>
                  <span className="font-light leading-tight">
                    Templates for everyone
                  </span>
                </li>
                <li className="flex space-x-2">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                  </svg>
                  <span className="font-light leading-tight">
                    Development workflow
                  </span>
                </li>
                <li className="flex space-x-2">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                  </svg>
                  <span className="font-light leading-tight">
                    Limitless business automation
                  </span>
                </li>
              </ul>
            </div> */}
            {/* FAQ */}
            {/* <div
              className=" p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
              id="faq"
            >
              <div
                id="accordion-flush"
                data-accordion="collapse"
                data-active-classes="bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                data-inactive-classes="text-gray-500 dark:text-gray-400"
              >
                <h2 id="accordion-flush-heading-1">
                  <button className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
                    <span>What is Flowbite?</span>
                    <svg
                      className="w-6 h-6 rotate-180 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
                    </svg>
                  </button>
                </h2>
                <div id="accordion-flush-body-1" className="hidden">
                  <div className="py-5 font-light border-b border-gray-200 dark:border-gray-700">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      Flowbite is an open-source library of interactive
                      components built on top of Tailwind CSS including buttons,
                      dropdowns, modals, navbars, and more.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                      Check out this guide to learn how to{" "}
                      <a
                        href="/docs/getting-started/introduction/"
                        className="text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        get started
                      </a>{" "}
                      and start developing websites even faster with components
                      on top of Tailwind CSS.
                    </p>
                  </div>
                </div>
                <h2 id="accordion-flush-heading-2">
                  <button className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
                    <span>Is there a Figma file available?</span>
                    <svg
                      className="w-6 h-6 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
                    </svg>
                  </button>
                </h2>
                <div id="accordion-flush-body-2" className="hidden">
                  <div className="py-5 font-light border-b border-gray-200 dark:border-gray-700">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      Flowbite is first conceptualized and designed using the
                      Figma software so everything you see in the library has a
                      design equivalent in our Figma file.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                      Check out the{" "}
                      <a
                        href="/"
                        className="text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Figma design system
                      </a>{" "}
                      based on the utility classes from Tailwind CSS and
                      components from Flowbite.
                    </p>
                  </div>
                </div>
                <h2 id="accordion-flush-heading-3">
                  <button className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
                    <span>
                      What are the differences between Flowbite and Tailwind UI?
                    </span>
                    <svg
                      data-accordion-icon
                      className="w-6 h-6 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
                    </svg>
                  </button>
                </h2>
                <div id="accordion-flush-body-3" className="hidden">
                  <div className="py-5 font-light border-b border-gray-200 dark:border-gray-700">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      The main difference is that the core components from
                      Flowbite are open source under the MIT license, whereas
                      Tailwind UI is a paid product. Another difference is that
                      Flowbite relies on smaller and standalone components,
                      whereas Tailwind UI offers sections of pages.
                    </p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      However, we actually recommend using both Flowbite,
                      Flowbite Pro, and even Tailwind UI as there is no
                      technical reason stopping you from using the best of two
                      worlds.
                    </p>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      Learn more about these technologies:
                    </p>
                    <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
                      <li>
                        <a
                          href="/"
                          className="text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Flowbite Pro
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          rel="nofollow"
                          className="text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Tailwind UI
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
