

import produce from 'immer';
import { FETCH_POST_LIST, FETCH_POST_LIST_SUCCESS, FETCH_POST_LIST_ERROR } from './constants';

export const initState = {
  postList: [],
  postListError: ''
};

const postReducer = (state = initState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_POST_LIST_SUCCESS:
        draft.postList = action.payload;
        break;
      case FETCH_POST_LIST_ERROR:
        draft.postListError = action.payload
        break;
    }
  })

export default postReducer;