import React from "react";

const Hero = () => {
  return (
    <section class="hero">
      <div class="container flex md:flex-row flex-col-reverse justify-center items-center px-3">
        <div class="md:w-1/2 w-full md:text-left text-center">
          <h1 class="text-5xl font-bold md:w-[450px] text-color-dark-blue">
            Bring everyone together to build better products.
          </h1>
          <p class="paragraph md:w-[400px] my-7">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <div>
            <button class="btn">Get Started</button>
          </div>
        </div>
        <div class="md:w-1/2 w-full">
          <img src="/images/illustration-intro.svg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
