import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAu5zGDqu4nKnpHhtKA6yxCNh3WK0DcRnA",
    authDomain: "winn-blog.firebaseapp.com",
    projectId: "winn-blog",
    storageBucket: "winn-blog.appspot.com",
    messagingSenderId: "1052997678667",
    appId: "1:1052997678667:web:a8c29d8ad6dca1b52dbfce"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp};
export default firebaseApp.firestore();