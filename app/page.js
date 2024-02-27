"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import QuestionComp from "./components/QuestionComp";
import { homeData } from "@/helpers/data";
import Footer from "./components/Footer";
import { FaAngleRight } from "react-icons/fa6";

export default function Home() {
  const { currentUser } = useSelector((state) => state.auth);
  let router = useRouter();
  useEffect(() => {
    currentUser && router.push("/profile");
  }, [currentUser]);

  return (
    <>
      <div className="relative h-[73%] w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover border-b-[10px] border-[#232323]">
        <div className="bg-black w-full h-full bg-opacity-65">
          <div className="text-white text-center relative top-64 m-auto">
            <h1 className="md:text-[48px] text-[32px]  font-[900] text-center mb-3">
              Unlimited movies, TV shows, and more
            </h1>
            <p className="md:text-[24px]  text-[18px] font-[400] ">
              Watch anywhere. Cancel anytime.
            </p>

            <Link href="/register">
              <button
                className="btn-danger w-[250px] text-[24px] flex m-auto mt-4 items-center gap-3 justify-center"
                onClick={() => router.push("/register")}
              >
                Get Started <FaAngleRight className="mt-1" />
              </button>
            </Link>
          </div>
        </div>
      </div>

      <>
        {homeData.map((item, i) => (
          <div
            key={i}
            className="bg-black border-b-[10px] border-[#232323] h-auto md:h-[64%] flex justify-center items-center p-10"
          >
            <div
              className={`bg-black flex flex-col justify-center items-center xl:max-w-[66.6%] py-15 lg:flex-nowrap  m-auto md:max-w-[100%] md:p-[5px] md:${
                i % 2 !== 0 ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <div className="lg:text-left flex-1 flex-nowrap text-center p-[30px]">
                <p className="font-bold text-white lg:text-[48px] text-[32px]">
                  {item.header}
                </p>
                <p className="text-white lg:text-[24px] text-[16px]">
                  {item.p}
                </p>
              </div>
              <div className="flex-1">
                <img className="min-w-[400px]" src={item.image} alt="" />
              </div>
            </div>
          </div>
        ))}
      </>

      <div className="bg-black border-b-[9px] border-[#232323]">
        <QuestionComp />
      </div>
      <Footer />
    </>
  );
}
