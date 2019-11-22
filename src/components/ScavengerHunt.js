import React from "react";
import PropTypes from "prop-types";
import { withFirebase } from "./firebase";
import MessageCard from "./MessageCard";
import QuestionCard from "./QuestionCard";
import ImportantInfoCard from "./ImportantInfoCard";

const LOGIN_MESSAGE = "You must be logged in to participate";
const ADMIN_PERMISSION_MESSAGE = "The Admin Team is not allowed to participate";
const HUNT_NOT_ACTIVE = "The hunt is not open right now";

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
        <ImportantInfoCard />
        {(() => {
          if (this.props.teamData.id === null) {
            return <MessageCard message={LOGIN_MESSAGE} />;
          }

          if (this.props.teamData.id === 0) {
            return <MessageCard message={ADMIN_PERMISSION_MESSAGE} />;
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

          return <MessageCard message={HUNT_NOT_ACTIVE} />;
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
