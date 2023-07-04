import React from "react";

const Simple = () => {
  return (
    <section class="simple bg-color-red-fade">
      <div class="container md:mt-0 py-20">
        <div class="flex gap-20 md:gap-0 md:flex-row flex-col items-center justify-center h-full">
          <div class="md:w-1/2 w-full text-center md:text-left h-6 bg-[url(/images/bg-simplify-section-desktop.svg)]">
            <div>
              <h1 class="header2 w-full md:w-[450px]" style={{color: "white"}}>
                Simplify how your team works today.
              </h1>
            </div>
          </div>
          <div class="md:w-1/2 w-full text-center">
            <button
              class="btn"
              style={{backgroundColor: "white", color: "#f3613c"}}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Simple;
