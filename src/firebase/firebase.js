import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyApVO0trDmyDnA_-XV8X_fXyYMKshJ9f3c",
    authDomain: "facebook-full-clone.firebaseapp.com",
    databaseURL: "https://facebook-full-clone.firebaseio.com",
    projectId: "facebook-full-clone",
    storageBucket: "facebook-full-clone.appspot.com",
    messagingSenderId: "466867676002",
    appId: "1:466867676002:web:7b034401ae3781a2b3c23b",
    measurementId: "G-S67L664M11"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;



