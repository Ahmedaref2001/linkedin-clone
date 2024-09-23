import * as actions from "../actions/actionsType";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_USER: {
      return { ...state, user: action.payload };
    }
    case actions.SET_USER_LOADING: {
      return { ...state, loading: action.payload };
    }
    case actions.SET_USER_ERROR: {
      return { ...state, error: action.payload };
    }
    default:
      return state;
  }
};
