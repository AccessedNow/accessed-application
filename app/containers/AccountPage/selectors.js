/*/**
 * Accountpage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectAccount = state => state.account || initialState;

const getForgotPasswordStatus = () =>
  // console.log('selectAccount', selectAccount)
  createSelector(
    selectAccount,
    accountState => accountState.forgotPasswordToogle,
  );

export { selectAccount, getForgotPasswordStatus };
