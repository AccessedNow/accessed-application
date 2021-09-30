import Card from '@mui/material/Card';
import { styled, darken } from '@mui/material/styles';
import CardContent from '@mui/material/CardContent';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth0LoginTab from './tabs/Auth0LoginTab';
import FirebaseLoginTab from './tabs/FirebaseLoginTab';
import JWTLoginTab from './tabs/JWTLoginTab';

const Root = styled('div')(({ theme }) => ({
  background: `linear-gradient(to right, ${theme.palette.primary.dark} 0%, ${darken(
    theme.palette.primary.dark,
    0.5
  )} 100%)`,
  color: theme.palette.primary.contrastText,

  '& .Login-leftSection': {},

  '& .Login-rightSection': {
    background: `linear-gradient(to right, ${theme.palette.primary.dark} 0%, ${darken(
      theme.palette.primary.dark,
      0.5
    )} 100%)`,
    color: theme.palette.primary.contrastText,
  },
}));

function Login() {
  const [selectedTab, setSelectedTab] = useState(0);

  function handleTabChange(event, value) {
    setSelectedTab(value);
  }

  return (
  <div className="flex flex-col flex-auto p-16 sm:p-24 md:flex-row md:p-0 overflow-hidden">
    <div className={clsx(
      '"flex flex-col flex-grow-0 items-center p-16 text-center md:p-128 md:items-start md:flex-shrink-0 md:flex-1 md:text-left"'
    )}>
      <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1, transition: { delay: 0.1 } }}>
        <img className="w-128 mb-32" src="assets/images/logos/accessed.svg" alt="logo" />
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}>
        <Typography className="text-32 sm:text-44 font-semibold leading-tight">
          Welcome <br />
          to <br /> Accessed!
        </Typography>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.3 } }}>
        <Typography variant="subtitle1" className="mt-32 font-medium">
            Powerful and professional Talent Management System and more.
        </Typography>
      </motion.div>
    </div>

    <Card
      className="Login-leftSection flex flex-col w-full max-w-sm items-center justify-center shadow-0"
      square
    >
      <CardContent className="flex flex-col items-center justify-center w-full py-96 max-w-320">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.2 } }}
        >
          <div className="flex items-center mb-48">
            <img className="logo-icon w-40" src="assets/images/logos/accessed.png" alt="logo" />
            <div className="border-l-1 ml-4 mr-4 w-1 h-40" />
            <div>
              <Typography className="text-24 font-semibold logo-text" color="inherit">
                Accessed
              </Typography>
            </div>
          </div>
          </motion.div>

          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            variant="fullWidth"
            className="w-full mb-32"
          >
            <Tab
              icon={
                <img
                  className="h-40 p-4 bg-black rounded-12"
                  src="assets/images/logos/jwt.svg"
                  alt="firebase"
                />
              }
              className="min-w-0"
              label="JWT"
            />
            <Tab
              icon={
                <img className="h-40" src="assets/images/logos/firebase.svg" alt="firebase" />
              }
              className="min-w-0"
              label="Firebase"
            />
            <Tab
              icon={<img className="h-40" src="assets/images/logos/auth0.svg" alt="auth0" />}
              className="min-w-0"
              label="Auth0"
            />
          </Tabs>

          {selectedTab === 0 && <JWTLoginTab />}
          {selectedTab === 1 && <FirebaseLoginTab />}
          {selectedTab === 2 && <Auth0LoginTab />}
      </CardContent>
      <div className="flex flex-col items-center justify-center pb-32">
        <div>
          <span className="font-normal mr-8">Don't have an account?</span>
          <Link className="font-normal" to="/register">
            Register
          </Link>
        </div>
        <Link className="font-normal mt-8" to="/">
        Back to Home
        </Link>
      </div>
    </Card>
  </div>

  );
}

export default Login;
