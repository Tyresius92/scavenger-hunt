import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";
import { withFirebase } from "./firebase";
import MessageCard from "./MessageCard";
import QuestionCard from "./QuestionCard";
import { questions } from "./questionsObject";
import ImportantInfoCard from "./ImportantInfoCard";
import UnlockBlockDialog from "./UnlockBlockDialog";
import useStyles from "./useStyles";

const LOGIN_MESSAGE = "You must be logged in to participate";
const ADMIN_PERMISSION_MESSAGE = "The Admin Team is not allowed to participate";
const HUNT_NOT_ACTIVE = "The hunt is not open right now";

const ScavengerHunt = props => {
  const classes = useStyles();

  const onCorrectAnswer = (questionId, points) => {
    props.firebase
      .setTeamInfoForNewCorrectAnswer(props.teamData.id, questionId, points)
      .then(newCorrectAnswers => props.updateCorrectAnswers(newCorrectAnswers));
  };

  const onUnlockNewBlockClick = blockName => {
    props.firebase
      .updateUnlockedBlocksArray(props.teamData.id, blockName)
      .then(newUnlockedBlocks => props.updateUnlockedBlocks(newUnlockedBlocks));
  };

  return (
    <>
      <ImportantInfoCard />
      {(() => {
        if (props.teamData.id === null) {
          return <MessageCard message={LOGIN_MESSAGE} />;
        }

        if (props.teamData.id === 0) {
          return <MessageCard message={ADMIN_PERMISSION_MESSAGE} />;
        }

        if (props.isHuntActive) {
          return (
            <>
              {Object.keys(questions).map(key => (
                <React.Fragment key={key}>
                  {props.unlockedBlocks.includes(key) && (
                    <>
                      <Typography
                        className={classes.blockTitle}
                        variant="h4"
                        paragraph={true}
                      >
                        {questions[key].blockTitle}
                      </Typography>
                      {questions[key].questions.map(question => (
                        <QuestionCard
                          id={question.id}
                          key={question.id}
                          question={question}
                          isCorrect={props.correctAnswers.includes(question.id)}
                          onCorrectAnswer={onCorrectAnswer}
                        />
                      ))}
                    </>
                  )}
                </React.Fragment>
              ))}
              <UnlockBlockDialog
                numCorrectAnswers={props.correctAnswers.length}
                unlockedBlocks={props.unlockedBlocks}
                onUnlockNewBlockClick={onUnlockNewBlockClick}
              />
            </>
          );
        }

        return <MessageCard message={HUNT_NOT_ACTIVE} />;
      })()}
    </>
  );
};

ScavengerHunt.propTypes = {
  firebase: PropTypes.object.isRequired,
  teamData: PropTypes.shape({
    id: PropTypes.number
  }),
  unlockedBlocks: PropTypes.arrayOf(PropTypes.string),
  correctAnswers: PropTypes.arrayOf(PropTypes.string),
  updateTeamData: PropTypes.func.isRequired,
  isHuntActive: PropTypes.bool.isRequired,
  updateCorrectAnswers: PropTypes.func.isRequired,
  updateUnlockedBlocks: PropTypes.func.isRequired
};

export default withFirebase(ScavengerHunt);
