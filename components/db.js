import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth';








var firebaseConfig = {
    apiKey: "AIzaSyAsQocA093f6yniKh-VtRA7tWyUl-8HJkQ",
    authDomain: "trollmusic-47b55.firebaseapp.com",
    projectId: "trollmusic-47b55",
    storageBucket: "trollmusic-47b55.appspot.com",
    messagingSenderId: "118812349167",
    appId: "1:118812349167:web:57af2313e98d9dd09cc11a",
    measurementId: "G-2G3Q1CQW7F"
  };


// Get a Firestore instance
export const db = firebase
  .initializeApp(firebaseConfig)
  .firestore()

  

 



// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }

// if using Firebase JS SDK < 5.8.0
db.settings({ timestampsInSnapshots: true })



export default {
  auth: firebase.auth(),
  login() {
    //const provider = new firebase.auth.GoogleAuthProvider();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(function(result) {
      console.log(result);
    })
    .catch(function(error){
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
      console.log(errorCode, errorMessage, email, credential);
      })
  },
  logout() {
    firebase.auth().signOut()
    .then(function() {})
    .catch(function(error) {
      console.log(error)});
  },

  signUpWithEmailPassword(correo, contra) {
    firebase.auth().createUserWithEmailAndPassword(correo, contra)
      .then((user) => {
        console.log(user)
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }
}
