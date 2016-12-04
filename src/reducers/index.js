import { combineReducers } from 'redux';

// import fuelSavings from './fuelSavingsReducer';
import {routerReducer} from 'react-router-redux';
import images from './galleryReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  // fuelSavings,
  images,
  ajaxCallsInProgress,
  routing: routerReducer
});

export default rootReducer;
