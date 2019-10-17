import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Timer from "./components/Timer";
import "./App.css";

/*
 * import react router.
 * set up a dummy route with a text input
 * if that input gets the correct thing, set showButtons to true
 */

const App = () => {
  const [showButtons, setShowButtons] = useState(true);

  if (showButtons === false) {
    setShowButtons(true);
  }

  return (
    <div className="App">
      <Navigation />
      <Timer showButtons={showButtons} />
    </div>
  );
};

export default App;
