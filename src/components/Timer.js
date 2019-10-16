import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

const formatClock = time => {
  const minutes = Math.floor(time / 60);
  const seconds = (time % 60) + "";

  return `${minutes}:${seconds.padStart(2, "0")}`;
};

const MAX_TIME = 3600;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  timer: {
    flexGrow: 1,
    textAlign: "center",
    position: "fixed",
    width: "100%",
    bottom: 20
  },
  clock: {
    color: "black"
  }
}));

const Timer = ({ showButtons }) => {
  const classes = useStyles();
  const [time, setTime] = useState(MAX_TIME);
  const [isActive, setIsActive] = useState(false);

  const toggle = () => {
    setIsActive(!isActive);
  };

  const reset = () => {
    setTime(MAX_TIME);
    setIsActive(false);
  };

  useEffect(() => {
    let interval = null;
    if (isActive && time !== 0) {
      interval = setInterval(() => {
        setTime(time => time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setIsActive(false);
      setTime("Time's up! Please return to the rendezvous for scoring.");
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  return (
    <div className={classes.timer}>
      <h1 className={classes.clock}>
        {typeof time === "number" ? formatClock(time) : time}
      </h1>
      {showButtons && (
        <div className="row">
          <button
            className={`button button-primary button-primary-${
              isActive ? "active" : "inactive"
            }`}
            onClick={toggle}
          >
            {isActive ? "Pause" : "Start"}
          </button>
          <button className="button" onClick={reset}>
            Reset
          </button>
        </div>
      )}
    </div>
  );
};

Timer.propTypes = {
  showButtons: PropTypes.bool.isRequired
};

export default Timer;
