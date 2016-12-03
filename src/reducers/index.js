import { combineReducers } from 'redux';

// import fuelSavings from './fuelSavingsReducer';
import {routerReducer} from 'react-router-redux';
import gallery from './galleryReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  // fuelSavings,
  gallery,
  ajaxCallsInProgress,
  routing: routerReducer
});

export default rootReducer;
