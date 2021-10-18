import firebase from "firebase";
import "firebase/firestore";


const firebaseConfig = {
 //from your dashboard
};

!firebase.apps.length
  ? firebase.initializeApp(firebaseConfig).firestore()
  : firebase.app().firestore();

var db = firebase.firestore();

export default db
  
