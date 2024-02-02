import React, { useState } from "react";
import "./Joke.css";

/** A single joke, along with vote up/down buttons. */

const Joke = ({ id, vote, votes, text }) => {
  const [voted, setVoted] = useState(false);

  const handleVote = (value) => {
    if (!voted) {
      vote(id, value);
      setVoted(true);
    }
  };

  return (
    <div className="Joke">
      <div className="Joke-votearea">
        <button onClick={() => handleVote(1)}>
          <i className="fas fa-thumbs-up" />
        </button>

        <button onClick={() => handleVote(-1)}>
          <i className="fas fa-thumbs-down" />
        </button>

        {votes}
      </div>

      <div className="Joke-text">{text}</div>
    </div>
  );
};

export default Joke;
