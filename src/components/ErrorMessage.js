import React from "react";
import PropTypes from "prop-types";
import { Snackbar, SnackbarContent } from "@material-ui/core";
import useStyles from "./useStyles";

const ErrorMessage = props => {
  const classes = useStyles();

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left"
      }}
      open={!!props.message}
    >
      <SnackbarContent
        className={classes.errorMessage}
        aria-describedby="client-snackbar"
        message={<span className={classes.message}>{props.message}</span>}
      />
    </Snackbar>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired
};

export default ErrorMessage;
