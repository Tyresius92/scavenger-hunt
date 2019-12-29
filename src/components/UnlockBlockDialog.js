import React from "react";
import PropTypes from "prop-types";
import { questions } from "./questionsObject";
import { Button, Card, Dialog, Typography } from "@material-ui/core";
import useStyles from "./useStyles";

const getLockedBlocks = (allBlocks, unlockedBlocks) =>
  allBlocks.filter(element => !unlockedBlocks.includes(element));

const UnlockBlockDialog = props => {
  const classes = useStyles();

  return (
    <Dialog
      open={props.numCorrectAnswers / 3 === props.unlockedBlocks.length - 1}
      disableEscapeKeyDown
      disableBackdropClick
    >
      <Card className={classes.dialogCard}>
        <Typography className={classes.dialogTitle} variant="h5">
          Select a question block to unlock
        </Typography>
        {getLockedBlocks(Object.keys(questions), props.unlockedBlocks).map(
          blockName => {
            const blockTitle = questions[blockName].blockTitle;
            const pointsInBlock = questions[blockName].questions.reduce(
              (acc, question) => acc + question.points,
              0
            );
            const blockQuestionCount = questions[blockName].questions.length;

            return (
              <Button
                key={blockName}
                className={classes.dialogButton}
                variant="contained"
                color="primary"
                size="large"
                onClick={() => props.onUnlockNewBlockClick(blockName)}
              >
                {blockTitle} ({blockQuestionCount} Qs; {pointsInBlock} pts)
              </Button>
            );
          }
        )}
      </Card>
    </Dialog>
  );
};

UnlockBlockDialog.propTypes = {
  numCorrectAnswers: PropTypes.number.isRequired,
  unlockedBlocks: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onUnlockNewBlockClick: PropTypes.func.isRequired
};

export default UnlockBlockDialog;
