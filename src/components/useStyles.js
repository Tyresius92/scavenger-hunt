import { makeStyles } from "@material-ui/core";

export const stylesObject = theme => ({
  card: {
    width: "100%",
    paddingBottom: 10,
    marginBottom: "20px",
    textAlign: "center"
  },
  correctCard: {
    width: "100%",
    paddingBottom: 10,
    marginBottom: "20px",
    textAlign: "center",
    border: `${theme.palette.primary.main} 3px solid`
  },
  blockTitle: {
    textAlign: "center",
    color: theme.palette.text.primary
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
  dialogCard: {
    width: "100%",
    textAlign: "center"
  },
  dialogTitle: {
    margin: "3px"
  },
  dialogButton: {
    margin: "5px",
    marginBottom: "8px",
    width: "80%"
  },
  tabContainer: {
    minHeight: "100%"
  },
  root: {
    flexGrow: 1,
    minHeight: "100vh",
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
    backgroundColor: theme.palette.primary.main
  },
  myLeaderBoardLineText: {
    width: "100%",
    fontWeight: "bold"
  },
  leaderLine: {
    width: "100%"
  },
  questionImage: {
    width: "80%",
    maxWidth: "15rem"
  },
  score: {
    float: "right"
  }
});

export default makeStyles(stylesObject);
