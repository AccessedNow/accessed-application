import FuseUtils from '@fuse/utils';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '../../components/Container';
import { Content, Footer, Headline } from './components';

const Root = styled('div')(({ theme }) => ({
  '& .FaqPage-header': {
    background: `linear-gradient(to right, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
    color: theme.palette.primary.contrastText,
  },

  '& .FaqPage-panel': {
    margin: 0,
    border: 'none',
    '&:before': {
      display: 'none',
    },
    '&:first-child': {
      borderRadius: '20px 20px 0 0',
    },
    '&:last-child': {
      borderRadius: '0 0 20px 20px',
    },

    '&.Mui-expanded': {
      margin: 'auto',
    },
  },
}));

function FaqPage() {
  const theme = useTheme();


  return (
    <Root className="w-full flex flex-col flex-auto">
      <Box>
        <Box
          sx={{
            backgroundColor: theme.palette.alternate.main,
            backgroundImage: `linear-gradient(120deg, ${theme.palette.background.paper} 0%, ${theme.palette.alternate.main} 100%)`,
            marginTop: -13,
            paddingTop: 13,
          }}
        >
          <Container>
            <Headline />
          </Container>
        </Box>
        <Container maxWidth={800}>
          <Content />
        </Container>
        <Box bgcolor={theme.palette.alternate.main}>
          <Container>
            <Footer />
          </Container>
        </Box>
      </Box>
    </Root>
  );
}

export default FaqPage;
