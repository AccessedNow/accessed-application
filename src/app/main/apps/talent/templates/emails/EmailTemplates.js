import React from 'react';
import PropTypes from 'prop-types';

import withReducer from 'app/store/withReducer';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';

import reducer from "./store";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const EmailTemplates = () => {
  const dispatch = useDispatch();

  const [tab, setTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  useEffect(() => {
    // dispatch(getCompanyRoles(true));
  }, [dispatch]);


  return (
        <Box>
          <Typography variant="h6" gutterBottom fontWeight={700}>
            Email Templates
          </Typography>
          <Typography variant={'subtitle2'} color={'text.secondary'}>
            Manage roles, access contact information and invite team members.
            <Link color={'primary'} href={'/terms-conditions'} underline={'none'}>
              Learn more.
            </Link>
          </Typography>

        </Box>

  );
};

export default withReducer('emailTemplates', reducer)(EmailTemplates);
;
