import "firebase/firestore";
import "firebase/auth"
import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
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
