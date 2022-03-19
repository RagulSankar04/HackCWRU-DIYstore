import * as firebase from "firebase";
import * as Google from "expo-google-app-auth";
const onSignIn = (googleUser) => {
  console.log("Google Auth Response", googleUser);
  // We need to register an Observer on Firebase Auth to make sure auth is initialized.
  var unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
    unsubscribe();
    // Check if we are already signed-in Firebase with the correct user.
    if (!isUserEqual(googleUser, firebaseUser)) {
      // Build Firebase credential with the Google ID token.
      var credential = firebase.auth.GoogleAuthProvider.credential(
        googleUser.idToken,
        googleUser.accessToken
      );

      // Sign in with credential from the Google user.
      auth
        .signInWithCredential(credential)
        .then(() => {
          alert("User Signed in successfully");
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      console.log("User already signed-in Firebase.");
    }
  });
};

const isUserEqual = (googleUser, firebaseUser) => {
  if (firebaseUser) {
    var providerData = firebaseUser.providerData;
    for (var i = 0; i < providerData.length; i++) {
      if (
        providerData[i].providerId ===
          firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
        providerData[i].uid === googleUser.getBasicProfile().getId()
      ) {
        // We don't need to reauth the Firebase connection.
        return true;
      }
    }
  }
  return false;
};

const signInWithGoogleAsync = async () => {
  try {
    const result = await Google.logInAsync({
      behavior: "web",
      androidClientId:
        "658449109922-cf0jf1remaf44vld92u2hcd3a2e0ta8r.apps.googleusercontent.com",
      //   iosClientId: "",
      scopes: ["profile", "email"],
    });

    if (result.type === "success") {
      onSignIn(result);
    } else {
      return { cancelled: true };
    }
  } catch (e) {
    return { error: true };
  }
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp({
    apiKey: "AIzaSyDUcsxT948tHVLfZH-tFCrTf7MwUvCp8TQ",
    authDomain: "hackcwru-diystore.firebaseapp.com",
    projectId: "hackcwru-diystore",
    storageBucket: "hackcwru-diystore.appspot.com",
    messagingSenderId: "658449109922",
    appId: "1:658449109922:web:4c0f00e91168488d0c18fb",
  });
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth, firebase, signInWithGoogleAsync };
