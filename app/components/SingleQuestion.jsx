import React, { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { HiOutlinePlus } from "react-icons/hi2";

const SingleQuestion = ({ data }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="pb-2 ">
      <div
        className="bg-[#2D2D2D] flex justify-between items-center p-[15px] border-b-[1.5px] border-black cursor-pointer hover:bg-[#5e5c5c] lg:p-[25px]"
        onClick={() => setShow(!show)}
      >
        <p className="text-white ">{data.question}</p>
        <p className="text-white ">
          {show ? (
            <RxCross1 className="text-[35px]" />
          ) : (
            <HiOutlinePlus className="text-[40px]" />
          )}
        </p>{" "}
        {/* XIcon yerine FaTimes kullanıldı */}
      </div>
      <div
        className={`text-white  bg-[#2D2D2D] text-left transition-all ease-in-out duration-200 ${
          show ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <p className="text-white p-[20px]  lg:p-[26px]">{data.p1}</p>
        <p className=" pt-4  p-[20px] lg:p-[26px]">{data.p2 || ""}</p>
      </div>
    </div>
  );
};

export default SingleQuestion;
