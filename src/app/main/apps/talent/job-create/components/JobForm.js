import FuseUtils from '@fuse/utils/FuseUtils';
import { yupResolver } from '@hookform/resolvers/yup';
import { styled } from '@mui/material/styles';
import * as yup from 'yup';
import _ from '@lodash';
import { useTheme } from '@mui/material/styles';
import { useFormik } from 'formik';
import { useForm, Controller } from 'react-hook-form';
import React, { useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, useParams } from 'react-router-dom';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import WYSIWYGEditor from 'app/shared-components/WYSIWYGEditor';
import JobDetailHeader from '../../../jobs/components/JobDetailHeader';
import JobDetailBody from '../../../jobs/components/JobDetailBody';
import CardChecklistItem from './checklist/CardChecklistItem';
import CardAddChecklistItem from './checklist/CardAddChecklistItem';
import JobModel from '../../models/JobModel';
import FormList from '../../components/FormList/FormList';

import {
  getJob,
  addJob,
  updateJob
} from '../../store/jobSlice';

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

const names = [
  'AngularJs', 'Analytic', 'C', 'C++', 'Java', 'Ruby'
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}


const validationSchema = yup.object({
  title: yup
    .string()
    .trim()
    .min(10, 'Please enter a valid title')
    .max(50, 'Please enter a valid title')
    .required('Please specify a title'),


  // description: yup
  //   .string()
  //   .trim()
  //   .max(500, 'Should be less than 500 chars'),
  // category: yup
  //   .string()
  //   .trim()
  //   .min(10, 'Please enter a valid requirements')
  //   .max(50, 'Please enter a valid requirements')
  //   .required('Please specify your requirements'),
  // jobFunction: yup
  //   .string()
  //   .trim()
  //   .min(10, 'Please enter a valid requirements')
  //   .max(50, 'Please enter a valid requirements')
  //   .required('Please specify your requirements'),
  // employmentType: yup
  //   .string()
  //   .trim()
  //   .min(10, 'Please enter a valid requirements')
  //   .max(50, 'Please enter a valid requirements')
  //   .required('Please specify your requirements'),
  // country: yup
  //   .string()
  //   .trim()
  //   .min(2, 'Please enter a valid country')
  //   .max(80, 'Please enter a valid country')
  //   .required('Please specify your country'),
  // city: yup
  //   .string()
  //   .trim()
  //   .min(2, 'Please enter a valid city')
  //   .max(80, 'Please enter a valid city')
  //   .required('Please specify your city')
});

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

const Root = styled('div')(({ theme }) => ({
    '.field-container': {

      '& fieldset': {
        // borderRadius: theme.shape.borderRadius,
        borderRadius: 0,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 0,
        borderRightWidth: 0
      },

      '& > div:first-child fieldset': {
        background: 'white',
        borderRadius: '4px 0 0 4px',
        borderBottomRight: 0,
        borderLeftWidth: 1
      },
      '& > div:last-child fieldset': {
        borderRadius: '0 4px 4px 0',
        borderRightWidth: 1,
      }
    }
}));


