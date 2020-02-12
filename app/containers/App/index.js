/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import CompanyPage from 'containers/CompanyPage/Loadable';
import JobListPage from 'containers/JobListPage/Loadable';
import JobsPage from 'containers/JobsPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';


import 'bootstrap/dist/css/bootstrap.min.css';

import '../../assets/arenafont.css';
import '../../assets/vendor.css';
import '../../assets/styles.scss';
import '../../assets/themes.scss';
import '../../assets/bc_wl_cp_style.scss';
import '../../assets/change_color.scss';




const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - Hiring"
        defaultTitle="Accessed - World Connect"
      >
        <meta name="description" content="World Connection" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/features" component={FeaturePage} />
        <Route path="/company" component={CompanyPage} />
        <Route path="/jobs" component={JobListPage} />
        <Route path="/jobs-page" component={JobsPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}
