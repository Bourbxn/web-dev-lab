import React, { useState } from "react";
import VoteBtn from "./VoteBtn";

const FoodBox = ({ type, food, detail, imgSrc }) => {
  let [voted, setVoted] = useState(0);
  const getVote = () => {
    if (voted > 9) {
      window.alert("Cannot Vote more");
    } else {
      setVoted(voted + 1);
    }
  };

  const getUnvote = () => {
    if (voted < 1) {
      window.alert("Cannot Unvote");
    } else {
      setVoted(voted - 1);
    }
  };

  return (
    <div className="lg:w-3/5 min-h-[24rem] bg-[#fcefdb] rounded-xl p-6 border-black border-[3px] flex flex-col justify-between gap-y-5">
      <div className="flex md:flex-row flex-col-reverse justify-between items-start">
        <div>
          <h2 className="text-3xl font-bold md:py-6 py-3">{type}</h2>
          <h3 className="text-xl font-bold md:pb-5 pb-2">{food}</h3>
          <p>{detail}</p>
        </div>
        <div>
          <img src={imgSrc} alt={food} className="w-[900px]" />
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-center items-center gap-4 md:pt-0">
        <VoteBtn text={"Click to vote"} onVote={getVote} />
        <h4 className="bg-[#83e600] text-2xl font-bold rounded-lg p-3 text-[#904ade] border-black border-[3px] ">
          {voted === 0 && <div>MIN</div>}
          {voted > 0 && voted < 10 && <div>{voted}</div>}
          {voted === 10 && <div>MAX</div>}
        </h4>
        <VoteBtn text={"Click to Unvote"} onVote={getUnvote} />
      </div>
    </div>
  );
};

export default FoodBox;
