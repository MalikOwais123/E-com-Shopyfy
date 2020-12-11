import { auth, firestore } from "../../Firebase/Firebase";
import { serverTimestamp } from "./../../Firebase/Firebase";
import { SET_USER } from "./authConstant";

// setuser function which is responsible to set every user
// it is not necessay to make it async so we can make it simple action
export var setUser = (user) => ({
  type: SET_USER,
  payload: {
    user,
  },
});

// ye function aik async function leta h jismey do cheezay hoti ahi dispatch and getState
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
    // console.log(userInfo);
    await firestore.collection("users").doc(uid).set(userInfo);
    // console.log(userData);

    // set user to state
    var setUserDataInState = {
      fullName,
      email,
      uid,
    };

    //calling setUser function and dispatch them also
    //Why we dispatch because at component level we use it so that we can use another action like setUser we use
    dispatch(setUser(setUserDataInState));

    // console.log(user)
  } catch (error) {
    console.log(error);
  }
};


export var signin = ({email,password}) => async (dispatch) => {
    try {
        //sign in user with auth
        var {user: {uid}} = await auth.signInWithEmailAndPassword(email,password);
        //fetch user data from firestore

        //set user data to auth store
    } catch (error) {
        console.log(error);
    }
}


