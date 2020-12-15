import { auth, firestore, googleAuthProvider } from "../../Firebase/Firebase";
import { serverTimestamp } from "./../../Firebase/Firebase";
import { SET_USER, REMOVE_USER } from "./authConstant";


// **************************MAIN ACTION*****************************
// setuser function which is responsible to set every user
// it is not necessay to make it async so we can make it simple action
export var setUser = (user) => ({
  type: SET_USER,
  payload: {
    user,
  },
});
// *******************************************************



// ***SIGN-OUT USER ACTION*****
export var removeUser = () => ({
  type: REMOVE_USER,
});
// ****************************



//*******************************SIGNUP ACTION******************************************
// ye function aik async function leta h jismey do cheezay hoti hi dispatch and getState
export var signup = ({ email, password, fullName }) => async (dispatch) => {
  try {
    // create user on firebase with firebase auth section
    var {
      user: { uid },
    } = await auth.createUserWithEmailAndPassword(email, password);

    // save user to firebase from firestore
    var userInfo = {
      fullName,
      email,
      createdAt: serverTimestamp(),
    };

    await firestore.collection("users").doc(uid).set(userInfo);

  } catch (error) {
    console.log(error);
  }
};
//*****************************************************************






//*************************SIGNIN ACTION***************************
export var signin = ({ email, password }) => async (dispatch) => {
  try {
    //sign in user with auth
    await auth.signInWithEmailAndPassword(email, password);
  } catch (error) {
    console.log(error);
  }
};
//*****************************************************************






//*********************SIGN-OUT ACTION*****************************

export var signout = () => async (dispatch) => {
  try {
    //signout user from firebase
    await auth.signOut();
  } catch (error) {
    console.log(error);
  }
};
//**************************************************************





//************************GOOGLE SIGNIN ACTION******************
export var googleSignin = () => async (dispatch) => {
  try {
    // Destructuring the user data given by google !
    var {
      user: { displayName, email, uid },
      additionalUserInfo: { isNewUser },
    } = await auth.signInWithPopup(googleAuthProvider);
    
    // If our User is new means login in our app for the first time then we have to set it into firebase(database)
    if (isNewUser) {
      // save user to firebase from firestore
      var userInfo = {
        fullName: displayName,
        email,
        createdAt: serverTimestamp(),
      };
      await firestore.collection("users").doc(uid).set(userInfo);
    }
  } catch (error) {
    console.log(error);
  }
};
//**************************************************************






//*******************FIREBASE AUTH LISTENER*********************
// ACTION FOR CHECK IF USER ALREADY EXIST OR NOT
// Token always be there untill unless user signout by himself
export var firebaseAuthListener = () => async (dispatch) => {
  //  FIREBASE AUTH LISTENER
  try {
    // Function given by firebase to check user auth state changed or not
    // Here we have to use fresh firebase that why we call it
    auth.onAuthStateChanged(async function (user) {
      //check user token from local storage using firebaselistener
      if (user) {
        // get its ID if exist
        var { uid } = user;
        //fetch user data from firestore
        var query = await firestore.collection("users").doc(uid).get();
        var { fullName, email } = query.data();
        //set user to auth State
        //set user data to auth store
        var setUserDataInState = {
          fullName,
          email,
          uid,
        };
        //calling setUser function and dispatch them also
        dispatch(setUser(setUserDataInState));
      } else {
        //set auth state to null
        dispatch(removeUser());
      }
    });
    // console.log(user);
  } catch (error) {
    console.log(error.message);
  }
};
//**************************************************************
