import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import { styled, darken } from '@mui/material/styles';
import CardContent from '@mui/material/CardContent';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import TextField from '@mui/material/TextField';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import _ from '@lodash';

import Auth0RegisterTab from './tabs/Auth0RegisterTab';
import FirebaseRegisterTab from './tabs/FirebaseRegisterTab';
import JWTRegisterTab from './tabs/JWTRegisterTab';


const Root = styled('div')(({ theme }) => ({
  backgroundImage: 'url("../../assets/images/backgrounds/signup.png")',
  backgroundColor: '#FAFAFA',
  color: '#FFFFFF',
  backgroundSize: 'cover',
  backgroundPosition: '0 50%',
  backgroundRepeat: 'no-repeat',
  '&:before': {
    content: "''",
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 1,
    background: 'rgba(0, 0, 0, 0.45)',
  }
}));

const schema = yup.object().shape({
  firstName: yup.string().required('You must enter your first name'),
  lastName: yup.string().required('You must enter your last name'),
  email: yup.string().email('You must enter a valid email').required('You must enter a email'),
  password: yup
    .string()
    .required('Please enter your password.')
    .min(8, 'Password is too short - should be 8 chars minimum.'),
  passwordConfirm: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
  acceptTermsConditions: yup.boolean().oneOf([true], 'The terms and conditions must be accepted.'),
});


const defaultValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  passwordConfirm: '',
  acceptTermsConditions: false,
};

function Register() {
  const [selectedTab, setSelectedTab] = useState(0);

  const { control, formState, handleSubmit, reset } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors } = formState;

  function handleTabChange(event, value) {
    setSelectedTab(value);
  }

  function onSubmit() {
    reset(defaultValues);
  }

  return (
    <div className="flex flex-col flex-auto p-16 sm:p-24 md:flex-row md:p-0 overflow-hidden">
      <div className={clsx(
        '"flex flex-col flex-grow-0 items-center  p-16 text-center md:p-128 md:items-start md:flex-shrink-0 md:flex-1 md:text-left"'
      )}>
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1, transition: { delay: 0.1 } }}
        >
          <img className="w-128 mb-32" src="assets/images/logos/accessed.svg" alt="logo" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
        >
          <Typography className="text-32 sm:text-44 font-semibold leading-tight">
            Welcome <br />
            to <br /> Accessed!
          </Typography>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.3 } }}>
          <Typography variant="subtitle1" className="mt-32 font-medium">
            Powerful and professional SRM, CRM, CMS and more.
          </Typography>
        </motion.div>
      </div>

      <Card
        className="Register-leftSection flex flex-col w-full max-w-sm items-center justify-center shadow-0"
        square
      >
        <CardContent className="flex flex-col items-center justify-center w-full py-96 max-w-320">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.2 } }}
          >
            <div className="flex items-center justif-center mb-32">
              <img className="logo-icon w-40" src="assets/images/logos/accessed.png" alt="Accessed" />
              <div className="border-l-1 ml-4 mr-4 w-1 h-40" />
              <div>
                <Typography className="text-24 font-semibold logo-text" color="inherit">
                  ACCESSED
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

          {selectedTab === 0 && <JWTRegisterTab />}
          {selectedTab === 1 && <FirebaseRegisterTab />}
          {selectedTab === 2 && <Auth0RegisterTab />}
        </CardContent>

        <div className="flex flex-col items-center justify-center pb-32">
          <div>
            <span className="font-normal mr-8">Already have an account?</span>
            <Link className="font-normal" to="/login">
              Login
            </Link>
          </div>
          <Link className="font-normal mt-8" to="/">
            Back to Dashboard
          </Link>
        </div>
      </Card>
    </div>
  );
}

export default Register;
