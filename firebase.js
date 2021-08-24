import firebase from "firebase";
import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAsRJUtMkA2SK2gEpXSX-GbJXgP5oyIoAQ",
  authDomain: "music-application-1d155.firebaseapp.com",
  databaseURL: "https://music-application-1d155-default-rtdb.firebaseio.com",
  projectId: "music-application-1d155",
  storageBucket: "music-application-1d155.appspot.com",
  messagingSenderId: "665357796075",
  appId: "1:665357796075:web:f06db248b63683a8f3b4ae",
  measurementId: "G-WL3BLDDZ9D",
};

!firebase.apps.length
  ? firebase.initializeApp(firebaseConfig).firestore()
  : firebase.app().firestore();

var db = firebase.firestore();

export default db
  