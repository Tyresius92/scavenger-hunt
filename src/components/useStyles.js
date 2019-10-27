import { makeStyles } from "@material-ui/core";

export const stylesObject = theme => ({
  card: {
    width: "100%",
    minHeight: 200,
    padding: 10,
    marginBottom: "20px",
    textAlign: "center"
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
  timer: {
    flexGrow: 1,
    textAlign: "center"
  },
  clock: {
    color: "black"
  },
  errorMessage: {
    backgroundColor: theme.palette.error.dark,
    width: "100%"
  }
});

export default makeStyles(stylesObject);