const JobForm = (props) => {
  const dispatch = useDispatch();
  const routeParams = useParams();
  const theme = useTheme();
  const job = useSelector(({ jobCreate }) => jobCreate.job);


  const defaultValues = _.merge(
    {},
    JobModel(),
    props.job
  );
  const { formState, handleSubmit, getValues, reset, watch, setValue, control } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const { isValid, dirtyFields, errors } = formState;
  const jobForm = watch();


  const [personName, setPersonName] = React.useState([]);
  const [requirements, setRequirements] = React.useState([]);
  const [currency, setCurrency] = React.useState('EUR');


  useEffect(() => {
    if (!props.job || props.variant === 'new' || !props.onChange) {
      return;
    }
    if (!_.isEqual(props.job, jobForm)) {
      props.onChange(jobForm);
    }
  }, [jobForm, props, defaultValues]);

  /**
   * Create New Job
   */
  function onCreate(data) {
    if (!props.onCreate) {
      return;
    }
    props.onCreate(data);
  }

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  const handleDescription = (key) => (event) => {
    setState({
      ...state,
      [key]: event.target.value
    });
  };

  const handleRequirements = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };



  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };


  /**
   * Form Submit
   */
  function onSubmit() {
    dispatch(addJob(getValues()));
  }

  if(!Object.keys(jobForm).length === 0){
    return
  }

  return (
    <Root>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={7}>
          <Box className="flex flex-col items-start justify-start sm:px-20">
              <Grid container spacing={4}>
                <Grid item xs={12} sm={12}>
                  <Typography
                    variant={'subtitle2'}
                    sx={{ marginBottom: 2 }}
                    fontWeight={700}
                  >
                    Enter Job Title *
                  </Typography>
                  <Controller
                    name="title"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        className="mt-8 mb-16"
                        error={!!errors.title}
                        required
                        helperText={errors?.title?.message}
                        label="Title"
                        autoFocus
                        id="title"
                        variant="outlined"
                        fullWidth
                      />
                    )}
                  />

                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant={'subtitle2'}
                    sx={{ marginBottom: 2 }}
                    fontWeight={700}
                  >
                    Description
                  </Typography>
                  <Controller
                    className="mt-8 mb-16"
                    render={({ field }) => <WYSIWYGEditor {...field} onEditorStateChange={handleDescription} />}
                    name="description"
                    control={control}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Typography
                    variant={'subtitle2'}
                    sx={{ marginBottom: 2 }}
                    fontWeight={700}
                  >
                    Qualifications
                  </Typography>
                  <Controller
                    name="qualifications"
                    control={control}
                    defaultValue={[]}
                    render={({ field: { onChange, value } }) => {
                      return (
                        <div className="px-16">
                          <FormList list={value} onListChange={(val) => onChange(val)} />
                        </div>
                      );
                    }}
                  />

                </Grid>
                <Grid item xs={12} sm={12}>
                  <Typography
                    variant={'subtitle2'}
                    sx={{ marginBottom: 2 }}
                    fontWeight={700}
                  >
                    Minimum Qualifications
                  </Typography>
                  <Controller
                    name="minimumQualifications"
                    control={control}
                    defaultValue={[]}
                    render={({ field: { onChange, value } }) => {
                      return (
                        <div className="px-16">
                          <FormList list={value} onListChange={(val) => onChange(val)} />
                        </div>
                      );
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Typography
                    variant={'subtitle2'}
                    sx={{ marginBottom: 2 }}
                    fontWeight={700}
                  >
                    Responsibilities
                  </Typography>
                  <Controller
                    name="responsibilities"
                    control={control}
                    defaultValue={[]}
                    render={({ field: { onChange, value } }) => {
                      return (
                        <div className="px-16">
                          <FormList list={value} onListChange={(val) => onChange(val)} />
                        </div>
                      );
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid item xs={12} sm={12} className="listing-type">
                  <Typography
                    variant={'subtitle2'}
                    sx={{ marginBottom: 2 }}
                    fontWeight={700}
                  >
                    Listing Type
                  </Typography>
                  <Paper className="field-container flex flex-row items-start justify-end shadow-none py-5 px-5">
                    <Grid item xs={5} sm={5}>
                      <TextField
                        id="standard-select-currency"
                        select
                        label="Category"
                        value={currency}
                        onChange={handleChange}
                        className="flex"
                      >
                        {currencies.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid item xs={5} sm={5}>
                      <TextField
                        id="standard-select-currency"
                        select
                        label="Job Function"
                        value={currency}
                        onChange={handleChange}
                        className="flex"
                      >
                        {currencies.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid item xs={2} sm={2}>
                      <TextField
                        id="standard-select-currency"
                        select
                        label="Employment Type"
                        value={currency}
                        onChange={handleChange}
                        className="flex"
                      >
                        {currencies.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid item xs={12} sm={12} className="salary">
                  <Typography
                    variant={'subtitle2'}
                    sx={{ marginBottom: 2 }}
                    fontWeight={700}
                  >
                    Salary
                  </Typography>
                  <Paper className="field-container flex flex-row items-start justify-end shadow-none py-5 px-5">
                    <Grid item xs={4} sm={4}>
                      <TextField
                        required
                        id="salary-min"
                        label="Min"
                        defaultValue={0}
                        className="flex border-r-0"
                      />
                    </Grid>
                    <Grid item xs={4} sm={4}>
                      <TextField
                        required
                        id="salary-max"
                        label="Max"
                        defaultValue={0}
                        className="flex"
                      />
                    </Grid>
                    <Grid item xs={4} sm={4}>
                      <TextField
                        id="standard-select-currency"
                        select
                        label="Currency"
                        value={currency}
                        onChange={handleChange}
                        className="flex"
                      >
                        {currencies.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid item xs={12} sm={12} className="location">
                  <Typography
                    variant={'subtitle2'}
                    sx={{ marginBottom: 2 }}
                    fontWeight={700}
                  >
                    Location
                  </Typography>
                  <Paper className="field-container flex flex-row items-start justify-end shadow-none py-5 px-5">
                    <Grid item xs={4} sm={4}>
                      <TextField
                        id="standard-select-currency"
                        select
                        label="City"
                        value={currency}
                        onChange={handleChange}
                        className="flex"
                      >
                        {currencies.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid item xs={4} sm={4}>
                      <TextField
                        id="standard-select-currency"
                        select
                        label="State"
                        value={currency}
                        onChange={handleChange}
                        className="flex"
                      >
                        {currencies.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid item xs={4} sm={4}>
                      <TextField
                        id="standard-select-currency"
                        select
                        label="Country"
                        value={currency}
                        onChange={handleChange}
                        className="flex"
                      >
                        {currencies.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid item xs={12} sm={12} className="experiences">
                  <Typography
                    variant={'subtitle2'}
                    sx={{ marginBottom: 2 }}
                    fontWeight={700}
                  >
                    Experiences
                  </Typography>
                  <Paper className="field-container flex flex-row items-start justify-end shadow-none py-5 px-5">
                    <Grid item xs={4} sm={4}>
                      <TextField
                        id="standard-select-currency"
                        select
                        label="Min Month"
                        value={currency}
                        onChange={handleChange}
                        className="flex"
                      >
                        {currencies.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid item xs={4} sm={4}>
                      <TextField
                        id="standard-select-currency"
                        select
                        label="Max Month"
                        value={currency}
                        onChange={handleChange}
                        className="flex"
                      >
                        {currencies.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid item xs={4} sm={4}>
                      <TextField
                        id="standard-select-currency"
                        select
                        label="Education"
                        value={currency}
                        onChange={handleChange}
                        className="flex"
                      >
                        {currencies.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant={'subtitle2'}
                    sx={{ marginBottom: 2 }}
                    fontWeight={700}
                  >
                    Skills
                  </Typography>
                  <FormControl sx={{width: '100%' }}>
                    <InputLabel id="demo-multiple-chip-label">Skills</InputLabel>
                    <Select
                      labelId="demo-multiple-chip-label"
                      id="demo-multiple-chip"
                      multiple
                      value={personName}
                      onChange={handleChange}
                      input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                      renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                          {selected.map((value) => (
                            <Chip key={value} label={value} />
                          ))}
                        </Box>
                      )}
                      MenuProps={MenuProps}
                    >
                      {names.map((name) => (
                        <MenuItem
                          key={name}
                          value={name}
                          style={getStyles(name, personName, theme)}
                        >
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item container xs={12}>
                  <Box
                    display="flex"
                    flexDirection={{ xs: 'column', sm: 'row' }}
                    alignItems={{ xs: 'stretched', sm: 'center' }}
                    justifyContent={'space-between'}
                    width={1}
                    margin={'0 auto'}
                  >
                    <Box marginBottom={{ xs: 1, sm: 0 }}>
                      <Typography
                        variant={'subtitle2'}
                        color={'text.secondary'}
                        align={'center'}
                      >
                        By clicking "Create" button you agree with our{' '}
                        <Link
                          component={'a'}
                          color={'primary'}
                          href={'/company-terms'}
                          underline={'none'}
                        >
                          company terms and conditions.
                        </Link>
                      </Typography>
                    </Box>
                    <div className="px-16">
                      <Button
                        variant="contained"
                        color="secondary"
                        type="submit"
                        disabled={_.isEmpty(dirtyFields) || !isValid}
                        className="rounded-6"
                        onClick={onSubmit}
                      >
                        Save
                      </Button>
                    </div>
                  </Box>
                </Grid>
              </Grid>
            {/*</form>*/}
          </Box>
        </Grid>
        <Grid item xs={12} sm={5}>
          {Object.keys(jobForm).length !== 0 && (
          <Card
            component={motion.div}
            variant="outlined"
            className="flex flex-col items-center justify-start w-full overflow-hidden rounded-8 mb-20 "
            >

            <JobDetailHeader company={jobForm.company} />
            <JobDetailBody job={jobForm} preview="true"/>
            </Card>
          )}
        </Grid>
      </Grid>
    </Root>
  );
};

JobForm.propTypes = {};
JobForm.defaultProps = {
  variant: 'edit',
  job: null,
};

export default withRouter(JobForm);
