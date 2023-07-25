"use client";
import React, { useState } from 'react';
import { FaInfoCircle } from "react-icons/fa";

const Footer = () => {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      setError("Please inert an email address");
    }
    else if(!/\S+@\S+\.\S+/.test(text)){
      setError("Please inert a valid email");
    }
    else {
      setError("");
    }
  };
  return (
    <>
      <footer className="bg-color-dark-blue py-10">
        <div className="container">
          <div className="flex md:flex-row flex-col-reverse">
            <div className=" w-[30%] flex flex-col gap-12">
              <div className="">
                <img src="/images/logo.svg" alt="" />
              </div>
              <div className="">
                <span className="text-3xl text-white hover:text-color-red"></span>
                <span className="text-3xl text-white hover:text-color-red"></span>
                <span className="text-3xl text-white hover:text-color-red"></span>
                <span className="text-3xl text-white hover:text-color-red"></span>
              </div>
            </div>
            <div className=" w-[20%] flex flex-col text-white gap-3">
              <a className="hover:text-color-red" href="">
                Home
              </a>
              <a className="hover:text-color-red" href="">
                Pricing
              </a>
              <a className="hover:text-color-red" href="">
                Products
              </a>
              <a className="hover:text-color-red" href="">
                About Us
              </a>
            </div>
            <div className="w-[20%] flex flex-col text-white gap-3">
              <a className="hover:text-color-red" href="">
                Careers
              </a>
              <a className="hover:text-color-red" href="">
                Community
              </a>
              <a className="hover:text-color-red" href="">
                Privacy Policy
              </a>
            </div>
            <div className="w-[30%] flex flex-col gap-12">
              <form className="flex flex-col" onSubmit={handleSubmit}>
                <div className="flex flex-row gap-2">
                  <input
                    className="py-3 px-3 w-full rounded-full"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    type="text"
                    name=""
                    id=""
                  />
                  <button className="btn" type="submit">
                    Go
                  </button>
                </div>
                {error && <p className="text-color-red">{error}</p>}
              </form>
              <div className="text-white flex justify-end items-ends">
                <span>
                  Copyright {new Date().getFullYear()}. All Rights Reserved
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
