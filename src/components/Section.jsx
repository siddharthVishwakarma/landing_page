import React from "react";
import comp from "../images/comp.jpg";

const Section = () => {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={comp}
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              It's helpfull for operating system
            </h1>
            <h1 class="title-font text-xl font-medium text-gray-900 mb-3">
              Ulta Fast and Secure
            </h1>
            <p class="leading-relaxed mb-5">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
            <h1 class="title-font text-xl font-medium text-gray-900 mb-3">
              Allow Costumizations
            </h1>
            <p class="leading-relaxed mb-5">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
            <h1 class="title-font text-xl font-medium text-gray-900 mb-3">
              Smart Contracts
            </h1>
            <p class="leading-relaxed mb-5">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
          </div>
        </div>
      </section>
      {/* Second Section */}
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                We provide best feature for custumer
              </h1>
              <div class="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-100 p-6 rounded-lg">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://dummyimage.com/720x400"
                  alt="content"
                />
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  Clean Code
                </h2>
                <p class="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-100 p-6 rounded-lg">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://dummyimage.com/721x401"
                  alt="content"
                />
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  Data Analatycs
                </h2>
                <p class="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-100 p-6 rounded-lg">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://dummyimage.com/722x402"
                  alt="content"
                />

                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  Fully Secured
                </h2>
                <p class="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-100 p-6 rounded-lg">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src="https://dummyimage.com/723x403"
                  alt="content"
                />
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  24/7 Support
                </h2>
                <p class="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section;
