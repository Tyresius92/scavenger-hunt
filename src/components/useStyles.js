import { makeStyles } from "@material-ui/core";

export const stylesObject = theme => ({
  card: {
    width: "100%",
    padding: 10,
    marginBottom: "20px",
    textAlign: "center"
  },
  correctCard: {
    width: "100%",
    padding: 10,
    marginBottom: "20px",
    textAlign: "center",
    border: "green 3px solid"
  },
  pointValue: {
    fontWeight: "bold"
  },
  formControl: {
    width: "80%"
  },
  input: {
    width: "100%"
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  appBar: {
    alignItems: "center"
  },
  errorMessage: {
    backgroundColor: theme.palette.error.dark,
    width: "100%"
  },
  myLeaderBoardLineItem: {
    width: "100%",
    fontWeight: "bold",
    backgroundColor: "palegreen"
  },
  myLeaderBoardLineText: {
    width: "100%",
    fontWeight: "bold"
  },
  leaderLine: {
    width: "100%"
  },
  score: {
    float: "right"
  }
});

export default makeStyles(stylesObject);
