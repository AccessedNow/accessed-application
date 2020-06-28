/**
 * CompanyPage selectors
 */

import { createSelector } from 'reselect';
import { initState } from './reducer';

const selectCompany = state => state.company || initState;

const company = () =>
  createSelector(
    selectCompany,
    companyState => {
      console.log('companyState', companyState)
      return companyState.company
    }
  );


export { selectCompany, company };
