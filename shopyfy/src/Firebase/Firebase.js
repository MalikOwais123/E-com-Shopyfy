import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCZPcvy8dC2k1b6PSzbDXTU-CZy-19vIGQ",
  authDomain: "e-com-shopify.firebaseapp.com",
  projectId: "e-com-shopify",
  storageBucket: "e-com-shopify.appspot.com",
  messagingSenderId: "132767073211",
  appId: "1:132767073211:web:2a72afea216f054572fa9e",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export var auth = firebase.auth();
export var firestore = firebase.firestore();
export var serverTimestamp = () => firebase.firestore.FieldValue.serverTimestamp();

export default firebase;
