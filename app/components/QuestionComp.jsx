
import { questionData } from "@/helpers/data";
import SingleOuestion from "./SingleOuestion";


const QuestionComp = () => {
 
  return (
    <div className="text-center  p-40 ">
      <p className="text-white font-extrabold text-[32px] ">
        Frequently Asked Questions
      </p>
      {questionData.map((item) => (
        <div>
          <SingleOuestion  data={item} />
        </div>
      ))}
    </div>
  );
};

export default QuestionComp;