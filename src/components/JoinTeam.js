import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Card,
  CardHeader,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from "@material-ui/core";
import { withFirebase } from "./firebase";
import useStyles from "./useStyles";
import ErrorMessage from "./ErrorMessage";

const INCORRECT_PASSWORD_MESSAGE = "Incorrect password. Please try again.";

const JoinTeam = ({ firebase, updateTeamData, updateCorrectAnswers }) => {
  const classes = useStyles();

  const [selectedTeamId, setselectedTeamId] = useState(0);
  const [password, setPassword] = useState("");
  const [teamData, setTeamData] = useState([]);
  const [errMessage, setErrorMsg] = useState("");

  useEffect(() => {
    firebase.getAutoUpdatingTeamList(teamData => {
      const teamsList = teamData.map(({ teamName, password }, index) => ({
        teamName,
        password,
        id: index
      }));

      setTeamData(teamsList);
    });
  }, [firebase]);

  const onSubmit = e => {
    e.preventDefault();

    const teamToJoin = teamData.find((team, index) => index === selectedTeamId);

    if (teamToJoin.password === password) {
      updateTeamData({
        teamName: teamToJoin.teamName,
        id: teamToJoin.id
      });

      firebase.getAutoUpdatingCorrectAnswersArray(
        teamToJoin.id,
        correctAnswers => updateCorrectAnswers(correctAnswers || [])
      );

      setselectedTeamId(0);
      setPassword("");
    } else {
      setErrorMsg(INCORRECT_PASSWORD_MESSAGE);
    }
  };

  const onTeamSelectChange = e => {
    setErrorMsg("");
    setselectedTeamId(e.target.value);
  };

  const onValueChange = e => {
    setErrorMsg("");
    setPassword(e.target.value);
  };

  return (
    <>
      {!!errMessage.length && (
        <ErrorMessage message={INCORRECT_PASSWORD_MESSAGE} />
      )}
      <Card className={classes.card} raised>
        <CardHeader title="Join a team" />
        <form onSubmit={onSubmit}>
          <FormControl
            className={classes.formControl}
            variant="filled"
            margin="dense"
          >
            <InputLabel htmlFor="team-name-input">Team Name</InputLabel>
            <Select
              className={classes.input}
              value={selectedTeamId}
              onChange={onTeamSelectChange}
              inputProps={{
                name: "teamName",
                id: "team-name-input"
              }}
            >
              {teamData.map(({ teamName, id }) => (
                <MenuItem key={id} value={id}>
                  {teamName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <TextField
              type="password"
              margin="dense"
              className={classes.input}
              variant="filled"
              label="Password"
              placeholder="Enter a password..."
              value={password}
              onChange={onValueChange}
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <Button
              className={classes.input}
              variant="contained"
              color="primary"
              size="large"
              disabled={password === ""}
              type="submit"
            >
              Submit
            </Button>
          </FormControl>
        </form>
      </Card>
    </>
  );
};

JoinTeam.propTypes = {
  firebase: PropTypes.object.isRequired,
  updateTeamData: PropTypes.func.isRequired,
  updateCorrectAnswers: PropTypes.func.isRequired
};

export default withFirebase(JoinTeam);
