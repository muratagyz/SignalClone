import "firebase/firestore";
import "firebase/auth"
import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyBu3BWBEb6nChESySie0Hr44HlamBJsM_E",
  authDomain: "signalclone-29267.firebaseapp.com",
  projectId: "signalclone-29267",
  storageBucket: "signalclone-29267.appspot.com",
  messagingSenderId: "112677950811",
  appId: "1:112677950811:web:959c1a5cd1216d93c2f67e",
  measurementId: "G-YYJ311PTEJ",
};

let app;
if(firebase.apps.length === 0)
{
  app = firebase.initializeApp(firebaseConfig);
}
else {
    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export  { db, auth };
