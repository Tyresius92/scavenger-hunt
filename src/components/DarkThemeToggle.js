import React from "react";
import PropTypes from "prop-types";
import { Card, CardHeader, Switch } from "@material-ui/core";
import useStyles from "./useStyles";

const DarkThemeToggle = props => {
  const classes = useStyles();
  return (
    <Card raised className={classes.card}>
      <CardHeader title="Dark Theme" />
      <Switch checked={props.isDarkTheme} onChange={props.toggleDarkTheme} />
    </Card>
  );
};

DarkThemeToggle.propTypes = {
  isDarkTheme: PropTypes.bool.isRequired,
  toggleDarkTheme: PropTypes.func.isRequired
};

export default DarkThemeToggle;
