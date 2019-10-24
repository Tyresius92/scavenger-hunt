import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import * as moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import { withFirebase } from "./firebase";

const formatClock = time => {
  const minutes = Math.floor(time / 60 / 1000);
  const seconds = (time % 60) + "";

  return `${minutes}:${seconds.padStart(2, "0")}`;
};

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

const Timer = ({ firebase, showButtons, isHuntActive, toggleHuntActive }) => {
  const classes = useStyles();
  const [time, setTime] = useState(0);
  const [endTime, setEndTime] = useState(0);

  const toggle = () => {
    const endTime = moment()
      .add(1, "hours")
      .unix();
    toggleHuntActive(true);
    firebase.endTime().set(endTime);
  };

  useEffect(() => {
    let interval = null;

    firebase
      .endTime()
      .once("value")
      .then(snapshot => {
        setEndTime(snapshot.val());
      });

    const timeRemaining = moment(endTime).diff(moment().unix());

    if (isHuntActive && timeRemaining > 0) {
      interval = setInterval(() => {
        setTime(timeRemaining);
      }, 1000);
    } else if (isHuntActive && timeRemaining <= 0) {
      toggleHuntActive(false);
      setTime("Time's up! Please return to the rendezvous for scoring.");
    }

    return () => clearInterval(interval);
  }, [time, endTime, isHuntActive, showButtons, firebase, toggleHuntActive]);

  return (
    <div className={classes.timer}>
      <h1 className={classes.clock}>
        {typeof time === "number" ? formatClock(time) : time}
      </h1>
      {showButtons && !isHuntActive && (
        <div className="row">
          <button
            className={"button button-primary button-primary-active"}
            onClick={toggle}
          >
            Start
          </button>
        </div>
      )}
    </div>
  );
};

Timer.propTypes = {
  showButtons: PropTypes.bool.isRequired,
  isHuntActive: PropTypes.bool.isRequired,
  toggleHuntActive: PropTypes.func.isRequired,
  firebase: PropTypes.shape({
    endTime: PropTypes.func.isRequired
  }).isRequired
};

export default withFirebase(Timer);
