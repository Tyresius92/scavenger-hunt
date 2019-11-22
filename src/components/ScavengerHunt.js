import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";
import { withFirebase } from "./firebase";
import QuestionCard from "./QuestionCard";

class ScavengerHunt extends React.Component {
  state = {
    questionsList: []
  };

  componentDidMount = () => {
    this.props.firebase.getQuestionsOnce(questionsList => {
      this.setState({
        questionsList
      });
    });
  };

  onCorrectAnswer = questionId => {
    this.props.firebase
      .setTeamInfoForNewCorrectAnswer(this.props.teamData.id, questionId)
      .then(newCorrectAnswers =>
        this.props.updateCorrectAnswers(newCorrectAnswers)
      );
  };

  render() {
    return (
      <>
        {(() => {
          if (this.props.teamData.id === null) {
            return <Typography>Please log in</Typography>;
          }

          if (this.props.teamData.id === 0) {
            return (
              <Typography>
                The Admin Team is not allowed to participate
              </Typography>
            );
          }

          if (this.props.isHuntActive) {
            return (
              <>
                {this.state.questionsList.map((question, index) => (
                  <QuestionCard
                    id={index}
                    key={`question_${index}`}
                    question={question}
                    isCorrect={this.props.correctAnswers.includes(index)}
                    onCorrectAnswer={this.onCorrectAnswer}
                  />
                ))}
              </>
            );
          }

          return <Typography>The hunt is not open right now</Typography>;
        })()}
      </>
    );
  }
}

ScavengerHunt.propTypes = {
  firebase: PropTypes.object.isRequired,
  teamData: PropTypes.shape({
    id: PropTypes.number
  }),
  correctAnswers: PropTypes.arrayOf(PropTypes.number),
  updateTeamData: PropTypes.func.isRequired,
  isHuntActive: PropTypes.bool.isRequired,
  updateCorrectAnswers: PropTypes.func.isRequired
};

export default withFirebase(ScavengerHunt);
