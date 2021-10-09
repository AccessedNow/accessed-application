import * as React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import _ from 'lodash';

import FusePageSimple from '@fuse/core/FusePageSimple';
import FuseLoading from '@fuse/core/FuseLoading';
import { styled } from '@mui/material/styles';
import ArrowForward from '@mui/icons-material/ArrowForward';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormControlLabel from '@mui/material/FormControlLabel';
import Icon from '@mui/material/Icon';
import InputLabel from '@mui/material/InputLabel';
import ListItemText from '@mui/material/ListItemText';

import LoadingButton from '@mui/lab/LoadingButton';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { Controller, useForm } from 'react-hook-form';
import { useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useDeepCompareEffect } from '@fuse/hooks';
import withReducer from 'app/store/withReducer';
import reducer from "../store";
import {registerCompany} from "../store/companySlice";
import CompanyPreview from './CompanyPreview';
import commonService from 'app/services/commonService';
import CompanyModel from '../model/CompanyModel';

import CompanySidebarContent from './CompanySidebarContent';
import {getJobLanding} from "../../jobs/joblanding/store/jobLandingSlice";

const Root = styled(FusePageSimple)(({ theme }) => ({
  '& .FusePageSimple-header': {
    minHeight: 36,
    height: 36,
    background: 'none',
    [theme.breakpoints.up('lg')]: {
      minHeight: 36,
      height: 36,
    },
  },
  '& .FusePageSimple-wrapper': {
    marginTop: 20,
    minHeight: 0,
    // width: '100%'
    margin: 'auto',
    width: 1120,
  },

  '& .FusePageSimple-content': {
    width: '100%',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',

  },
  '& .FusePageSimple-content': {
    width: '100%',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    '& .profile-header': {
      background: 'url("assets/images/covers/cover11")!important',
      backgroundSize: 'cover!important',
      backgroundPosition: 'center center!important',
      height: 320,
      minHeight: 320,
      [theme.breakpoints.down('lg')]: {
        height: 240,
        minHeight: 240,
      },
    },
  },

  '& .FusePageSimple-toolbar': {
    width: '100%',
    maxWidth: 1120,
    margin: 'auto',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    minHeight: 'auto',
    height: 'auto',
    aliginItesm: 'flex-start',
  },
  '& .FusePageSimple-sidebar': {
    // width: 360
  },
  '& .FusePageSimple-sidebarContent': {
  },
  '& .FusePageSimple-rightSidebar': {
    width: 550,
    background: 'white',
    padding: '0 20px 0 20px',
    border: 'none',
    background: 'white'
  },
}));


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  name: yup.string().required('You must enter a name'),
});


