import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAuOGXSpLA689jx7uwBI5cWe5hadV7N8KQ",
  authDomain: "shitty-radar.firebaseapp.com",
  databaseURL: "https://shitty-radar.firebaseio.com",
  projectId: "shitty-radar",
  storageBucket: "shitty-radar.appspot.com",
  messagingSenderId: "847867314513",
  appId: "1:847867314513:web:8a7acc464448428104d370"
});

const db = firebaseApp.firestore();
const doc = db.doc('/radars/MbtRBMksjOpdICaqr3Z4');

export {db, doc};
