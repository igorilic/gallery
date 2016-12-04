import { expect } from 'chai';
import * as ActionTypes from '../constants/actionTypes';
import reducer from './ajaxStatusReducer';

describe('Reducers::AjaxStatus', () => {
  const getInitialState = () => {
    return {
      images: [],
      selectedImage: null,
      ajaxCallsInProgress: 0
    };
  };

  const getAppState = () => {
    return {
      images: [],
      selectedImage: null,
      ajaxCallsInProgress:1
    };
  };
  it('should set initial state by default', () => {
    const action = { type: 'unknown' };
    const expected = getInitialState();

    expect(reducer(undefined, action)).to.deep.equal(expected); // Notice use of deep because it's a nested object
    // expect(reducer(undefined, action)).to.equal(expected); // Fails. Not deeply equal
  });

  it('should handle BEGIN_AJAX_CALLS', () => {
    const action = { type: ActionTypes.BEGIN_AJAX_CALL};
    const expected = Object.assign(getAppState(), {});

    expect(reducer(getInitialState(), action)).to.deep.equal(expected);
  });

  it('should handle BEGIN_AJAX_ERROR', () => {
    const action = { type: ActionTypes.BEGIN_AJAX_ERROR};
    const expected = Object.assign(getInitialState(), {});

    expect(reducer(getAppState(), action)).to.deep.equal(expected);
  });

  it('should reduce no. of ajax calls if action type ends with SUCCESS', () => {
    const action = { type: ActionTypes.FETCH_IMAGES_SUCCESS};
    const expected = Object.assign(getInitialState(), {});

    expect(reducer(getAppState(), action)).to.deep.equal(expected);
  });

});
