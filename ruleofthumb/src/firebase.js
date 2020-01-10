// import * as firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCHwTsHefZcffW-U-ooYa-KD0eT5FYGbKY",
  authDomain: "pruebazemoga.firebaseapp.com",
  databaseURL: "https://pruebazemoga.firebaseio.com",
  projectId: "pruebazemoga",
  storageBucket: "pruebazemoga.appspot.com",
  messagingSenderId: "117458620547",
  appId: "1:117458620547:web:826ed79b4493ab6d614bb6",
  measurementId: "G-GQL7FPRPGN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const databaseRef = firebase.database().ref();
