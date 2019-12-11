import React from "react";
import { Card, CardHeader, List, ListItem } from "@material-ui/core";
import useStyles from "./useStyles";

const SignUpInstructionsCard = () => {
  const classes = useStyles();

  return (
    <Card raised className={classes.card}>
      <CardHeader title="Instructions" />
      <List>
        <ListItem>
          Your scavenger hunt coordinator should join the Admin Team. Only the
          Admin Team may start the game.
        </ListItem>
        <ListItem>
          All other players should either create a team, or join an existing
          one, using the login credentials supplied by the person who created
          your team.
        </ListItem>
        <ListItem>
          Refreshing the page will log you out. Please log in again to resume
          your game from where you left off. There is no way to recover your
          password.
        </ListItem>
      </List>
    </Card>
  );
};

export default SignUpInstructionsCard;
