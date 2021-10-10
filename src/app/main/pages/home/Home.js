import React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import Main from '../layouts/Main';
import Container from '../../components/Container';
import {
  AboutTop,
  Advantages,
  Customers,
  Features,
  Hero,
  Jobs,
  Newsletter,
  Partners,
  Process,
  PromoNumbers,
  Questions,
  TrustedCompanies,
} from './components';

const Home = () => {
  return (
    <Main>
      <Container>
        <Hero />
      </Container>
      <Container>
        <Partners />
      </Container>
      <Box bgcolor={'white'}>
        <Container>
          <Questions />
        </Container>
      </Box>
      <Container>
        <Process />
      </Container>
      <Box bgcolor={'white'}>
        <Container>
          <AboutTop />
        </Container>
      </Box>
      <Container>
        <Jobs />
      </Container>
      <Box bgcolor={'white'}>
        <Container>
          <PromoNumbers />
        </Container>
      </Box>
      <Container>
        <Features />
      </Container>
      <Box bgcolor={'white'}>
        <Container>
          <Advantages />
        </Container>
      </Box>
      <Container>
        <TrustedCompanies />
      </Container>
      <Container paddingY={0}>
        <Divider />
      </Container>
      <Container>
        <Customers />
      </Container>
      <Container paddingTop={'0 !important'}>
        <Newsletter />
      </Container>
    </Main>
  );
};

export default Home;
