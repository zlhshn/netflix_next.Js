
import { questionData } from "@/helpers/data";
import SingleQuestion from "./SingleQuestion";



const QuestionComp = () => {
 
  return (
    <div className="text-center  p-[15rem] ">
      <p className="text-white font-extrabold text-[32px] ">
        Frequently Asked Questions
      </p>
      {questionData.map((item) => (
        <div>
          <SingleQuestion  data={item} />
        </div>
      ))}
    </div>
  );
};

export default QuestionComp;
