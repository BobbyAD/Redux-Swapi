import { FETCH_PEOPLE_START, FETCH_PEOPLE_SUCCESS, FETCH_PEOPLE_FAILURE } from "../actions";

const initialState = {
  characters: [],
  fetching: false,
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCH_PEOPLE_START:
      return {
        ...state,
        fetching: true,
        error: null
      }
    case FETCH_PEOPLE_SUCCESS:
      return {
        ...state,
        characters: [...state.characters, ...action.payload],
        fetching: false,
        error: null
      }
    case FETCH_PEOPLE_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    default:
      return state;
  }
};
