/*
 *
 * Home reducer
 *
 */

import { fromJS } from 'immutable';
import {
  USER_AGENT,
} from './constants';

const initialState = fromJS({
	browser: null,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case USER_AGENT:
      return state.set('browser', action.browser);
    default:
      return state;
  }
}

export default homeReducer;
