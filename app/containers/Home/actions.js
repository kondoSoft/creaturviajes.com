/*
 *
 * Home actions
 *
 */

import {
  USER_AGENT,
} from './constants';

export function defaultAction(browser) {
  return {
    type: USER_AGENT,
    browser,
  };
}
