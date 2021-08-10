import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBgbZSe7TdDcQ-UsVe0AgPDxMx6qRmnUbM",
  authDomain: "crwn-clothing-61c80.firebaseapp.com",
  projectId: "crwn-clothing-61c80",
  storageBucket: "crwn-clothing-61c80.appspot.com",
  messagingSenderId: "549281528954",
  appId: "1:549281528954:web:34b528256bd54697678fc3",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error("error creating user", error.message);
    }
  }

  return userRef;
};
