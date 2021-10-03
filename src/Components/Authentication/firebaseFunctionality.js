import firebase from "firebase/app";
// this firebaseConfig file locates in the same/authentication folder named firebase.config.js...
import firebaseConfig from "./firebase.config";

import "firebase/auth";

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

//var googleProvider = new firebase.auth.GoogleAuthProvider();

export const googleSignIn = () => {
  let provider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      const { displayName, email, photoURL } = result.user;
      let userDetails = {
        name: displayName,
        email: email,
        photo: photoURL,
      };
      //userToken();
      return userDetails;
    })
    .catch((error) => {
      const errorMessage = error.message;

      return errorMessage;
    });
};

export const logOut = () => {
  return firebase
    .auth()
    .signOut()
    .then(() => {
      console.log("logged out successfully");
      sessionStorage.removeItem("token");
      return "Sign-out successful.";
    })
    .catch((error) => {
      // An error happened.
    });
};

export const userToken = () => {
  firebase
    .auth()
    .currentUser.getIdToken(/* forceRefresh */ true)
    .then(function (idToken) {
      // Send token to your backend via HTTPS
      // ...
      console.log(idToken);
      sessionStorage.setItem("token", idToken);
    })
    .catch(function (error) {
      // Handle error
    });
};

// const googleSignIn = () => {
//   return firebase
//     .auth()
//     .signInWithPopup(googleProvider)
//     .then((result) => {
//       var user = result.user;
//       return user;
//     })
//     .catch((error) => {
//       // Handle Errors here.
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       return errorMessage;
//     });
// };

// export { googleSignIn };
