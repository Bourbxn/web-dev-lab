import React from "react";

const VoteBtn = (props) => {
  const handleVote = (e) => {
    e.preventDefault();
    props.onVote();
  };

  return (
    <button
      className="bg-[#f2f0f3] p-2 rounded border-gray-600 border-[1px] hover:bg-[#e0e0e0]"
      onClick={handleVote}
    >
      {props.text}
    </button>
  );
};

export default VoteBtn;
