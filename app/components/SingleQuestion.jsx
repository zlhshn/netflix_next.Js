import React, { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa"; // FaTimes ekledim, XIcon yerine kullanılacak

const SingleQuestion = ({ data }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="pb-2">
      <div
        className="bg-[#414141] flex justify-between items-center p-[24px] border-b-[1.5px]  border-black cursor-pointer hover:bg-[#5e5c5c]"
        onClick={() => setShow(!show)}
      >
        <p className="text-white text-xl">{data.question}</p>
        <p className="text-white">{show ? <FaTimes /> : <FaPlus />}</p> {/* XIcon yerine FaTimes kullanıldı */}
      </div>
      <div
        className={`text-white bg-[#414141] text-left transition-all ease-out ${
          show ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <p className="text-white">{data.p1}</p>
        <p className="">{data.p2 || ""}</p>
      </div>
    </div>
  );
};

export default SingleQuestion;