const VotingShowResult = ({ showResult, mostVoted, isVoted }) => {
  return (
    <>
      <label
        onClick={showResult}
        className={`btn btn-primary w-1/3 my-0 mx-auto ${
          isVoted ? "bg-gray-200 " : "bg-blue-400 cursor-not-allowed"
        }`}
        htmlFor="modal-1"
      >
        Show Result
      </label>
      <input className="modal-state" id="modal-1" type="checkbox" />
      <div className="modal">
        <label className="modal-overlay" htmlFor="modal-1"></label>
        <div className="modal-content flex flex-col gap-5">
          {mostVoted && (
            <div className="mt-5 text-4xl">
              Most voted: {mostVoted.join(" ")}
            </div>
          )}
          <span>This emoji received the highest number of votes!</span>
          <div className=" flex justify-center">
            <button
              onClick={() => {
                document.getElementById("modal-1").checked = false;
              }}
              className="btn btn-primary"
            >
              Close Window
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default VotingShowResult;
