import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import Container from "@material-ui/core/Container";
import CreateTeam from "./CreateTeam";
import JoinTeam from "./JoinTeam";
import ScavengerHunt from "./ScavengerHunt";
import LeaderBoard from "./LeaderBoard";
import LocationSearchingIcon from "@material-ui/icons/LocationSearching";
import InsertChartIcon from "@material-ui/icons/InsertChart";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const TabPanel = props => {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

const a11yProps = index => ({
  id: `simple-tab-${index}`,
  "aria-controls": `simple-tabpanel-${index}`
});

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  },
  appBar: {
    alignItems: "center"
  }
}));

const Navigation = props => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Teams" icon={<GroupAddIcon />} {...a11yProps(0)} />
          <Tab
            label="The Hunt"
            icon={<LocationSearchingIcon />}
            {...a11yProps(1)}
          />
          <Tab
            label="Leader Board"
            icon={<InsertChartIcon />}
            {...a11yProps(2)}
          />
        </Tabs>
      </AppBar>
      <Container>
        {props.teamName &&
          <h1>Welcome, {props.teamName}!</h1>
        }
        <TabPanel value={value} index={0}>
          <CreateTeam
            updateTeamData={props.updateTeamData}
          />
          <JoinTeam
            updateTeamData={props.updateTeamData}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ScavengerHunt />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <LeaderBoard />
        </TabPanel>
      </Container>
    </div>
  );
};

export default Navigation;
