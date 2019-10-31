import React, { Component } from "react";
import Navigation from "./components/Navigation";
import "./App.css";

class App extends Component {
  state = {
    endTime: 0,
    isHuntActive: false,
    teamData: {
      teamName: "",
      id: null,
      correctAnswers: []
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
