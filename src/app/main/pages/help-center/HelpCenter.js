import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Container from '../../components/Container';
import { Faq, Contact, Hero } from './components';


function HelpCenter() {
  const theme = useTheme();


  return (
    <div className="flex flex-col flex-auto w-full items-center justify-center">

      <Hero />
      <Container>
        <Faq />
      </Container>
      <Box
        position={'relative'}
        sx={{
          backgroundColor: theme.palette.alternate.main,
        }}
      >
        <Contact />
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

    </div>
  );
}

export default HelpCenter;
