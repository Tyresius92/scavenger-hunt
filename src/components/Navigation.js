import React from "react";
import PropTypes from "prop-types";
import { Container, AppBar, Tabs, Tab } from "@material-ui/core";
import { GroupAdd, LocationSearching, InsertChart } from "@material-ui/icons";
import SignUpInstructionsCard from "./SignUpInstructionsCard";
import CreateTeam from "./CreateTeam";
import JoinTeam from "./JoinTeam";
import ScavengerHunt from "./ScavengerHunt";
import LeaderBoard from "./LeaderBoard";
import TabPanel from "./TabPanel";
import MessageCard from "./MessageCard";
import Timer from "./Timer";
import DarkThemeToggle from "./DarkThemeToggle";
import useStyles from "./useStyles";

const ADMIN_TEAM_ID = 0;

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
          aria-label="main navigation tabs"
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

      <Container className={classes.tabContainer}>
        <TabPanel value={value} index={0}>
          <Timer
            showButtons={props.teamData.id === ADMIN_TEAM_ID}
            isHuntActive={props.isHuntActive}
            toggleHuntActive={props.toggleHuntActive}
          />
          <DarkThemeToggle
            isDarkTheme={props.isDarkTheme}
            toggleDarkTheme={props.toggleDarkTheme}
          />
          {props.teamData.teamName ? (
            <MessageCard message={`Welcome, ${props.teamData.teamName}!`} />
          ) : (
            <>
              <SignUpInstructionsCard />
              <CreateTeam
                updateTeamData={props.updateTeamData}
                updateCorrectAnswers={props.updateCorrectAnswers}
                updateUnlockedBlocks={props.updateUnlockedBlocks}
              />
              <JoinTeam
                updateTeamData={props.updateTeamData}
                updateCorrectAnswers={props.updateCorrectAnswers}
                updateUnlockedBlocks={props.updateUnlockedBlocks}
              />
            </>
          )}
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Timer
            showButtons={props.teamData.id === ADMIN_TEAM_ID}
            isHuntActive={props.isHuntActive}
            toggleHuntActive={props.toggleHuntActive}
          />
          <ScavengerHunt
            teamData={props.teamData}
            isHuntActive={props.isHuntActive}
            updateTeamData={props.updateTeamData}
            correctAnswers={props.correctAnswers}
            unlockedBlocks={props.unlockedBlocks}
            updateCorrectAnswers={props.updateCorrectAnswers}
            updateUnlockedBlocks={props.updateUnlockedBlocks}
          />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Timer
            showButtons={props.teamData.id === ADMIN_TEAM_ID}
            isHuntActive={props.isHuntActive}
            toggleHuntActive={props.toggleHuntActive}
          />
          <LeaderBoard loggedInTeam={props.teamData.teamName} />
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
  correctAnswers: PropTypes.arrayOf(PropTypes.string),
  updateTeamData: PropTypes.func.isRequired,
  isHuntActive: PropTypes.bool.isRequired,
  toggleHuntActive: PropTypes.func.isRequired,
  updateCorrectAnswers: PropTypes.func.isRequired,
  isDarkTheme: PropTypes.bool.isRequired,
  toggleDarkTheme: PropTypes.func.isRequired,
  updateUnlockedBlocks: PropTypes.func.isRequired,
  unlockedBlocks: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default Navigation;
