import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card, Typography, TextField } from "@material-ui/core";
import useStyles from "./useStyles";

const QuestionCard = ({ id, question, onCorrectAnswer, isCorrect }) => {
  //console.log(question);

  const classes = useStyles();

  const [inputAnswer, setInputAnswer] = useState("");

  const onValueChange = e => {
    setInputAnswer(e.target.value);

    console.log(e.target.value);

    if (e.target.value.toLowerCase() == question.answer) {
      console.log("made it here");

      onCorrectAnswer(id);
    }
  };

  return (
    <Card className={isCorrect ? classes.correctCard : classes.card} raised>
      <Typography>{question.question}</Typography>
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

export default QuestionCard;
