import React from "react";
import PropTypes from "prop-types";
import * as moment from "moment";
import { Button, Card, CardHeader, withStyles } from "@material-ui/core";
import { withFirebase } from "./firebase";
import { stylesObject } from "./useStyles";

const formatClock = time => {
  const MINUTES_PER_HOUR = 60;
  const SECONDS_PER_MINUTE = 60;
  const DIGITS_TO_SHOW = 2;

  const minutes = Math.floor(time / MINUTES_PER_HOUR);
  const seconds = (time % SECONDS_PER_MINUTE) + "";

  return `Time remaining: ${minutes}:${seconds.padStart(DIGITS_TO_SHOW, "0")}`;
};

const HUNT_UNSTARTED_FLAG = -1;

const HUNT_NOT_STARTED = "The hunt has not begun";

const TIME_UP_MESSAGE =
  "Time's up! Please return to the rendezvous for scoring.";

class Timer extends React.Component {
  state = {
    timeRemaining: 0,
    endTime: HUNT_UNSTARTED_FLAG
  };

  startTimer = () => {
    const newEndTime = moment()
      .add(1, "hours")
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

  getTimerValue = () => {
    if (this.state.endTime === HUNT_UNSTARTED_FLAG) {
      return HUNT_NOT_STARTED;
    }

    if (this.state.timeRemaining <= 0) {
      return TIME_UP_MESSAGE;
    }

    return formatClock(this.state.timeRemaining);
  };

  componentDidMount = () => {
    /*
     * argument to getAutoUpdatingEndTime is a callback which is called when
     * there is a change in the value in firebase
     */
    this.props.firebase.getAutoUpdatingEndTime(endTime => {
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
      <Card className={this.props.classes.card} raised>
        <CardHeader title={this.getTimerValue()} />

        {this.props.showButtons && !this.props.isHuntActive && (
          <div className="row">
            <Button
              variant="contained"
              color="primary"
              className={"button button-primary button-primary-active"}
              onClick={this.startTimer}
            >
              Start the game
            </Button>
          </div>
        )}
      </Card>
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
