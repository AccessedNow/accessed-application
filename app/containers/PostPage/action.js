
import { FETCH_POST_LIST, FETCH_POST_LIST_SUCCESS, FETCH_POST_LIST_ERROR } from './constants'

export function getPostList(list) {
  return {
    type: FETCH_POST_LIST,
    list
  };
}

export function postListSuccess(response) {
  return {
    type: FETCH_POST_LIST_SUCCESS,
    payload: response
  };
}

export function postListError(error) {
  return {
    type: FETCH_POST_LIST_ERROR,
    payload: error
  };
}


