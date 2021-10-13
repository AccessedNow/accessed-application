import React from 'react';
import { useTheme } from '@mui/material/styles';
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

const Root = styled('div')(({ theme }) => ({

  '& .FusePageSimple-content': {
    width: '100%',
    margin: 'auto',
  },

}));

function Home() {

  const theme = useTheme();

  return (
    <Root>
      <Box
        position={'relative'}
        sx={{
          backgroundColor: theme.palette.alternate.main,
          marginTop: -13,
          paddingTop: 13,
        }}
      >
        <Container>
          <Hero />
        </Container>
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1920 100.1"
          sx={{
            width: '100%',
            marginBottom: theme.spacing(-1),
          }}
        >
          <path
            fill={theme.palette.background.paper}
            d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
          ></path>
        </Box>
      </Box>

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

    </Root>
  );
}

export default Home;
