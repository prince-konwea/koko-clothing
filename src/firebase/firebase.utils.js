import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config =  {
    apiKey: "AIzaSyCXm92fb3khzxmRXKCuQEc_mYkkDUOE0hQ",
    authDomain: "koko-db.firebaseapp.com",
    projectId: "koko-db",
    storageBucket: "koko-db.appspot.com",
    messagingSenderId: "429557381667",
    appId: "1:429557381667:web:a712bc9187211cb6000f96",
    measurementId: "G-8V91EP3ETD"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
     if(!userAuth) return;
     const userRef = firestore.doc(`users/${userAuth.uid}`);
     const snapShot = await userRef.get();

     if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
         displayName,
         email,
         createdAt,
         ...additionalData
        })
      }catch(error){
         console.log("error creating user", error.message);
      }
     }
     return userRef;
  };


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt:" select_account"})

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;