import { questionData } from "@/helpers/data";
import SingleQuestion from "./SingleQuestion";

const QuestionComp = () => {
  return (
    <div className="text-center  py-[5rem]  ">
      <p className="text-white font-[900] lg:text-[48px]  text-[36px]">
        Frequently Asked Questions
      </p>
      <div className="my-8">
        {questionData.map((item) => (
          <div className="xl:w-[62%] w-[94%] m-auto text-[24px] ">
            <SingleQuestion data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionComp;
