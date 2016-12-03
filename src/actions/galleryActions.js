import * as types from '../constants/actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
// import dateHelper from '../utils/dateHelper';

import axios from 'axios';

const ROOT_URL = 'https://pixabay.com/api/';
const API_KEY = '?key=3914233-ed0f39cbbf8aa148a59d0a61b';

export function fetchImagesSuccess(images) {
  return {
    type: types.FETCH_IMAGES_SUCCESS,
    payload: images
  };
}

export function fetchImages() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    const TERM = 'football';
    return axios.get(`${ROOT_URL}${API_KEY}&q=${TERM}`)
      .then(images => {
        dispatch(fetchImagesSuccess(images.data));
      })
      .catch(error => {
        dispatch(ajaxCallError());
        throw(error);
      });
  };
}
