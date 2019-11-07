import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Card,
  CardHeader,
  TextField,
  FormControl
} from "@material-ui/core";
import ErrorMessage from "./ErrorMessage";
import { withFirebase } from "./firebase";
import useStyles from "./useStyles";

const INTERNAL_SERVER_ERROR_MSG =
  "Internal Server Error. Please use provided paper sheet";

const TEAM_NAME_TAKEN_MSG = "Team name taken, please choose another";

const CreateTeam = props => {
  const classes = useStyles();

  const [teamName, setTeamName] = useState("");
  const [password, setPassword] = useState("");
  const [errMessage, setErrorMsg] = useState("");

  const onSubmit = event => {
    event.preventDefault();

    props.firebase.getTeamsOnce(teams => {
      const isValidTeamName = !teams.some(team => team.teamName === teamName);

      if (isValidTeamName) {
        props.firebase
          .getNumTeamsOnce(numTeams => {
            const initialDataObj = {
              teamName,
              password,
              score: 0,
              correctAnswers: [] // still needed as shape is different in db
            };

            props.firebase.setTeamInfoForId(numTeams, initialDataObj);

            return numTeams;
          })
          .then(id => {
            // store the team im logged in as in local state
            props.updateTeamData({ teamName, id });

            /*
             * second argument to this function is a callback that is called
             * when correctanswers changes in firebase
             */
            props.firebase.getAutoUpdatingCorrectAnswersArray(
              id,
              correctAnswers => {
                props.updateCorrectAnswers(correctAnswers || []);
              }
            );

            // update the number of teams in the database
            props.firebase.setNumTeams(id + 1);
          })
          .catch(() => setErrorMsg(INTERNAL_SERVER_ERROR_MSG));
      } else {
        setErrorMsg(TEAM_NAME_TAKEN_MSG);
      }
    });
  };

  const onTeamNameChange = e => {
    setErrorMsg("");
    setTeamName(e.target.value);
  };

  const onPasswordChange = e => {
    setErrorMsg("");
    setPassword(e.target.value);
  };

  return (
    <>
      {!!errMessage.length && <ErrorMessage message={errMessage} />}
      <Card className={classes.card} raised>
        <CardHeader title="Create a team" />
        <form onSubmit={onSubmit}>
          <FormControl className={classes.formControl}>
            <TextField
              variant="filled"
              margin="dense"
              className={classes.input}
              label="Team Name"
              placeholder="Enter team name..."
              value={teamName}
              onChange={onTeamNameChange}
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <TextField
              variant="filled"
              margin="dense"
              type="password"
              className={classes.input}
              label="Password"
              placeholder="Enter a password..."
              value={password}
              onChange={onPasswordChange}
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <Button
              className={classes.input}
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              disabled={!teamName.length || !password.length}
            >
              Submit
            </Button>
          </FormControl>
        </form>
      </Card>
    </>
  );
};

CreateTeam.propTypes = {
  firebase: PropTypes.object.isRequired,
  updateTeamData: PropTypes.func.isRequired,
  updateCorrectAnswers: PropTypes.func.isRequired
};

export default withFirebase(CreateTeam);
