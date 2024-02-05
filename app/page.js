"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import QuestionComp from "./components/QuestionComp";

export default function Home() {
  const { currentUser } = useSelector((state) => state.auth);
  let router = useRouter();
  useEffect(() => {
    currentUser && router.push("/profile");
  }, [currentUser]);

  const homeData = [
    {
      header: "Enjoy on your TV",
      p: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
      image: "./images/tv.gif",
    },
    {
      header: "Download your shows to watch offline",
      p: "Save your favorites easily and always have something to watch.",
      image: "./images/strangerthings.gif",
    },
    {
      header: "Watch everywhere",
      p: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
      image: "./images/apptv.gif",
    },
    {
      header: "Create profiles for kids",
      p: "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",
      image: "./images/kids.png",
    },
  ];

  return (
    <>
      <div className="relative h-[75%] w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover border-b-[10px] border-[#232323]">
        <div className="bg-black w-full h-full bg-opacity-50">
          <div className="text-white text-center relative top-2/4 m-auto">
            <h1 className="text-5xl font-[900] text-center mb-3">
              Unlimited movies, TV shows, and more
            </h1>
            <p className="text-2xl font-[400] ">
              Watch anywhere. Cancel anytime.
            </p>

            <Link href="/register">
              <button
                className="btn-danger w-[250px]"
                // onClick={() => router.push("/register")}
              >
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>

      <>
        {homeData.map((item, i) => (
          <div key={i} className="bg-black border-b-[10px] border-[#232323] h-[55%]">
          <div className={`bg-black flex  py-15 justify-center items-center  px-[72px] max-w-[66.6%] m-auto ${i % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
              <div className="text-left flex-1">
                <p className="font-bold text-white text-[48px]">
                  {item.header}
                </p>
                <p className="text-white text-[24px]">{item.p}</p>
              </div>
              <div className="flex-1">
                <img src={item.image} alt="" />
              </div>
            </div>
          </div>
        ))}
      </>

      <div className="bg-black">
        <QuestionComp/>
      </div>
    </>
  );
}
