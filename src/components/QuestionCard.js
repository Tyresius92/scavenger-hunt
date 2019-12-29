import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card, Container, Typography, TextField } from "@material-ui/core";
import useStyles from "./useStyles";

const QuestionCard = ({ id, question, onCorrectAnswer, isCorrect }) => {
  const classes = useStyles();

  const [inputAnswer, setInputAnswer] = useState("");

  const onValueChange = e => {
    setInputAnswer(e.target.value);

    if (e.target.value.toLowerCase() === question.answer) {
      onCorrectAnswer(id, question.points);
    }
  };

  const getQuestionCardClassName = () =>
    isCorrect ? classes.correctCard : classes.card;

  return (
    <Card className={getQuestionCardClassName()} raised>
      <Container>
        <Typography>
          <span className={classes.pointValue}>
            {question.points === 1
              ? `${question.points} pt:`
              : `${question.points} pts:`}
          </span>{" "}
          {question.question}
        </Typography>
        {question.image && (
          <img
            className={classes.questionImage}
            src={question.image}
            alt={question.alt}
          />
        )}
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
        {inputAnswer === "hint" && (
          <Typography>Hint: {question.hint}</Typography>
        )}
      </Container>
    </Card>
  );
};

QuestionCard.propTypes = {
  id: PropTypes.string.isRequired,
  question: PropTypes.shape({
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    points: PropTypes.number.isRequired,
    image: PropTypes.string,
    alt: PropTypes.string,
    hint: PropTypes.string.isRequired
  }),
  onCorrectAnswer: PropTypes.func.isRequired,
  isCorrect: PropTypes.bool.isRequired
};

export default QuestionCard;
