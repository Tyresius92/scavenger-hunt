import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  Container,
  Divider,
  List,
  ListItem,
  Typography,
  withStyles
} from "@material-ui/core";
import { questions } from "./questionsObject";
import { withFirebase } from "./firebase";
import { stylesObject } from "./useStyles";

const MAX_POINTS = Object.keys(questions).reduce(
  (acc, key) =>
    acc +
    questions[key].questions.reduce(
      (pointsInBlock, question) => pointsInBlock + question.points,
      0
    ),
  0
);

class LeaderBoard extends React.Component {
  state = {
    sortedTeamsList: []
  };

  componentDidMount = () => {
    this.props.firebase.getAutoUpdatingTeamList(teamList => {
      this.setState({
        sortedTeamsList: teamList.slice(1).sort((a, b) => b.score - a.score)
      });
    });
  };

  render() {
    return (
      <>
        {this.state.sortedTeamsList.length > 0 && (
          <Card className={this.props.classes.card} raised>
            <Container>
              <List>
                {this.state.sortedTeamsList.map((currTeam, index, array) => (
                  <React.Fragment key={`${currTeam.name}_${index}`}>
                    <ListItem
                      className={
                        currTeam.teamName === this.props.loggedInTeam
                          ? this.props.classes.myLeaderBoardLineItem
                          : this.props.classes.leaderLine
                      }
                    >
                      <Typography
                        variant="h5"
                        className={
                          currTeam.teamName === this.props.loggedInTeam
                            ? this.props.classes.myLeaderBoardLineText
                            : this.props.classes.leaderLine
                        }
                      >
                        {currTeam.teamName}
                        <span className={this.props.classes.score}>
                          {currTeam.score} / {MAX_POINTS}
                        </span>
                      </Typography>
                    </ListItem>
                    {index + 1 !== array.length && <Divider />}
                  </React.Fragment>
                ))}
              </List>
            </Container>
          </Card>
        )}
      </>
    );
  }
}

LeaderBoard.propTypes = {
  firebase: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  loggedInTeam: PropTypes.string
};

LeaderBoard.defaultProps = {
  loggedInTeam: null
};

export default withStyles(stylesObject)(withFirebase(LeaderBoard));
