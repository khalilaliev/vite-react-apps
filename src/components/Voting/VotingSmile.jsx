import { useState } from "react";
import VotingShowResult from "./VotingShowResult";

const VotingSmile = () => {
  const smiles = ["😂", "😍", "🥲", "😶‍🌫️", "🤑", "😫", "😭"];

  const [increment, setIncrement] = useState(Array(smiles.length).fill(0));
  const [mostVoted, setMostVoted] = useState([]);
  const [isVoted, setIsVoted] = useState(false);

  const handleClick = (index) => {
    setIncrement((prev) => {
      const newCount = [...prev];
      newCount[index] += 1;
      setIsVoted(true);
      return newCount;
    });
  };

  const showResult = () => {
    const maxCount = Math.max(...increment);
    const maxVotes = smiles.filter(
      (smile, index) => increment[index] === maxCount
    );
    setMostVoted(maxVotes);
  };

  return (
    <>
      <div className=" flex  gap-7">
        {smiles.map((smile, index) => {
          return (
            <span
              onClick={() => handleClick(index)}
              key={index}
              className=" grid gap-5 cursor-pointer text-7xl"
            >
              {smile}
              <span className="text-4xl">{increment[index]}</span>
            </span>
          );
        })}
      </div>
      <VotingShowResult
        showResult={showResult}
        mostVoted={mostVoted}
        isVoted={isVoted}
      />
    </>
  );
};

export default VotingSmile;
