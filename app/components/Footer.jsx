import React from "react";
import { IoLanguage } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-20 sm:px-6 lg:space-y-1 lg:px-8">
        <div className="text-[#B3B3B3] underline  font-medium text-[16px]">
          Questions? Contact us.
        </div>
        <div className="grid grid-cols-1 gap-4  pt-1 sm:grid-cols-2 lg:grid-cols-4 lg:pt-1 text-[#B3B3B3] ">
          <div>
            <ul className="mt-6 space-y-4 text-sm ">
              <li>
                <a
                  href="#"
                  className=" transition  underline text-[#B3B3B3] font-medium  text-[14px]"
                >
                  {" "}
                  FAQ{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition  underline text-[#B3B3B3]  font-medium  text-[14px]"
                >
                  {" "}
                  Investor Relations{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className=" transition  underline text-[#B3B3B3]  font-medium  text-[14px]"
                >
                  {" "}
                  Terms of Use{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className=" transition  underline text-[#B3B3B3]  font-medium  text-[14px]"
                >
                  {" "}
                  Contact Us{" "}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a
                  href="#"
                  className="transition  underline text-[#B3B3B3]  font-medium  text-[14px]"
                >
                  {" "}
                  Help Center{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className=" transition  underline text-[#B3B3B3]  font-medium  text-[14px]"
                >
                  {" "}
                  Jobs{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className=" transition  underline text-[#B3B3B3]  font-medium  text-[14px]"
                >
                  {" "}
                  Privacy{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition  underline text-[#B3B3B3]  font-medium  text-[14px]"
                >
                  {" "}
                  Speed Test{" "}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a
                  href="#"
                  className="transition  underline text-[#B3B3B3]  font-medium  text-[14px]"
                >
                  {" "}
                  Account{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className=" transition  underline text-[#B3B3B3]  font-medium  text-[14px]"
                >
                  {" "}
                  Redeem Gift Cards{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="transition underline text-[#B3B3B3]  font-medium  text-[14px]"
                >
                  {" "}
                  Cookie Preferences{" "}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition underline text-[#B3B3B3]  font-medium  text-[14px]"
                >
                  {" "}
                  Legal Notices{" "}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a
                  href="#"
                  className=" transition  underline text-[#B3B3B3]  font-medium  text-[14px]"
                >
                  {" "}
                  Media Center{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className=" transition  underline text-[#B3B3B3]  font-medium  text-[14px]"
                >
                  {" "}
                  Ways to Watch{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className=" transition  underline text-[#B3B3B3]  font-medium  text-[14px]"
                >
                  {" "}
                  Corporate Information{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className=" transition underline text-[#B3B3B3]  font-medium  text-[14px]"
                >
                  {" "}
                  Only on Netflix{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      
        <div className="inline-block mb-15">
          <div className="text-[#B3B3B3] bg-black outline-none border border-[#B3B3B3] rounded-md px-2 py-1 flex justify-between items-center ">
            <IoLanguage color="#fff" />
            <select
              name=""
              id=""
              className="text-white bg-black border-none outline-none"
            >
              <option value="" className="text-black bg-white ">
                English
              </option>
              <option value="" className="text-black  bg-white  ">
                Turkish
              </option>
            </select>
          </div>
        </div>

        <div className=" transition  text-[#B3B3B3]  font-medium  text-[14px]">
          Netflix Türkiye
        </div>
      </div>
    </footer>
  );
};

export default Footer;
