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
    // update team data in db
    // push id into team/$id$/correctAnswers

    this.props.firebase
      .updateCorrectAnswersArray(this.props.teamData.id, questionId)
      .then(newCorrectAnswers => {
        console.log(newCorrectAnswers);

        this.props.updateTeamData({
          ...this.props.teamData,
          correctAnswers: newCorrectAnswers
        });
      });
  };

  render() {
    //console.log(this.state.questionsList);
    console.log(this.props);

    return (
      <>
        {/* TODO: Remove the ! from below*/}
        {this.props.isHuntActive && this.props.teamData.id ? (
          <>
            {this.state.questionsList.map((question, index) => (
              <QuestionCard
                id={index}
                key={`question_${index}`}
                question={question}
                isCorrect={this.props.teamData.correctAnswers.includes(index)}
                onCorrectAnswer={this.onCorrectAnswer}
              />
            ))}
          </>
        ) : (
          <Typography>Please log in</Typography>
        )}
      </>
    );
  }
}

export default withFirebase(ScavengerHunt);