function CompanyRegistration(props) {
  const pageLayout = useRef(null);
  const dispatch = useDispatch();
  const routeParams = useParams();

  const defaultValues = _.merge(
    {},
    CompanyModel()
  );
  const { formState, handleSubmit, getValues, reset, watch, setValue, control } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors } = formState;
  const companyForm = watch();

  const [industry, setIndustry] = React.useState(false);
  const [industries, setIndustries] = React.useState([]);
  const [loading, setLoading] = React.useState(false);



  /**
   * Initialize Data
   */
  const initDialog = useCallback(() => {
    reset({
      ...defaultValues,
      id: FuseUtils.generateGUID(),
    });

  }, [reset]);

  useEffect(() => {

    if(!industries.length) {
      commonService
        .getIndustries('')
        .then(res => {
          setIndustries(res)
        });
    }
  }, [companyForm, props, defaultValues]);

  /**
   * Form Submit
   */
  function onSubmit(data) {
    setLoading(true);
    dispatch(registerCompany(data));

  }

  const handleSizeChange = (event) => {
    const {
      target: { value },
    } = event;

    companyForm.size = value;
  };

  const handleIndustryChange = (event) => {
    const {
      target: { value },
    } = event;

    companyForm.industry = value;
  };

  const handleTypeChange = (event) => {
    const {
      target: { value },
    } = event;

    companyForm.type = value;
  };

  async function handleFileSelect(event){
    const {
      target: { value },
    } = event;

    companyForm.avatar = value;
  };

  const renderIndustry = (selected) => {
    return selected?selected.join(','):'';
  };

  return (
    <Root
      header={<></>}
      content={
        <Paper elevate={0} className="rounded-8 bg-white p-20">
          <form
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col md:overflow-hidden"
          >
            <Typography className="font-semibold mb-4 text-16">Company Details</Typography>
            <Typography className="mb-20">Tell us more about your company.</Typography>

            <div className="flex">
              <div className="flex justify-center sm:justify-start flex-wrap mr-16">
                <Controller
                  name="avatar"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <label
                      htmlFor="button-file"
                      className="productImageUpload flex items-center justify-center relative w-52 h-52 rounded-4 overflow-hidden cursor-pointer border-1"
                    >
                      <input
                        accept="image/*"
                        className="hidden"
                        id="button-file"
                        type="file"
                        onChange={async (e) => {
                        //   function readFileAsync() {
                        //     return new Promise((resolve, reject) => {
                        //       const file = e.target.files[0];
                        //       if (!file) {
                        //         return;
                        //       }
                        //       const reader = new FileReader();
                        //
                        //       reader.onload = () => {
                        //         resolve(`data:${file.type};base64,${btoa(reader.result)}`);
                        //       };
                        //
                        //       reader.onerror = reject;
                        //
                        //       reader.readAsBinaryString(file);
                        //     });
                        //   }
                        //
                        //   const newImage = await readFileAsync();
                        //
                        //   onChange(newImage);

                          onChange(e.target.files[0]);
                        }}
                      />
                      <Icon fontSize="large" color="action">
                        cloud_upload
                      </Icon>
                    </label>
                  )}
                />
              </div>
              <Controller
                control={control}
                name="name"
                render={({ field }) => (
                  <TextField
                    {...field}
                    className="mb-24"
                    label="Name"
                    id="name"
                    error={!!errors.name}
                    helperText={errors?.name?.message}
                    variant="outlined"
                    required
                    fullWidth
                  />
                )}
              />
            </div>
            <div className="flex">
              <Controller
                control={control}
                name="headline"
                render={({ field }) => (
                  <TextField
                    {...field}
                    className="mb-24"
                    label="Headline"
                    id="headline"
                    variant="outlined"
                    fullWidth
                  />
                )}
              />
            </div>
            <div className="flex">
              <Controller
                control={control}
                name="website"
                render={({ field }) => (
                  <TextField
                    {...field}
                    className="mb-24"
                    label="Website"
                    id="website"
                    variant="outlined"
                    fullWidth
                  />
                )}
              />
            </div>
            <Divider className="mb-20"/>
            <Typography className="mb-20">Describe your company</Typography>
            <div className="flex">
              <FormControl fullWidth className="mb-20">
                <InputLabel id="demo-simple-select-label">Company Size</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={''}
                  label="Size"
                  onChange={handleSizeChange}
                >
                  <MenuItem value="1-100">1-100</MenuItem>
                  <MenuItem value="101-200">101-200</MenuItem>
                  <MenuItem value="201-500">201-500</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="flex">
              <FormControl className="w-full mb-20">
                <InputLabel id="demo-multiple-name-label">Industry</InputLabel>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  multiple
                  value={industries}
                  onChange={handleIndustryChange}
                  input={<OutlinedInput label="Name" />}
                  MenuProps={MenuProps}
                >
                  {industries.map((industry) => (
                    <MenuItem
                      key={industry.id}
                      value={industry.name}
                      // style={getStyles(industry, personName, theme)}
                    >
                      {industry.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>

            <div className="flex">
              <FormControl fullWidth className="mb-20">
                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={''}
                  label="Age"
                  onChange={handleTypeChange}
                >
                  <MenuItem value="PUBLIC">Public Company</MenuItem>
                  <MenuItem value="EDUCATION">Education Institution</MenuItem>
                  <MenuItem value="GOVERNMENT">Government Agency</MenuItem>
                  <MenuItem value="NONPROFIT">Government Agency</MenuItem>
                  <MenuItem value="PRIVATELY_HELD"></MenuItem>
                  <MenuItem value="SOLE_PROPRIETORSHIP">Sole Proprietory</MenuItem>
                  <MenuItem value="PARTNERSHIP">Partnership</MenuItem>
                  <MenuItem value="SELF_EMPLOYED">Self Employed</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div>
              <Controller
                name="acceptTermsConditions"
                control={control}
                render={({ field }) => (
                  <FormControl className="items-center" error={!!errors.acceptTermsConditions}>
                    <FormControlLabel
                      label="I read and accept terms and conditions"
                      control={<Checkbox {...field} />}
                    />
                    <FormHelperText>{errors?.acceptTermsConditions?.message}</FormHelperText>
                  </FormControl>
                )}
              />
            </div>
            <div>
              {/*<LoadingButton*/}
                {/*endIcon={<ArrowForward />}*/}
                {/*loading={loading}*/}
                {/*loadingPosition="end"*/}
                {/*variant="contained"*/}
                {/*className="rounded-6 w-full"*/}
              {/*>*/}
                {/*Send*/}
              {/*</LoadingButton>*/}
              <Button
                variant="contained"
                color="secondary"
                type="submit"
                disabled={_.isEmpty(dirtyFields) || !isValid}
                className="w-full rounded-6"
              >
                Save
              </Button>
            </div>
          </form>
        </Paper>
      }
      rightSidebarContent={
        <div>
          <CompanyPreview company={companyForm} />
        </div>
      }
      sidebarInner
      ref={pageLayout}

    />
  );
}

export default withReducer('companyRegistration', reducer)(CompanyRegistration);
