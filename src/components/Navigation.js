import React from "react";
import PropTypes from "prop-types";
import {
  Container,
  AppBar,
  Tabs,
  Tab,
  Typography,
  Box
} from "@material-ui/core";
import { GroupAdd, LocationSearching, InsertChart } from "@material-ui/icons";
import CreateTeam from "./CreateTeam";
import JoinTeam from "./JoinTeam";
import ScavengerHunt from "./ScavengerHunt";
import LeaderBoard from "./LeaderBoard";
import Timer from "./Timer";
import useStyles from "./useStyles";

const ADMIN_TEAM_ID = 0;

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
          <Tab label="Teams" icon={<GroupAdd />} {...a11yProps(0)} />
          <Tab
            label="The Hunt"
            icon={<LocationSearching />}
            {...a11yProps(1)}
          />
          <Tab label="Leader Board" icon={<InsertChart />} {...a11yProps(2)} />
        </Tabs>
      </AppBar>

      <Container>
        <Timer
          showButtons={props.teamData.id === ADMIN_TEAM_ID}
          isHuntActive={props.isHuntActive}
          toggleHuntActive={props.toggleHuntActive}
        />
      </Container>

      <Container>
        <TabPanel value={value} index={0}>
          {props.teamData.teamName ? (
            <h1>Welcome, {props.teamData.teamName}!</h1>
          ) : (
            <>
              <CreateTeam updateTeamData={props.updateTeamData} />
              <JoinTeam updateTeamData={props.updateTeamData} />
            </>
          )}
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ScavengerHunt
            teamData={props.teamData}
            isHuntActive={props.isHuntActive}
            updateTeamData={props.updateTeamData}
          />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <LeaderBoard />
        </TabPanel>
      </Container>
    </div>
  );
};

Navigation.propTypes = {
  teamData: PropTypes.shape({
    teamName: PropTypes.string.isRequired,
    id: PropTypes.number
  }).isRequired,
  updateTeamData: PropTypes.func.isRequired,
  isHuntActive: PropTypes.bool.isRequired,
  toggleHuntActive: PropTypes.func.isRequired
};

export default Navigation;
