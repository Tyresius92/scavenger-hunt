import React from "react";
import { Card, CardHeader, List, ListItem } from "@material-ui/core";
import useStyles from "./useStyles";

const ImportantInfoCard = () => {
  const classes = useStyles();

  return (
    <Card raised className={classes.card}>
      <CardHeader title="Da Rules" />
      <List>
        <ListItem>Your progress is saved automatically.</ListItem>
        <ListItem>
          Questions that have been answered correctly will be outlined in green.
        </ListItem>
        <ListItem>
          Refreshing the page will log you out. Please log in again to resume
          your game from where you left off. There is no way to recover your
          password.
        </ListItem>
        <ListItem>
          You are allowed to use museum resources, including maps, brochures,
          and asking questions of the staff. You are NOT allowed to use Google.
        </ListItem>
      </List>
    </Card>
  );
};

export default ImportantInfoCard;
