import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card, Typography, TextField } from "@material-ui/core";
import useStyles from "./useStyles";

const QuestionCard = ({ id, question, onCorrectAnswer, isCorrect }) => {
  const classes = useStyles();

  const [inputAnswer, setInputAnswer] = useState("");

  const onValueChange = e => {
    setInputAnswer(e.target.value);

    if (e.target.value.toLowerCase() === question.answer) {
      onCorrectAnswer(id);
    }
  };

  const getQuestionCardClassName = () =>
    isCorrect ? classes.correctCard : classes.card;

  return (
    <Card className={getQuestionCardClassName()} raised>
      <Typography>
        <span className={classes.pointValue}>
          {question.points === 1
            ? `${question.points} pt:`
            : `${question.points} pts:`}
        </span>{" "}
        {question.question}
      </Typography>
      <TextField
        type="text"
        margin="dense"
        className={classes.input}
        variant="filled"
        label="Answer"
        placeholder="Your answer..."
        disabled={isCorrect}
        value={isCorrect ? question.answer : inputAnswer}
        onChange={onValueChange}
      />
    </Card>
  );
};

QuestionCard.propTypes = {
  id: PropTypes.number.isRequired,
  question: PropTypes.shape({
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    points: PropTypes.number.isRequired
  }),
  onCorrectAnswer: PropTypes.func.isRequired,
  isCorrect: PropTypes.bool.isRequired
};

export default QuestionCard;
