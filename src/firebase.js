import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCD2kAuC0GedeN-bwCjcWEm6c8TrUZi2p8",
    authDomain: "robinhood-clone-2000.firebaseapp.com",
    projectId: "robinhood-clone-2000",
    storageBucket: "robinhood-clone-2000.appspot.com",
    messagingSenderId: "1039011497217",
    appId: "1:1039011497217:web:4109ce12ecc17e2e1d4700",
    measurementId: "G-QWCCNQNRB5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };