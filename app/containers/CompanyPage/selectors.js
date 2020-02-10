/**
 * Companypage selectors
 */

import { createSelector } from 'reselect';
import { initState } from './reducer';

const selectCompany = state => state.company || initState;

const companies = () =>
  createSelector(
    selectCompany,
    companyState => companyState.companyList.data.content,
  );

const paginate = () =>
  createSelector(
    selectCompany,
    companyState => companyState.paginate,
  );

export { selectCompany, companies, paginate };