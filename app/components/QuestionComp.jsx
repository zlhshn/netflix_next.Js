import React from "react";
import { XIcon } from "@/public/icons/GoogleIcon";
import { PlusIcon } from "@/public/icons/GoogleIcon";

const QuestionComp = () => {
  return (
    <div className="text-center  ">
      <p className="text-white font-extrabold text-[32px] ">
        Frequently Asked Questions
      </p>
      <div>
        <div className="bg-[#414141]">
          <p className="text-white">What is Netflix?</p>
          <p><XIcon /></p>
        </div>
        {/* <div>
          <p>
            Netflix is a streaming service that offers a wide variety of
            award-winning TV shows, movies, anime, documentaries, and more on
            thousands of internet-connected devices.
          </p>
          <p>
            You can watch as much as you want, whenever you want without a
            single commercial – all for one low monthly price. There's always
            something new to discover and new TV shows and movies are added
            every week!
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default QuestionComp;
