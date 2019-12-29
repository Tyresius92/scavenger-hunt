import React from "react";
import PropTypes from "prop-types";
import { Card, CardHeader } from "@material-ui/core";
import useStyles from "./useStyles";

const MessageCard = ({ message }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card} raised>
      <CardHeader title={message} />
    </Card>
  );
};

MessageCard.propTypes = {
  message: PropTypes.string.isRequired
};

export default MessageCard;
