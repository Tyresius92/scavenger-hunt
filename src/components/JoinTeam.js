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
  TextField,
  makeStyles
} from "@material-ui/core";
import { withFirebase } from "./firebase";

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    minHeight: 200,
    padding: 10
  },
  input: {
    minWidth: 255
  }
});

const JoinTeam = ({ firebase, updateTeamData }) => {
  const classes = useStyles();

  const [selectedTeamId, setselectedTeamId] = useState(0);
  const [password, setPassword] = useState("");
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    firebase.teams().on("value", snapshot => {
      const teamsList = snapshot.val().map(({ teamName, password }, index) => ({
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
      setselectedTeamId(0);
      setPassword("");
    }
  };
  return (
    <>
      <Card className={classes.card} raised>
        <CardHeader title="Join a team" />
        <form onSubmit={onSubmit}>
          <FormControl variant="filled" margin="dense">
            <InputLabel htmlFor="team-name-input">Team Name</InputLabel>
            <Select
              className={classes.input}
              value={selectedTeamId}
              onChange={e => setselectedTeamId(e.target.value)}
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
          <FormControl>
            <TextField
              type="password"
              margin="dense"
              className={classes.input}
              variant="filled"
              label="Password"
              placeholder="Enter a password..."
              onChange={e => setPassword(e.target.value)}
            />
            <Button disabled={password === ""} type="submit">
              Submit
            </Button>
          </FormControl>
        </form>
      </Card>
    </>
  );
};

JoinTeam.propTypes = {
  firebase: PropTypes.shape({
    numTeams: PropTypes.func.isRequired,
    teams: PropTypes.func.isRequired,
    team: PropTypes.func.isRequired
  }).isRequired,
  updateTeamData: PropTypes.func.isRequired
};

export default withFirebase(JoinTeam);
