import React from "react";

const UnvoteBtn = (props) => {
  const handleVote = (e) => {
    e.preventDefault();
    props.onUnvote();
  };

  return (
    <button
      className="bg-gray-100 p-2 rounded border-gray-600 border-[1px]"
      onClick={handleVote}
    >
      Click to Unvote
    </button>
  );
};

export default UnvoteBtn;
