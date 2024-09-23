import * as actions from "../actions/actionsType";

const initialState = {
  articles: [],
  loading: false,
  error: null,
};

export const articleReducer=(state=initialState,action)=>{
    switch(action.type){
        case actions.FETCH_ARTICLE:{
            return{
                ...state,articles:[...action.payload]
            }
        }

        case actions.SET_ARTICLE_LOADING:{
            return{
                ...state,loading:action.payload
            }
        }

        case actions.SET_ARTICLE_ERROR:{
            return{
                ...state,error:action.payload
            }
        }

        default:{
            return state
        }
    }
}