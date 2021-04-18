import FuseChipSelect from '@fuse/core/FuseChipSelect';
import { useDebounce, useForm, useUpdateEffect } from '@fuse/hooks';
import { makeStyles } from '@material-ui/core/styles';

import _ from '@lodash';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import ClearButton from '@material-ui/icons/Clear';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import LabelModel from 'app/main/apps/scrumboard/model/LabelModel';
import moment from 'moment';
import React, { useCallback, useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addLabel } from './store/boardSlice';
import { addJob, jobTitleSuggestion,updateJob } from './store/jobSlice';
import { showMessage } from 'app/store/fuse/messageSlice';
import { selectDepartments } from './store/departmentsSlice';
import { selectCategories } from './store/categoriesSlice';
import { Editor } from '@tinymce/tinymce-react';
import { Autocomplete } from '@material-ui/lab';


const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));


const JobForm = React.forwardRef((props, ref) => {
  const rootRef = useRef(null);
  const dispatch = useDispatch();
  const classes = useStyles();
  const skills = useSelector(({ jobCreateApp }) => jobCreateApp.skills);
  const tags = useSelector(({ jobCreateApp }) => jobCreateApp.tags);
  const labels = useSelector(({ jobCreateApp }) => jobCreateApp.labels);
  const addresses = useSelector(({ jobCreateApp }) => jobCreateApp.address);
  const departments = useSelector(selectDepartments);
  const categories = useSelector(selectCategories);
  const jobFunctions = useSelector(({ jobCreateApp }) => jobCreateApp.jobFunctions);
  const industries = useSelector(({ jobCreateApp }) => jobCreateApp.industries);
  const titleSuggestions = useSelector(({ jobCreateApp }) => jobCreateApp.job.titleSuggestions);
  const formRef = useRef(null);
  const [newRequirement, setNewRequirement] = useState(null);
  const [newMinRequirement, setNewMinRequirement] = useState(null);
  const [showRequirement, setShowRequirement] = useState(false);
  const [showMinRequirement, setShowMinRequirement] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const job = useSelector(({ jobCreateApp }) => jobCreateApp.job.job);
  const [searchText, setSearchText] = useState("");

  const { form: cardForm, handleChange, setForm, setInForm } = useForm(job);


  const employmentType = [
    {
      shortCode: "FULLTIME",
      name: "Full-Time"
    },
    {
      shortCode: "PARTTIME",
      name: "Part-Time"
    },
    {
      shortCode: "FREELANCE",
      name: "Freelance"
    },
    {
      shortCode: "CONTRACT",
      name: "Contract"
    },
    {
      shortCode: "INTERN",
      name: "intern"
    }
  ]

  const educations = [
    {
      shortCode: "ASSOCIATE",
      name: "Associate"
    },
    {
      shortCode: "BACHELOR",
      name: "Bachelor"
    },
    {
      shortCode: "MASTER",
      name: "Master"
    },
    {
      shortCode: "PHD",
      name: "PHD"
    }
  ]

  // const categories = [

  //   {
  //     name: 'Accounting'
  //   },
  //   {

  //     name: 'Administrative & Clerical'
  //   },
  //   {

  //     name: 'Agriculture'
  //   },
  //   {

  //     name: 'Architectural Services'
  //   }
  //   ,
  //   {

  //     name: 'Arts & entertainment'
  //   },
  //   {

  //     name: 'Automotive'
  //   },
  //   {

  //     name: 'Banking'
  //   },
  //   {

  //     name: 'Biotech, Pharma, R&D'
  //   },
  //   {

  //     name: 'Construction'
  //   },
  //   {

  //     name: 'Consulting'
  //   }

  // ]

  function singleChipChange(name, value) {
    setInForm(
      name,
      value
    );
  }
  function chipChange(name, value) {
    setInForm(
      name,
      value.map(item => (item.value ? item.value : item))
    );
  }

  function handleRequirements(type) {
    if (type === "qualifications") {
      if (!showRequirement) {
        setShowRequirement(true);
      }
      else if (newRequirement && newRequirement.length > 0) {
        chipChange('qualifications', [...cardForm.qualifications, newRequirement]);
        setNewRequirement("");
        setShowRequirement(false);
      }
    }
    else if (type === "minimumQualifications") {
      if (!showMinRequirement) {
        setShowMinRequirement(true);
      }
      else if (newMinRequirement && newMinRequirement.length > 0) {
        chipChange('minimumQualifications', [...cardForm.minimumQualifications, newMinRequirement]);
        setNewMinRequirement("");
        setShowMinRequirement(false);
      }
    }
  }


  const handleMouseDownRemoveItem = (event) => {
    event.preventDefault();

  };

  const handleQualificationUpdate = (e, type, index) => {
    if (type === "qualification") {
      chipChange('qualifications', cardForm.qualifications.map((item, idx) => {
        if (index === idx) {
          return e.target.value;
        }
        else {
          return item;
        }
      })
      )
    }
    else {
      chipChange('minimumQualifications', cardForm.minimumQualifications.map((item, idx) => {
        if (index === idx) {
          return e.target.value;
        }
        else {
          return item;
        }
      })
      )
    }
  }



  React.useImperativeHandle(ref, () => ({
    handleFormSubmit() {
      setSubmitted(true);
      if (
        cardForm.title && cardForm.title.length > 0 &&
        cardForm.description && cardForm.description.length > 0 &&
        cardForm.country && cardForm.country.length > 0 &&
        cardForm.state && cardForm.state.length > 0 &&
        cardForm.postalCode && cardForm.postalCode.length > 0 &&
        cardForm.city && cardForm.city.length > 0 &&
        cardForm.education && cardForm.education.length > 0 &&
        cardForm.category && cardForm.category.length > 0 &&
        cardForm.minMonthExperience && cardForm.minMonthExperience > 0 &&
        cardForm.maxMonthExperience && cardForm.maxMonthExperience > 0 &&
        cardForm.qualifications && cardForm.qualifications.length > 0 &&
        cardForm.minimumQualifications && cardForm.minimumQualifications.length > 0 &&
        cardForm.employmentType && cardForm.employmentType.length > 0 &&
        cardForm.skills && cardForm.skills.length > 0 &&
        cardForm.tags && cardForm.tags.length > 0
        &&
        cardForm.labels && cardForm.labels.length > 0
      ) {
        if (cardForm.jobId)
          dispatch(updateJob(cardForm));
        else
          dispatch(addJob(cardForm));
      }
      else
        dispatch(showMessage({ message: 'all fields are required' }));
    }
  }));
  const handleEditorChange = (content, editor) => {
    console.log('Content was updated:', content);
    setInForm(
      "description",
      content
    )
  }
  useEffect(() => {
    if (job)
      setForm(job);
  }, [job])

  useEffect(() => {
    dispatch(jobTitleSuggestion(searchText));
  }, [])
  return (

    <DialogContent className="p-16 sm:p-64" ref={rootRef}>

      <div className="flex items-center mb-24 w-full">

        <Autocomplete
          className="w-full"
          label="Title"
          name="title"
          freeSolo
          value={cardForm.title}
          onChange={(event, newValue) => {
            setInForm("title", newValue);
          }}
         // onChange={(e) => setInForm("title", e.target.value)}
          options={titleSuggestions && titleSuggestions.map((title) => title)}
          renderInput={(params) => <TextField {...params} label="Title" variant="outlined" fullWidth />}
        />
      </div>

      <div className="w-full mb-24">
        <Editor
          initialValue={cardForm.description}
          init={{
            height: 200,
            menubar: false,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount'
            ],
            toolbar:
              'undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help'
          }}
          onEditorChange={handleEditorChange} />

        {/* <TextField
            label="Description"
            name="description"
            multiline
            rows="4"
            value={cardForm.description}
            onChange={handleChange}
            variant="outlined"
            fullWidth
            required
            error={submitted && cardForm.description === ""}
          /> */}
      </div>

      <div className="w-full mb-24">
        <fieldset className="p-24 border-1 rounded-8">
          <legend className="font-600 text-16">Qualifications</legend>
          <div>
            <div className="flex items-center mb-12">
              <Typography className="font-600 text-16">Requirements</Typography>
            </div>
            {
              cardForm.qualifications &&
              cardForm.qualifications.map((item, index) =>
              (
                <div className="flex items-center w-full" key={index}>

                  <FormControl className={classes.margin + " w-full"}>
                    {/* <InputLabel htmlFor="input-with-icon-adornment">{item}</InputLabel> */}
                    <Input
                      id="input-with-icon-adornment"
                      defaultValue={item}
                      name={"qualifications" + index}
                      onChange={(e) => handleQualificationUpdate(e, "qualifications", index)}
                      endAdornment={
                        <InputAdornment position="end">
                          <ClearButton
                            aria-label="remove"
                            onClick={() => { chipChange('qualifications', cardForm.qualifications.filter((req) => req !== item)) }}
                            onMouseDown={handleMouseDownRemoveItem}
                          >
                          </ClearButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </div>
              ))
            }
            {
              showRequirement &&
              <TextField
                label="Requirements"
                name="description"
                defaultValue={newRequirement}
                className="mt-10"
                onChange={(e) => setNewRequirement(e.target.value)}
                variant="outlined"
                fullWidth
              />
            }
            <Button color="primary"
              className="w-full mt-10 border-1 border-dashed"
              onClick={() => { handleRequirements("qualifications") }}>Add</Button>
          </div>

          <div>
            <div className="flex items-center mt-16 mb-12">
              <Typography className="font-600 text-16">Minimum Requirements</Typography>
            </div>
            {
              cardForm.minimumQualifications &&
              cardForm.minimumQualifications.map((item, index) =>
              (
                <div className="flex items-center w-full" key={index}>

                  <FormControl className={classes.margin + " w-full"}>
                    {/* <InputLabel htmlFor="input-with-icon-adornment">{item}</InputLabel> */}
                    <Input
                      id="input-with-icon-adornment"
                      defaultValue={item}
                      onChange={(e) => handleQualificationUpdate(e, "minimumQualifications", index)}
                      endAdornment={
                        <InputAdornment position="end">
                          <ClearButton
                            aria-label="remove"
                            onClick={() => { chipChange('minimumQualifications', cardForm.minimumQualifications.filter((item) => item !== item)) }}
                            onMouseDown={handleMouseDownRemoveItem}
                          >
                          </ClearButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </div>
              ))
            }
            {
              showMinRequirement &&
              <TextField
                label="Minimum Requirements"
                name="description"
                defaultValue={newMinRequirement}
                className="mt-10"
                onChange={(e) => setNewMinRequirement(e.target.value)}
                variant="outlined"
                fullWidth
              />
            }
            <Button color="primary" className="w-full mt-10 border-1 border-dashed" onClick={() => { handleRequirements("minimumQualifications") }}>Add</Button>
          </div>
        </fieldset>
      </div>

      <div className="flex flex-col mb-24">
        <fieldset className="p-20 border-1  rounded-8">
          <legend className="font-600 text-16">Location</legend>
          <div className="flex flex-row flex-wrap">

            <div className="flex-1 mb-24 mr-10">
              <div className="flex items-center mb-12">
                <Typography className="font-600 text-16"> Country</Typography>
              </div>

              <FuseChipSelect
                error={submitted && cardForm.country === ""}
                className="text-24"
                value={{
                  value: cardForm.country,
                  label: cardForm.country
                }}
                onChange={value => singleChipChange('country', value.value)}
                placeholder="Select country"
                textFieldProps={{
                  variant: 'outlined'
                }}
                options={addresses && addresses.data && Object.keys(_.groupBy(addresses.data, 'country')).map(address => ({
                  value: address,
                  label: (
                    <span className="flex items-center">
                      <span className="mx-8">{address}</span>
                    </span>
                  )
                }))}

                variant="fixed"
              />
            </div>
            <div className="flex-1 mb-24 mr-10">
              <div className="flex items-center  mb-12">

                <Typography className="font-600 text-16 mx-8">State</Typography>
              </div>

              <FuseChipSelect
                error={submitted && cardForm.state === ""}
                className="text-24"
                value={addresses && addresses.data &&
                  addresses.data.filter(m => m.country === cardForm.country && m.state === cardForm.state).length > 0
                  && ({
                    value: cardForm.state,
                    label: cardForm.state
                  })
                }
                onChange={value => singleChipChange('state', value.value)}
                placeholder="Select state"
                textFieldProps={{
                  variant: 'outlined'
                }}
                options={addresses && addresses.data && Object.keys(_.groupBy(addresses.data.filter(m => m.country === cardForm.country), 'state')).map(address => ({
                  value: address,
                  label: (
                    <span className="flex items-center">
                      <span className="mx-8">{address}</span>
                    </span>
                  )
                }))}
                variant="fixed"
              />
            </div>
            <div className="flex-1 mb-24 mr-10">
              <div className="flex items-center mb-12">
                <Typography className="font-600 text-16"> City</Typography>
              </div>
              <FuseChipSelect
                error={submitted && cardForm.city === ""}
                className="text-24"
                value={addresses && addresses.data &&
                  addresses.data.filter(m => m.state === cardForm.state && m.city === cardForm.city).length > 0
                  && ({
                    value: cardForm.city,
                    label: cardForm.city
                  })
                }
                onChange={value => singleChipChange('city', value.value)}
                placeholder="Select city"
                textFieldProps={{
                  variant: 'outlined'
                }}
                options={addresses && addresses.data && Object.keys(_.groupBy(addresses.data.filter(m => m.state === cardForm.state), 'city')).map(address => ({
                  value: address,
                  label: (
                    <span className="flex items-center">
                      <span className="mx-8">{address}</span>
                    </span>
                  )
                }))}
                variant="fixed"
              />
            </div>
            <div className="flex-1 mb-24">
              <div className="flex items-center mb-12">
                <Typography className="font-600 text-16 mx-8">Zip Code</Typography>
              </div>

              <TextField className="w-full"
                error={submitted && cardForm.postalCode === ""}
                type="text"
                name="postalCode"
                value={cardForm.postalCode}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                required></TextField>
            </div>

          </div>
        </fieldset>
      </div>

      <div className="flex flex-col mb-24">
        <fieldset className="p-20 border-1  rounded-8">
          <legend className="font-600 text-16">Experiences</legend>
          <div className="flex">
            <div className="flex-1 mb-24 mr-10">
              <div className="flex items-center mb-12">

                <Typography className="font-600 text-16"> Employment Type</Typography>
              </div>

              <FuseChipSelect
                error={submitted && cardForm.employmentType === ""}
                className=""
                name="employmentType"
                value={{ value: cardForm.employmentType, label: cardForm.employmentType }}
                onChange={value => singleChipChange('employmentType', value.value)}
                placeholder="Select Employment"
                textFieldProps={{
                  variant: 'outlined'
                }}
                options={employmentType.map(type => ({
                  value: type.shortCode,
                  label: (
                    <span className="flex items-center">
                      <span className="mx-8">{type.name}</span>
                    </span>
                  )
                }))}
                variant="fixed"
              />
            </div>
            <div className="flex-1 mb-24">
              <div className="flex items-center mb-12">

                <Typography className="font-600 text-16"> Required education</Typography>
              </div>

              <FuseChipSelect
                error={submitted && cardForm.education === ""}
                className=""
                value={{
                  value: cardForm.education,
                  label: cardForm.education
                }}
                onChange={value => singleChipChange('education', value.value)}
                placeholder="Select education"

                textFieldProps={{
                  variant: 'outlined'
                }}
                options={educations.map(education => ({
                  value: education.shortCode,
                  label: (
                    <span className="flex items-center">
                      <span className="mx-8">{education.name}</span>
                    </span>
                  )
                }))}
                variant="fixed"
              />
            </div>
          </div>
          <div className="flex flex-row flex-wrap">
            <div className="flex-1 mb-24 mr-10">
              <div className="flex items-centermb-12">
                <Typography className="font-600 text-16 mx-8">Min month experience</Typography>
              </div>

              <TextField
                error={submitted && cardForm.minMonthExperience === ""}
                className="w-full"
                type="number"
                name="minMonthExperience"
                value={cardForm.minMonthExperience}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                required></TextField>
            </div>
            <div className="flex-1 mb-24">
              <div className="flex items-center mt-16 mb-12">

                <Typography className="font-600 text-16 mx-8">Max month experience</Typography>
              </div>

              <TextField
                error={submitted && cardForm.maxMonthExperience === ""}
                className="w-full"
                type="number"
                name="maxMonthExperience"
                value={cardForm.maxMonthExperience}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                required></TextField>
            </div>
          </div>

          <div className="flex flex-row flex-wrap">
            <div className="flex-1 mb-24 mr-10">
              <div className="flex items-center mb-12">
                <Typography className="font-600 text-16 mx-8">Category</Typography>
              </div>

              <FuseChipSelect
                error={submitted && cardForm.category === ""}
                className=""
                value={{
                  value: cardForm.category,
                  label: cardForm.category
                }}
                onChange={value => singleChipChange('category', value.value)}
                placeholder="Select Category"
                textFieldProps={{
                  variant: 'outlined'
                }}
                options={categories && categories.map(tag => ({
                  value: tag.name,
                  label: (
                    <span className="flex items-center">
                      <span className="mx-8">{tag.name}</span>
                    </span>
                  )
                }))}
                variant="fixed"
              />
            </div>
            <div className="flex-1 mb-24">
              <div className="flex items-center mt-16 mb-12">
                <Typography className="font-600 text-16"> Department</Typography>
              </div>
              <FuseChipSelect
                error={submitted && cardForm.department === ""}
                className=""
                // value={{
                //   value: cardForm.department,
                //   label: departments && departments.length > 0 && departments.find(m => m.id === cardForm.department).name
                // }
                // }
                value={cardForm.department && departments && departments.length > 0 && departments.findIndex(m => m.departemntId === cardForm.department) > -1
                  &&
                {
                  value: cardForm.department,
                  label: departments.find(m => m.id === cardForm.department).name
                }
                }
                onChange={value => singleChipChange('department', value.value)}
                placeholder="Select department"

                textFieldProps={{
                  variant: 'outlined'
                }}
                options={departments.map(dept => ({
                  value: dept.departemntId,
                  label: (
                    <span className="flex items-center">
                      <span className="mx-8">{dept.name}</span>
                    </span>
                  )
                }))}
                variant="fixed"
              />
            </div>
          </div>



          <div className="flex flex-row flex-wrap">
            <div className="flex-1 mb-24 mr-10">
              <div className="flex items-center mb-12">
                <Typography className="font-600 text-16 mx-8">Industries</Typography>
              </div>

              <FuseChipSelect
                // error={submitted && cardForm.industry.length > 0}
                className=""
                value={cardForm.industry && cardForm.industry.map(indObj => {
                  let slectedInd = industries && industries.length > 0 && industries.find(m => m.id === indObj);
                  if (slectedInd)
                    return {
                      value: slectedInd.id,
                      label: slectedInd.name
                    }


                })}
                onChange={value => chipChange('industry', value)}
                placeholder="Select Industry"
                textFieldProps={{
                  variant: 'outlined'
                }}
                options={industries && industries.length > 0 && industries.map(tag => ({
                  value: tag.id,
                  label: (
                    <span className="flex items-center">
                      <span className="mx-8">{tag.name}</span>
                    </span>
                  )
                }))}
                isMulti
                variant="fixed"
              />
            </div>
            <div className="flex-1 mb-24">
              <div className="flex items-center mt-16 mb-12">
                <Typography className="font-600 text-16"> Job Functions</Typography>
              </div>
              <FuseChipSelect
                error={submitted && cardForm.jobFunction === ""}
                className=""
                value={{
                  value: cardForm.jobFunction,
                  label: cardForm.jobFunction
                }}
                onChange={value => singleChipChange('jobFunction', value.value)}
                placeholder="Select Job Function"

                textFieldProps={{
                  variant: 'outlined'
                }}
                options={jobFunctions && jobFunctions.length > 0 && jobFunctions.map(dept => ({
                  value: dept.name,
                  label: (
                    <span className="flex items-center">
                      <span className="mx-8">{dept.name}</span>
                    </span>
                  )
                }))}
                variant="fixed"
              />
            </div>
          </div>



          <div className="flex flex-col flex-wrap">
            <div className="flex items-center mb-12">
              <Icon className="text-20" color="inherit">
                supervisor_account
                </Icon>
              <Typography className="font-600 text-16 mx-8">Skills</Typography>
            </div>
            <span className="text-12">Add skills to make your job more visible to the right candidates(Select upto 10)</span>
            <FuseChipSelect
              error={submitted && cardForm.skills.length === 0}
              className=""
              value={cardForm.skills && cardForm.skills.map(skillObj => {
                let slectedSkill = skills && skills.length > 0 && skills.find(m => m.id === skillObj);
                if (slectedSkill)
                  return {
                    value: slectedSkill.id,
                    label: slectedSkill.name
                  }


              })}
              onChange={value => chipChange('skills', value)}
              placeholder="Select skills"
              isMulti
              textFieldProps={{
                variant: 'outlined'
              }}
              options={skills && skills.length > 0 && skills.map(skill => ({
                value: skill.id,
                label: (
                  <span className="flex items-center">
                    <span className="mx-8">{skill.name}</span>
                  </span>
                )
              }))}
              variant="fixed"
            />
          </div>
        </fieldset>
      </div>



      <div className="flex flex-col mb-24">
        <fieldset className="p-20 border-1  rounded-8">
          <legend className="font-600 text-16">Search</legend>
          <div className="mb-24 mx-8">
            <div className="flex items-center mb-12">
              <Icon className="text-20" color="inherit">
                supervisor_account
                  </Icon>
              <Typography className="font-600 text-16 mx-8">Tags</Typography>
            </div>
            <span className="text-12">Add tags to make your job more visible to the right candidates(Select upto 10)</span>
            <FuseChipSelect
              error={submitted && cardForm.tags.length === 0}
              className=""
              value={cardForm.tags && cardForm.tags.map(tag => {
                return {
                  value: tag,
                  label: tag
                }

              })}
              onChange={value => chipChange('tags', value)}
              placeholder="Select tags"
              isMulti
              textFieldProps={{
                variant: 'outlined'
              }}
              options={tags && tags.data && tags.data.map(tag => ({
                value: tag.name,
                label: (
                  <span className="flex items-center">
                    <span className="mx-8">{tag.name}</span>
                  </span>
                )
              }))}
              variant="fixed"
            />
          </div>
          <div className="mb-24 mx-8">
            <div className="flex items-center mb-12">
              <Icon className="text-20" color="inherit">
                label
                  </Icon>
              <Typography className="font-600 text-16 mx-8">Labels</Typography>
            </div>
            <span className="text-12">Add labels to make your job more visible to the right candidates(Select upto 10)</span>
            <FuseChipSelect
              error={submitted && cardForm.labels && cardForm.labels.length === 0}
              className=""
              value={cardForm.labels && cardForm.labels.map(tag => {
                return {
                  value: tag,
                  label: tag
                }

              })}
              onChange={value => chipChange('labels', value)}
              placeholder="Select labels"
              isMulti
              textFieldProps={{
                variant: 'outlined'
              }}
              options={labels && labels.length > 0 && labels.map(tag => ({
                value: tag.name,
                label: (
                  <span className="flex items-center">
                    <span className="mx-8">{tag.name}</span>
                  </span>
                )
              }))}
              variant="fixed"
            />
          </div>


          {/* <Button
            variant="contained"
            color="primary"
            type="submit"
          // onClick={(e) => handleFormSubmit()}
          >
            Save
							</Button> */}
        </fieldset>
      </div>



    </DialogContent>
  );
});

export default JobForm;
