import React, { Component } from "react";
import Navigation from "./components/Navigation";
import "./App.css";

/*
 * import react router.
 * set up a dummy route with a text input
 * if that input gets the correct thing, set showButtons to true
 */

class App extends Component {
  state = {
    endTime: 0,
    isHuntActive: false,
    teamData: {
      teamName: "",
      id: null
    }
  };

  updateTeamData = teamData => {
    this.setState({ teamData });
  };

  toggleHuntActive = isHuntActive => {
    this.setState({ isHuntActive });
  };

  render() {
    return (
      <div className="App">
        <Navigation
          isHuntActive={this.state.isHuntActive}
          toggleHuntActive={this.toggleHuntActive}
          updateTeamData={this.updateTeamData}
          teamData={this.state.teamData}
        />
      </div>
    );
  }
}

export default App;
