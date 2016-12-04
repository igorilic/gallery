import {FETCH_IMAGES_SUCCESS} from '../constants/actionTypes';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function galleryReducer(state = initialState.images, action) {
  switch(action.type) {
    case FETCH_IMAGES_SUCCESS:
      debugger;
      return action.payload.hits;
    default:
      return state;
  }

}
