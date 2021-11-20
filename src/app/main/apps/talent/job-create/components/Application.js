import FuseUtils from '@fuse/utils/FuseUtils';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import _ from '@lodash';
import { useTheme } from '@mui/material/styles';
import { useFormik } from 'formik';
import { useForm, Controller } from 'react-hook-form';
import React, { useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Checkbox from '@mui/material/Checkbox';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';
import Icon from '@mui/material/Icon';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import {
  getJob,
  addJob,
  updateJob
} from '../../store/jobSlice';
import {getCompanyTemplates} from "../../store/templateSlice";
import {dateDiff} from "../../../../../utils/helper";

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




const validationSchema = yup.object({
  questionTemplate: yup
    .object()
    .required('Please specify your a template')

});

const initialValues = {
  email: '',
  firstName: '',
  lastName: '',
  phoneNumber: '',
  resume: '',
  coverLetter: ''
};


const Application = (props) => {
  const dispatch = useDispatch();
  const routeParams = useParams();
  const theme = useTheme();
  const { control, watch, reset, handleSubmit, formState, getValues } = useForm({
    mode: 'onChange',
    initialValues,
    resolver: yupResolver(validationSchema),
  });
  const form = watch();
  const { isValid, dirtyFields, errors } = formState;
  /**
   * Initialize Form
   */
  const initForm = useCallback(() => {

    reset({
      ...initialValues,
      id: FuseUtils.generateGUID(),
    });

  }, [reset]);


  useEffect(() => {
    initForm()

  }, [dispatch, routeParams, initForm]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

  };

  /**
   * Form Submit
   */
  function onSubmit(data) {
    dispatch(addJob(data));
  }

  if(!Object.keys(form).length === 0){
    return
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col md:overflow-hidden"
    >

      <Grid container spacing={2} className="p-20 bg-grey-50">
        <Grid item xs={12} sm={12} className="flex flex-row">
          <Typography
            variant={'subtitle2'}
            sx={{ marginBottom: 2 }}
            fontWeight={700}
          >
            Interested in this job?
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} className="flex flex-row">
          <Avatar className="mx-4 border-1"  sx={{ width: 60, height: 60 }} alt={''} src='assets/images/avatars/garry.jpg' />
          <div className="flex flex-1 flex-col relative overflow-hidden px-8">
            <Typography
              className="truncate text-10"
              color='textSecondary'
            >
              CONTACT PERSON:
            </Typography>
            <Typography className="">
              John Doe
            </Typography>

            <Typography className="font-medium" color='textSecondary'>
              Hr Manager
            </Typography>

          </div>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Controller
            control={control}
            name="firstName"
            className="bg-white border-1"
            render={({ field }) => (
              <TextField
                {...field}
                label="First Name"
                id="firstName"
                error={!!errors.firstName}
                helperText={errors?.firstName?.message}
                required
                fullWidth
              />
            )}
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <Controller
            control={control}
            name="lastName"
            render={({ field }) => (
              <TextField
                {...field}
                className="bg-white border-1"
                label="Last Name"
                id="lastName"
                error={!!errors.lastName}
                helperText={errors?.lastName?.message}
                required
                fullWidth
              />
            )}
          />
        </Grid>
        {props.applicationForm.email.isDisplay &&
        <Grid item xs={12} sm={12}>
          <Controller
            control={control}
            name="email"
            render={({field}) => (
              <TextField
                {...field}
                className="bg-white border-1"
                label="Email"
                placeholder="Your E-mail"
                id="email"
                error={!!errors.email}
                helperText={errors?.email?.message}
                required
                fullWidth
              />
            )}
          />
        </Grid>
        }
        <Grid item xs={12} sm={12}>
          <Controller
            control={control}
            name="phone"
            render={({ field }) => (
              <TextField
                {...field}
                className="bg-white border-1 mb-16"
                label="Phone"
                placeholder="Your phone number"
                id="email"
                error={!!errors.email}
                helperText={errors?.email?.message}
                required
                fullWidth
              />
            )}
          />
        </Grid>
        {props.applicationForm.resume.isDisplay &&
        <Grid item xs={12} sm={12}>
          <Controller
            name="resume"
            control={control}
            render={({field: {onChange, value}}) => (
              <label
                htmlFor="button-file"
                className="productImageUpload flex items-center justify-center relative w-full h-48 rounded-4 border-1 shadow-none bg-white mb-14 overflow-hidden cursor-pointer hover:shadow-lg"
              >
                <input
                  accept="image/*"
                  className="hidden"
                  id="button-file"
                  type="file"
                  onChange={async (e) => {
                    function readFileAsync() {
                      return new Promise((resolve, reject) => {
                        const file = e.target.files[0];
                        if (!file) {
                          return;
                        }
                        const reader = new FileReader();

                        reader.onload = () => {
                          resolve({
                            id: FuseUtils.generateGUID(),
                            url: `data:${file.type};base64,${btoa(reader.result)}`,
                            type: 'image',
                          });
                        };

                        reader.onerror = reject;

                        reader.readAsBinaryString(file);
                      });
                    }

                    const newImage = await readFileAsync();

                    onChange([newImage, ...value]);
                  }}
                />
                <Icon fontSize="large" color="action">
                  cloud_upload
                </Icon>
                <Typography className="text-12 ml-5">
                  Upload CV{props.applicationForm.resume.isRequired?'*': ''}
                </Typography>
              </label>
            )}
          />
        </Grid>
        }
        {props.applicationForm.coverLetter.isDisplay &&
        <Grid item xs={12} sm={12}>
          <Controller
            name="resume"
            control={control}
            render={({field: {onChange, value}}) => (
              <label
                htmlFor="button-file"
                className="productImageUpload flex items-center justify-center relative w-full h-48 rounded-4 border-1 shadow-none bg-white mb-14 overflow-hidden cursor-pointer hover:shadow-lg"
              >
                <input
                  accept="image/*"
                  className="hidden"
                  id="button-file"
                  type="file"
                  onChange={async (e) => {
                    function readFileAsync() {
                      return new Promise((resolve, reject) => {
                        const file = e.target.files[0];
                        if (!file) {
                          return;
                        }
                        const reader = new FileReader();

                        reader.onload = () => {
                          resolve({
                            id: FuseUtils.generateGUID(),
                            url: `data:${file.type};base64,${btoa(reader.result)}`,
                            type: 'image',
                          });
                        };

                        reader.onerror = reject;

                        reader.readAsBinaryString(file);
                      });
                    }

                    const newImage = await readFileAsync();

                    onChange([newImage, ...value]);
                  }}
                />
                <Icon fontSize="large" color="action">
                  cloud_upload
                </Icon>
                <Typography className="text-12 ml-5">
                  Cover Letter{props.applicationForm.coverLetter.isRequired?'*': ''}
                </Typography>
              </label>
            )}
          />
        </Grid>
        }
        {props.applicationForm.photo.isDisplay &&
        <Grid item xs={12} sm={12}>
          <Controller
            name="resume"
            control={control}
            render={({field: {onChange, value}}) => (
              <label
                htmlFor="button-file"
                className="productImageUpload flex items-center justify-center relative w-full h-48 rounded-4 border-1 shadow-none bg-white mb-14 overflow-hidden cursor-pointer hover:shadow-lg"
              >
                <input
                  accept="image/*"
                  className="hidden"
                  id="button-file"
                  type="file"
                  onChange={async (e) => {
                    function readFileAsync() {
                      return new Promise((resolve, reject) => {
                        const file = e.target.files[0];
                        if (!file) {
                          return;
                        }
                        const reader = new FileReader();

                        reader.onload = () => {
                          resolve({
                            id: FuseUtils.generateGUID(),
                            url: `data:${file.type};base64,${btoa(reader.result)}`,
                            type: 'image',
                          });
                        };

                        reader.onerror = reject;

                        reader.readAsBinaryString(file);
                      });
                    }

                    const newImage = await readFileAsync();

                    onChange([newImage, ...value]);
                  }}
                />
                <Icon fontSize="large" color="action">
                  cloud_upload
                </Icon>
                <Typography className="text-12 ml-5">
                  Photo{props.applicationForm.photo.isRequired?'*': ''}
                </Typography>
              </label>
            )}
          />
        </Grid>
        }
        <Grid item xs={12} sm={12}>
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

          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="w-full mx-auto mt-8 mb-16"
            aria-label="APPLY"
            disabled={_.isEmpty(dirtyFields) || !isValid}
            value="legacy"
          >
            Apply
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography
            fontWeight={500}
          >
            Already applied?
          </Typography>
          <Typography className="">
            <Link href="#" color="secondary" underline="hover">Check your application status</Link>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <Typography
            fontWeight={500} className="mb-10"
          >
            Share this job:
          </Typography>
          <Stack direction="row" spacing={2}>
            <Avatar sx={{ width: 30, height: 30 }} alt="linkedin" src="/assets/images/socials/linkedin.png" />
            <Avatar sx={{ width: 30, height: 30 }} alt="facebook" src="/assets/images/socials/facebook.png" />
            <Avatar sx={{ width: 30, height: 30 }} alt="twitter" src="/assets/images/socials/twitter.png" />
          </Stack>
        </Grid>

      </Grid>
    </form>
  );
};

export default Application;
