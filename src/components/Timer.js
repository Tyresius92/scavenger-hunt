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

const Timer = props => {
  const classes = useStyles();
  const [time, setTime] = useState(0);
  const [endTime, setEndTime] = useState(0)
  const [isActive, setIsActive] = useState(false);

  const toggle = () => {
    const endTime = moment().add(1, "hours").unix()
    props.toggleHuntActive(true)
    props.firebase
      .endTime()
      .set(endTime)
  };

  useEffect(() => {
    let interval = null;

    props.firebase
      .endTime()
      .once("value")
      .then(snapshot => {
        console.log(snapshot.val())
        setEndTime(snapshot.val())
      })

    const timeRemaining = moment().diff(endTime);
    console.log(timeRemaining)
    if (props.isHuntActive && timeRemaining > 0) {
      interval = setInterval(() => {
      setTime(timeRemaining);
      }, 1000);
    } else if (props.isHuntActive && timeRemaining <= 0) {
      props.toggleHuntActive(false);
      setTime("Time's up! Please return to the rendezvous for scoring.");
    }

    return () => clearInterval(interval);
  }, [isActive, time, endTime]);

  return (
    <div className={classes.timer}>
      <h1 className={classes.clock}>
        {typeof time === "number" ? formatClock(time) : time}
      </h1>
      {props.showButtons && !props.isHuntActive && (
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
  showButtons: PropTypes.bool.isRequired
};

export default withFirebase(Timer);
