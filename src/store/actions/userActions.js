import * as actions from "./actionsType";
import { auth, provider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";

export const setUser = (user) => {
  return {
    type: actions.SET_USER,
    payload: user,
  };
};

export const setUserLoading = (flage) => {
  return {
    type: actions.SET_USER_LOADING,
    payload: flage,
  };
};

export const setUserError = (error) => {
  return {
    type: actions.SET_USER_ERROR,
    payload: error,
  };
};


//async functions

//handel sign in 
export const signIn = () => {
  return async(dispatch) => {
    dispatch(setUserLoading(true));
    signInWithPopup(auth, provider)
      .then((response) => {
        dispatch(setUser(response.user));
      })
      .catch((error) => {
        dispatch(setUserError(error.message));
      })
      .finally(() => {
        dispatch(setUserLoading(false));
      });
  };
};

//handel sign out 
export const signOut = () => {
  return async(dispatch) => {
    dispatch(setUserLoading(true));
    auth.signOut()
      .then(() => {
        dispatch(setUser(null));
      })
      .catch((error) => {
        dispatch(setUserError(error.message));
      })
      .finally(() => {
        dispatch(setUserLoading(false));
      });
  };
};

//handel user change 
export const handelAuthStateChanged = () => {
  return async(dispatch) => {
    dispatch(setUserLoading(true));
    auth.onAuthStateChanged((user)=>{
        dispatch(setUser(user||null))
        dispatch(setUserLoading(false));
    })
  };
};
