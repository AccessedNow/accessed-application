/**
 * Companypage selectors
 */

import { createSelector } from 'reselect';
import { initState } from './reducer';

const selectCompany = state => state.companies || initState;

const companies = () =>
  createSelector(
    selectCompany,
    companyState => companyState.companyList.data
  );

const paginate = () =>
  createSelector(
    selectCompany,
    companyState => companyState.paginate
  );

export { selectCompany, companies, paginate };
