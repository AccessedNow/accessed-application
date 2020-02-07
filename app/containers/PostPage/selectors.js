import { createSelector } from 'reselect';
import { initState } from './reducer';

const selectPost = state => state.post || initState;

const posts = () =>
  createSelector(
    selectPost,
    postState => postState.postList,
  );

export { selectPost, posts };