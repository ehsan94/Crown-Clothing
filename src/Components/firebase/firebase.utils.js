import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAYX9W3WvhIlXSLWQ-vWoFD8HQvJkxSgAo",
  authDomain: "api-project-298171342574.firebaseapp.com",
  databaseURL: "https://api-project-298171342574.firebaseio.com",
  projectId: "api-project-298171342574",
  storageBucket: "api-project-298171342574.appspot.com",
  messagingSenderId: "298171342574",
  appId: "1:298171342574:web:110269ec7da45d74905dff"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;