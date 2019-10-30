import app from "firebase/app";
import "firebase/database";

const config = {
  apiKey: "AIzaSyDP2cSfnn-Af3T-GkSo-ipCsQkOtcmIC_E",
  authDomain: "scavenger-hunt-307d0.firebaseapp.com",
  databaseURL: "https://scavenger-hunt-307d0.firebaseio.com",
  projectId: "scavenger-hunt-307d0",
  storageBucket: "scavenger-hunt-307d0.appspot.com",
  messagingSenderId: "16623455637",
  appId: "1:16623455637:web:76b9a1b81581d55a583a9c",
  measurementId: "G-5WNFS6534J"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.db = app.database();
  }

  // *** Team API ***

  /*
   * team: {
   *   id: int,
   *   name: string,
   *   password: string,
   *   questionsAnswer: Object of IDs pointing to booleans
   * }
   */
  team = teamId => this.db.ref(`teams/${teamId}`);

  getTeamWithIdOnce = (teamId, callback) =>
    this.team(teamId)
      .once("value")
      .then(snapshot => callback(snapshot));

  getAutoUpdatingTeamData = (teamId, callback) =>
    this.team(teamId).on("value", snapshot => {
      const teamData = snapshot.val();
      callback(teamData);
    });

  setTeamInfoForId = (teamId, newValue) => this.team(teamId).set(newValue);

  updateCorrectAnswersArray = (teamId, newCorrectQuestionId) =>
    this.db
      .ref(`teams/${teamId}/correctAnswers`)
      .once("value")
      .then(snapshot => {
        const prevCorrectAnswers = snapshot.val() || [];
        const newCorrectAnswers = [...prevCorrectAnswers, newCorrectQuestionId];

        this.db.ref(`teams/${teamId}/correctAnswers`).set(newCorrectAnswers);

        return newCorrectAnswers;
      });

  /*
   * getTeamScore = questionsAnswered =>
   *   questionsAnswered.reduce((acc, question) => {
   *     return acc += question.score
   *   }, 0)
   */

  teams = () => this.db.ref("teams");

  getAutoUpdatingTeamList = callback =>
    this.teams().on("value", snapshot => {
      const teamsList = snapshot.val();
      callback(teamsList);
    });

  getTeamsOnce = callback =>
    this.teams()
      .once("value")
      .then(snapshot => callback(snapshot.val()));

  // iterator to track new team ID
  numTeams = () => this.db.ref("numTeams");

  getNumTeamsOnce = callback =>
    this.numTeams()
      .once("value")
      .then(snapshot => {
        const numTeams = snapshot.val();
        return callback(numTeams);
      });

  setNumTeams = newValue => this.numTeams().set(newValue);

  // end time for timer
  endTime = () => this.db.ref("endTime");

  getAutoUpdatingEndTime = callback =>
    this.endTime().on("value", snapshot => callback(snapshot));

  setEndTime = newValue => this.endTime().set(newValue);

  questions = () => this.db.ref("questions");

  getQuestionsOnce = callback =>
    this.questions()
      .once("value")
      .then(snapshot => {
        const questionsList = snapshot.val();
        return callback(questionsList);
      });
}

export default Firebase;
