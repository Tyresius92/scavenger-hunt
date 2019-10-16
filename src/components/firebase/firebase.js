import app from 'firebase/app';
import 'firebase/database';

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
    team: {
      id: int,
      name: string,
      password: string,
      questionsAnswer: Object of IDs pointing to booleans
    }
  */
  team = teamId => this.db.ref(`teams/${teamId}`);

// getTeamScore = questionsAnswered =>
//   questionsAnswered.reduce((acc, question) => {
//     return acc += question.score
//   }, 0)

  teams = () => this.db.ref('teams');

// iterator to track new team ID
  numTeams = () => this.db.ref('numTeams')



}

export default Firebase;
