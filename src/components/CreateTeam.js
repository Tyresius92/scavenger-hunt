import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Card,
  CardHeader,
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
  textInput: {
    minWidth: 255
  }
});

const CreateTeam = props => {
  const classes = useStyles();

  const [teamName, setTeamName] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    props.firebase
      .teams()
      .once("value")
      .then(snapshot => {
        const isValidTeamName = !snapshot
          .val()
          .some(team => team.teamName === teamName);
        if (isValidTeamName) {
          props.firebase
            .numTeams()
            .once("value")
            .then(snapshot => {
              props.firebase.team(snapshot.val()).set({
                teamName,
                password,
                score: 0
              });
              return snapshot.val();
            })
            .then(id => {
              props.updateTeamData({teamName, id})
              props.firebase.numTeams().set(id + 1);
            })
            .catch(() => {
              // surface a message to the user
            });
        }
      });
  };
  return (
    <>
      <Card className={classes.card} raised>
        <CardHeader title="Create a team" />
        <TextField
          margin="dense"
          className={classes.textInput}
          variant="filled"
          label="Team Name"
          placeholder="Enter team name..."
          onChange={e => setTeamName(e.target.value)}
        />
        <TextField
          type="password"
          margin="dense"
          className={classes.textInput}
          variant="filled"
          label="Password"
          placeholder="Enter a password..."
          onChange={e => setPassword(e.target.value)}
        />
        {teamName.length > 0 && password.length > 0 && (
          <Button onClick={onSubmit}>Submit</Button>
        )}
      </Card>
    </>
  );
};

CreateTeam.propTypes = {
  firebase: PropTypes.shape({
    numTeams: PropTypes.func.isRequired,
    teams: PropTypes.func.isRequired,
    team: PropTypes.func.isRequired
  }).isRequired
};

export default withFirebase(CreateTeam);
