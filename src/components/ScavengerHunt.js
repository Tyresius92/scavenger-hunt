import React from "react";

const ScavengerHunt = () => {
  return (
    <>
      <h1>The Hunt</h1>
      <p>
        This will contain the actual questions and answers. At the moment I'm
        thinking just hard coded questions with simple input validation to keep
        it simple.
      </p>
      <p>
        Additionally, we'll need to record the answers to keep the leaderboard
        up to date across devices. (Firebase makes this super simple, they don't
        even need to refresh the page.)
      </p>
    </>
  );
};

export default ScavengerHunt;
