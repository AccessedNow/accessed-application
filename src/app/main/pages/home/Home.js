import React from 'react';
import FusePageSimple from '@fuse/core/FusePageSimple';
import { styled } from '@mui/material/styles';
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

const Root = styled(FusePageSimple)(({ theme }) => ({

  '& .FusePageSimple-content': {
    width: '100%',
    margin: 'auto',
  },

}));

function Home() {


  return (
    <Root
      content={
        <div className="p-16 sm:p-24">
          <Hero />
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
        </div>
      }
    />
  );
}

export default Home;
