import { FETCH_EPISODES, UPDATE_EPISODES, SET_ERROR } from "../actions";

const initialState = {
  episodes: [],
  isFetchingData: false,
  error: ""
};

export const animeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EPISODES:
      return {
        ...state,
        isFetchingData: true,
        episodes: []
      };
    case UPDATE_EPISODES:
      return {
        ...state,
        episodes: action.payload,
        isFetchingData: false
      };
    case SET_ERROR:
      return {
        ...state,
        isFetchingData: false,
        error: action.payload
      };
    default:
      return state;
  }
};
