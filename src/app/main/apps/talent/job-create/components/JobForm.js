import React from 'react';
import { useTheme } from '@mui/material/styles';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';


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
    .required('Please specify your first name'),
  email: yup
    .string()
    .trim()
    .email('Please enter a valid email address')
    .required('Email is required.'),
  bio: yup
    .string()
    .trim()
    .max(500, 'Should be less than 500 chars'),
  country: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid name')
    .max(80, 'Please enter a valid name')
    .required('Please specify your country name'),
  city: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid name')
    .max(80, 'Please enter a valid name')
    .required('Please specify your city name'),
  address: yup
    .string()
    .required('Please specify your address')
    .min(2, 'Please enter a valid address')
    .max(200, 'Please enter a valid address'),
});

const JobForm = () => {
  const initialValues = {
    title: '',
    description: '',
    requirements: '',
    minimumRequirements: '',
    responsibilities: '',
    category: '',
    jobFunction: '',
    employmentType: '',
    education: '',
    country: '',
    city: '',
    address: '',
  };

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const onSubmit = (values) => {
    return values;
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit,
  });

  return (
        <Box>
          <Typography variant="h6" gutterBottom fontWeight={700}>
            Job Detail
          </Typography>
          <Typography variant={'subtitle2'} color={'text.secondary'}>
            Please read our{' '}
            <Link color={'primary'} href={'/terms-conditions'} underline={'none'}>
              terms of use
            </Link>{' '}
            to be informed how we manage your private data.
          </Typography>
          <Box paddingY={4}>
            <Divider />
          </Box>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={12}>
                <Typography
                  variant={'subtitle2'}
                  sx={{ marginBottom: 2 }}
                  fontWeight={700}
                >
                  Enter Job Title *
                </Typography>
                <TextField
                  label="Title"
                  variant="outlined"
                  name={'title'}
                  fullWidth
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.title && Boolean(formik.errors.title)
                  }
                  helperText={formik.touched.title && formik.errors.title}
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
                <TextField
                  label="Description"
                  variant="outlined"
                  name={'description'}
                  multiline
                  rows={5}
                  fullWidth
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  error={formik.touched.description && Boolean(formik.errors.description)}
                  helperText={formik.touched.description && formik.errors.description}
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
                  Requirements
                </Typography>
                <TextField
                  label="Enter a requirement"
                  variant="outlined"
                  name={'requirements'}
                  fullWidth
                  value={formik.values.requirements}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.requirements && Boolean(formik.errors.requirements)
                  }
                  helperText={formik.touched.requirements && formik.errors.requirements}
                />
                <Button variant="outlined" size="large" className="w-full rounded-4 mt-14">
                  + Add
                </Button>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Typography
                  variant={'subtitle2'}
                  sx={{ marginBottom: 2 }}
                  fontWeight={700}
                >
                  Minimum Requirements
                </Typography>
                <TextField
                  label="Enter a requirement"
                  variant="outlined"
                  name={'minimumRequirements'}
                  fullWidth
                  value={formik.values.minimumRequirements}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.requirements && Boolean(formik.errors.minimumRequirements)
                  }
                  helperText={formik.touched.minimumRequirements && formik.errors.minimumRequirements}
                />
                <Button variant="outlined" size="large" className="w-full rounded-4 mt-14">
                  + Add
                </Button>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Typography
                  variant={'subtitle2'}
                  sx={{ marginBottom: 2 }}
                  fontWeight={700}
                >
                  Responsibilities
                </Typography>
                <TextField
                  label="Enter a responsibility"
                  variant="outlined"
                  name={'responsibilities'}
                  fullWidth
                  value={formik.values.responsibilities}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.responsibilities && Boolean(formik.errors.responsibilities)
                  }
                  helperText={formik.touched.responsibilities && formik.errors.responsibilities}
                />
                <Button variant="outlined" size="large" className="w-full rounded-4 mt-14">
                  + Add
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography
                  variant={'subtitle2'}
                  sx={{ marginBottom: 2 }}
                  fontWeight={700}
                >
                  Category
                </Typography>
                <TextField
                  label="Select Category"
                  variant="outlined"
                  name={'category'}
                  fullWidth
                  value={formik.values.category}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.category && Boolean(formik.errors.category)
                  }
                  helperText={formik.touched.category && formik.errors.category}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography
                  variant={'subtitle2'}
                  sx={{ marginBottom: 2 }}
                  fontWeight={700}
                >
                  Select Job Function
                </Typography>
                <TextField
                  label="Job Function"
                  variant="outlined"
                  name={'category'}
                  fullWidth
                  value={formik.values.category}
                  onChange={formik.handleChange}
                  error={formik.touched.category && Boolean(formik.errors.category)}
                  helperText={formik.touched.category && formik.errors.category}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography
                  variant={'subtitle2'}
                  sx={{ marginBottom: 2 }}
                  fontWeight={700}
                >
                  Employment Type
                </Typography>
                <TextField
                  label="Employment Type"
                  variant="outlined"
                  name={'employmentType'}
                  fullWidth
                  value={formik.values.employmentType}
                  onChange={formik.handleChange}
                  error={formik.touched.employmentType && Boolean(formik.errors.employmentType)}
                  helperText={formik.touched.employmentType && formik.errors.employmentType}
                />
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography
                  variant={'subtitle2'}
                  sx={{ marginBottom: 2 }}
                  fontWeight={700}
                >
                  Minimum
                </Typography>
                <TextField
                  label="Minimum"
                  variant="outlined"
                  name={'salaryRangeLow'}
                  fullWidth
                  value={formik.values.salaryRangeLow}
                  onChange={formik.handleChange}
                  error={formik.touched.salaryRangeLow && Boolean(formik.errors.salaryRangeLow)}
                  helperText={formik.touched.salaryRangeLow && formik.errors.salaryRangeLow}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography
                  variant={'subtitle2'}
                  sx={{ marginBottom: 2 }}
                  fontWeight={700}
                >
                  Maximum
                </Typography>
                <TextField
                  label="Maximum"
                  variant="outlined"
                  name={'maximum'}
                  fullWidth
                  value={formik.values.salaryRangeHigh}
                  onChange={formik.handleChange}
                  error={formik.touched.salaryRangeHigh && Boolean(formik.errors.salaryRangeHigh)}
                  helperText={formik.touched.salaryRangeHigh && formik.errors.salaryRangeHigh}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography
                  variant={'subtitle2'}
                  sx={{ marginBottom: 2 }}
                  fontWeight={700}
                >
                  Currency
                </Typography>
                <TextField
                  label="Currency"
                  variant="outlined"
                  name={'currency'}
                  fullWidth
                  value={formik.values.currency}
                  onChange={formik.handleChange}
                  error={formik.touched.currency && Boolean(formik.errors.currency)}
                  helperText={formik.touched.currency && formik.errors.currency}
                />
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography
                  variant={'subtitle2'}
                  sx={{ marginBottom: 2 }}
                  fontWeight={700}
                >
                  Country
                </Typography>
                <TextField
                  label="Country"
                  variant="outlined"
                  name={'country'}
                  fullWidth
                  value={formik.values.country}
                  onChange={formik.handleChange}
                  error={formik.touched.country && Boolean(formik.errors.country)}
                  helperText={formik.touched.country && formik.errors.country}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography
                  variant={'subtitle2'}
                  sx={{ marginBottom: 2 }}
                  fontWeight={700}
                >
                  State
                </Typography>
                <TextField
                  label="State"
                  variant="outlined"
                  name={'state'}
                  fullWidth
                  value={formik.values.state}
                  onChange={formik.handleChange}
                  error={formik.touched.state && Boolean(formik.errors.state)}
                  helperText={formik.touched.state && formik.errors.state}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography
                  variant={'subtitle2'}
                  sx={{ marginBottom: 2 }}
                  fontWeight={700}
                >
                  City
                </Typography>
                <TextField
                  label="City"
                  variant="outlined"
                  name={'city'}
                  fullWidth
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  error={formik.touched.city && Boolean(formik.errors.city)}
                  helperText={formik.touched.city && formik.errors.city}
                />
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography
                  variant={'subtitle2'}
                  sx={{ marginBottom: 2 }}
                  fontWeight={700}
                >
                  Min. Month Experience
                </Typography>
                <TextField
                  label="Min. Month Experience"
                  variant="outlined"
                  name={'minimumExperience'}
                  fullWidth
                  value={formik.values.minimumExperience}
                  onChange={formik.handleChange}
                  error={formik.touched.minimumExperience && Boolean(formik.errors.minimumExperience)}
                  helperText={formik.touched.minimumExperience && formik.errors.minimumExperience}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography
                  variant={'subtitle2'}
                  sx={{ marginBottom: 2 }}
                  fontWeight={700}
                >
                  Max. Month Experience
                </Typography>
                <TextField
                  label="Max. Month Experience"
                  variant="outlined"
                  name={'maximumExperience'}
                  fullWidth
                  value={formik.values.maximumExperience}
                  onChange={formik.handleChange}
                  error={formik.touched.maximumExperience && Boolean(formik.errors.maximumExperience)}
                  helperText={formik.touched.maximumExperience && formik.errors.maximumExperience}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography
                  variant={'subtitle2'}
                  sx={{ marginBottom: 2 }}
                  fontWeight={700}
                >
                  Education
                </Typography>
                <TextField
                  label="Education"
                  variant="outlined"
                  name={'education'}
                  fullWidth
                  value={formik.values.education}
                  onChange={formik.handleChange}
                  error={formik.touched.education && Boolean(formik.errors.education)}
                  helperText={formik.touched.education && formik.errors.education}
                />
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
                  <Button size={'large'} variant={'contained'} type={'submit'} className="rounded-6">
                    Create
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Box>
  );
};

export default JobForm;
