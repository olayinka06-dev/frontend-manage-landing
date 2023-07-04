import React from "react";

const NavigationBar = () => {
  return (
    <header>
      <nav class="container flex justify-between items-center py-6 px-3">
        <div>
          <img src="./images/logo.svg" alt="" />
        </div>
        <ul class="nav-desktop hidden md:flex md:flex-row md:space-x-10">
          <li>
            <a class="nav-link" href="">
              Pricing
            </a>
          </li>
          <li>
            <a class="nav-link" href="">
              Product
            </a>
          </li>
          <li>
            <a class="nav-link" href="">
              About Us
            </a>
          </li>
          <li>
            <a class="nav-link" href="">
              Careers
            </a>
          </li>
          <li>
            <a class="nav-link" href="">
              Community
            </a>
          </li>
        </ul>
        <div class="hidden md:block">
          <button class="btn">Get Started</button>
        </div>
        <div class="md:hidden">
          <button class="toggle flex flex-col items-center justify-center h-[30px] w-[30px] gap-[5px] transition-all ease-in duration-200">
            <div class="first-line line"></div>
            <div class="second-line line"></div>
            <div class="third-line line"></div>
          </button>
        </div>
      </nav>
      <div class="flex items-center relative justify-center">
        <ul class="mobile-navigation rounded flex flex-col items-center justify-center space-y-6 absolute top-[15%] overflow-hidden h-0 w-[60%] px-12 ease-in duration-200 bg-white md:hidden ">
          <li>
            <a class="nav-link" href="">
              Pricing
            </a>
          </li>
          <li>
            <a class="nav-link" href="">
              Product
            </a>
          </li>
          <li>
            <a class="nav-link" href="">
              About Us
            </a>
          </li>
          <li>
            <a class="nav-link" href="">
              Careers
            </a>
          </li>
          <li>
            <a class="nav-link" href="">
              Community
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavigationBar;
