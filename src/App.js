import React, { Component } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import Navigation from "./components/Navigation";
import "./App.css";

class App extends Component {
  state = {
    endTime: 0,
    isHuntActive: false,
    teamData: {
      teamName: "",
      id: null
    },
    correctAnswers: [],
    unlockedBlocks: [],
    useDarkTheme: false
  };

  updateTeamData = teamData => {
    this.setState({ teamData });
  };

  toggleHuntActive = isHuntActive => {
    this.setState({ isHuntActive });
  };

  updateCorrectAnswers = correctAnswers => {
    this.setState({ correctAnswers });
  };

  updateUnlockedBlocks = unlockedBlocks => {
    this.setState({ unlockedBlocks });
  };

  toggleDarkTheme = () => {
    this.setState(prevState => ({
      useDarkTheme: !prevState.useDarkTheme
    }));
  };

  render() {
    const theme = createMuiTheme({
      palette: {
        primary: green,
        type: this.state.useDarkTheme ? "dark" : "light"
      }
    });

    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Navigation
            isHuntActive={this.state.isHuntActive}
            toggleHuntActive={this.toggleHuntActive}
            updateTeamData={this.updateTeamData}
            teamData={this.state.teamData}
            updateUnlockedBlocks={this.updateUnlockedBlocks}
            unlockedBlocks={this.state.unlockedBlocks}
            updateCorrectAnswers={this.updateCorrectAnswers}
            correctAnswers={this.state.correctAnswers}
            isDarkTheme={this.state.useDarkTheme}
            toggleDarkTheme={this.toggleDarkTheme}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
