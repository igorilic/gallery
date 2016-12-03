import * as types from '../constants/actionTypes';
import initialState from './initialState';

function actionTypeEndsInSuccess(type) {
  return type.substring(type.length - 8) == '_SUCCESS';
}

export  default function ajaxStatusReducer(state = initialState, action) {
  if (action.type == types.BEGIN_AJAX_CALL) {
    return Object.assign({}, state, {ajaxCallsInProgress: state.ajaxCallsInProgress + 1});
  } else if(action.type == types.BEGIN_AJAX_ERROR || actionTypeEndsInSuccess(action.type)) {
    return Object.assign({}, state, {ajaxCallsInProgress: state.ajaxCallsInProgress - 1});;
  }

  return state;
}
