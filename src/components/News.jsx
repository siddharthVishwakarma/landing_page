import React from "react";
import news1 from "../images/news1.jpg";
import news2 from "../images/news2.jpg";
const News = () => {
  return (
    <>
      <section className="text-gray-600 body-font bg-white-100">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Latest Inside News
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom prism
              food truck ugh squid celiac humblebrag.
            </p>
          </div>
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -mx-4 -mb-10 text-center">
              <div className="sm:w-1/2 mb-10 px-4">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src={news1}
                  />
                </div>
                <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                  Running remote office and onboardings
                </h2>
                <p className="leading-relaxed text-base">
                  Williamsburg occupy sustainable snackwave gochujang. Pinterest
                  cornhole brunch, slow-carb neutra irony.
                </p>
                <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                  Continue
                </button>
              </div>
              <div className="sm:w-1/2 mb-10 px-4">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src={news2}
                  />
                </div>
                <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                  A new look and new way to collaborate
                </h2>
                <p className="leading-relaxed text-base">
                  Williamsburg occupy sustainable snackwave gochujang. Pinterest
                  cornhole brunch, slow-carb neutra irony.
                </p>
                <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
