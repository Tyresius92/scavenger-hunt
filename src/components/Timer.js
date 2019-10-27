import React from "react";
import PropTypes from "prop-types";
import * as moment from "moment";
import { Button, withStyles } from "@material-ui/core";
import { withFirebase } from "./firebase";
import { stylesObject } from "./useStyles";

const formatClock = time => {
  const MINUTES_PER_HOUR = 60;
  const SECONDS_PER_MINUTE = 60;
  const DIGITS_TO_SHOW = 2;

  const minutes = Math.floor(time / MINUTES_PER_HOUR);
  const seconds = (time % SECONDS_PER_MINUTE) + "";

  return `${minutes}:${seconds.padStart(DIGITS_TO_SHOW, "0")}`;
};

const timeUpMessage = "Time's up! Please return to the rendezvous for scoring.";

class Timer extends React.Component {
  state = {
    timeRemaining: 0,
    endTime: 0
  };

  startTimer = () => {
    const newEndTime = moment()
      .add(1, "minutes")
      .unix();
    this.props.toggleHuntActive(true);

    this.props.firebase.setEndTime(newEndTime);

    this.timer = this.setUpTimerIncrementer(newEndTime);
  };

  setUpTimerIncrementer = endTime =>
    setInterval(() => {
      const timeRemaining = moment(endTime).diff(moment().unix());

      if (timeRemaining > 0) {
        this.setState({
          timeRemaining: timeRemaining
        });
      } else {
        this.setState({
          timeRemaining: 0
        });
        this.props.toggleHuntActive(false);
        clearInterval(this.timer);
      }
    });

  componentDidMount = () => {
    this.props.firebase
      .endTime()
      .once("value")
      .then(snapshot => {
        const endTime = snapshot.val();
        const timeRemaining = moment(endTime).diff(moment().unix());

        if (timeRemaining > 0) {
          this.props.toggleHuntActive(true);
          this.timer = this.setUpTimerIncrementer(endTime);
        }

        this.setState({
          endTime,
          timeRemaining
        });
      });
  };

  render() {
    return (
      <div className={this.props.classes.timer}>
        <h1 className={this.props.classes.clock}>
          {this.state.timeRemaining <= 0
            ? timeUpMessage
            : formatClock(this.state.timeRemaining)}
        </h1>
        {this.props.showButtons && !this.props.isHuntActive && (
          <div className="row">
            <Button
              variant="contained"
              color="primary"
              className={"button button-primary button-primary-active"}
              onClick={this.startTimer}
            >
              Start
            </Button>
          </div>
        )}
      </div>
    );
  }
}

Timer.propTypes = {
  showButtons: PropTypes.bool.isRequired,
  isHuntActive: PropTypes.bool.isRequired,
  toggleHuntActive: PropTypes.func.isRequired,
  firebase: PropTypes.object.isRequired,
  classes: PropTypes.object
};

Timer.defaultProps = {
  classes: {}
};

export default withStyles(stylesObject)(withFirebase(Timer));
