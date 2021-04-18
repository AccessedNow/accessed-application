import FuseAnimate from '@fuse/core/FuseAnimate';
import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import { useDeepCompareEffect } from '@fuse/hooks';
import Icon from '@material-ui/core/Icon';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Slider from '@material-ui/core/Slider';
import TextField from '@material-ui/core/TextField';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { openNewCandidateDialog, getCandidates, updateFilter, clearFilter } from './store/candidatesSlice';
import Autocomplete from '@material-ui/lab/Autocomplete';
import IconButton from '@material-ui/core/IconButton';


const levels = ['Intern', 'Junior', 'Senior', 'Manager', 'Director', 'Executive'];
//let [filterData,setFilterData]=React.useState({});
const useStyles = makeStyles(theme => ({
  listItem: {
    color: 'inherit!important',
    textDecoration: 'none!important',
    height: 40,
    width: 'calc(100% - 16px)',
    borderRadius: '0 20px 20px 0',
    paddingLeft: 24,
    paddingRight: 12,
    '&.active': {
      backgroundColor: theme.palette.secondary.main,
      color: `${theme.palette.secondary.contrastText}!important`,
      pointerEvents: 'none',
      '& .list-item-icon': {
        color: 'inherit'
      }
    },
    '& .list-item-icon': {
      marginRight: 16
    },
  }
}));

function valuetext(value) {
  return `${value}`;
}


function CandidatesSidebarContent(props) {
  const user = useSelector(({ candidatesApp }) => candidatesApp.user);
  let filter = useSelector(({ candidatesApp }) => candidatesApp.candidates.filter);
  let address = useSelector(({ candidatesApp }) => candidatesApp.address);
  let skills = useSelector(({ candidatesApp }) => candidatesApp.skill);
  let industries = useSelector(({ candidatesApp }) => candidatesApp.industry);

  console.log('skills');
  console.log(skills);
  const [experience, setExperience] = React.useState(filter.experience);
  const [selectedLocation, setSelectedLocation] = React.useState(filter.location);
  const [selectedIndustry, setSelectedIndustry] = React.useState(filter.industry);
  const [selectedSkills, setSelectedSkills] = React.useState(filter.skill);
  const [selectedLevel, setSelectedLevel] = React.useState(filter.level);
  const [selectedSalary, setSelectedSalary] = React.useState(filter.salary);
  const [selectedRating, setSelectedRating] = React.useState(filter.rating);
  const [locValue, setLocValue] = React.useState("");
  const [inputLocValue, setInputLocValue] = React.useState('');
  const [indValue, setIndValue] = React.useState("");
  const [inputIndValue, setInputIndValue] = React.useState('');
  const [skillValue, setSkillValue] = React.useState("");
  const [inputSkillValue, setInputSkillValue] = React.useState('');
  const routeParams = useParams();
  useEffect(() => {
    setExperience(filter.experience);
    setSelectedLocation(filter.location.map((loc) => { return { checked: true, value: loc } }));
    setSelectedIndustry(filter.industry.map((loc) => { return { checked: true, value: loc } }));
    setSelectedSkills(filter.skill.map((loc) => { return { checked: true, value: loc } }));
    setSelectedLevel(filter.level);
    setSelectedSalary(filter.salary);
    setSelectedRating(filter.rating);

  }, [filter])


  const dispatch = useDispatch();



  const classes = useStyles(props);


  const handleChange = (event, newValue) => {
    setExperience(newValue);

  };
  const handleRating = (event, newValue) => {
    setSelectedRating(newValue);

  };
  const handleSalary = (event, newValue) => {
    setSelectedSalary(newValue);

  };

  const handleLocations = (event, newValue) => {
    let location = selectedLocation;
    if (newValue && location.filter((loc) => loc.value === newValue).length === 0) {

      location = [...location, { checked: false, value: newValue }];
      setSelectedLocation(location);
    }
    setLocValue("");
    setInputLocValue("");
  };
  const handleLocationChange = (e) => {
    let location = selectedLocation;

    location = location.map((loc) => {
      if (loc.value === e.target.name)
        return { ...loc, checked: e.target.checked }
      else
        return loc;
    });

    setSelectedLocation(location);
  }

  const handleSkills = (event, newValue) => {
    let skill = selectedSkills;
    if (newValue && skill.filter((loc) => loc.value === newValue).length === 0) {

      skill = [...skill, { checked: false, value: newValue }];
      setSelectedSkills(skill);
    }
    setSkillValue("");
    setInputSkillValue("");
  };
  const handleSkillChange = (e) => {
    let skill = selectedSkills;

    skill = skill.map((loc) => {
      if (loc.value === e.target.name)
        return { ...loc, checked: e.target.checked }
      else
        return loc;
    });

    setSelectedSkills(skill);
  }

  const handleIndustries = (event, newValue) => {
    let industry = selectedIndustry;
    if (newValue && industry.filter((loc) => loc.value === newValue).length === 0) {

      industry = [...industry, { checked: false, value: newValue }];
      setSelectedIndustry(industry);
    }
    setIndValue("");
    setInputIndValue("");
  };
  const handleIndustryChange = (e) => {
    let industry = selectedIndustry;

    industry = industry.map((loc) => {
      if (loc.value === e.target.name)
        return { ...loc, checked: e.target.checked }
      else
        return loc;
    });

    setSelectedIndustry(industry);
  }
  const handleLevelChange = (e) => {
    let levels = selectedLevel;

    if (e.target.checked) {
      levels = [...levels, e.target.name];
    }
    else {
      levels = levels.filter((lev) => lev !== e.target.name)
    }

    setSelectedLevel(levels);
  }

  const applyFilter = () => {
    let data = {
      experience: experience,
      skill: selectedSkills.filter((skill) => skill.checked === true).map((item) => item.value),
      location: selectedLocation.filter((loc) => loc.checked === true).map((item) => item.value),
      industry: selectedIndustry.filter((ind) => ind.checked === true).map((item) => item.value),
      level: selectedLevel,
      rating: selectedRating,
      salary: selectedSalary,
      jobId: routeParams.jobId
    };

    dispatch(updateFilter(data));
    dispatch(getCandidates(data));
  }

  return (
    <div className="p-0">
      <FuseAnimate animation="transition.slideLeftIn" delay={200}>
        <Paper className="rounded-0 shadow-none lg:rounded-8 lg:shadow-1">
          <div className="p-24">
            <Button
              variant="outlined"
              color="primary"
              className="w-full"
              onClick={ev => {
                dispatch(clearFilter());
                dispatch(getCandidates());
              }}
            >
              Clear Filters
						</Button>
          </div>

          <div className={classes.root}>
            <Accordion className="m-0" defaultExpanded="true">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>Experiences</Typography>
              </AccordionSummary>
              <AccordionDetails className="block">
                <div className="w-full m-0">
                  <Slider
                    value={experience}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    getAriaValueText={valuetext}
                  />
                </div>
                <div className="flex w-full m-0">
                  <TextField
                    id="outlined-name"
                    label="min"
                    value={experience[0]}
                    variant="outlined"
                  />
                  <TextField
                    id="outlined-uncontrolled"
                    label="max"
                    value={experience[1]}
                    variant="outlined"
                  />
                </div>

              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded="true">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading}>Locations</Typography>
              </AccordionSummary>
              <AccordionDetails className="block">
                {address && address.hasOwnProperty("data") &&
                  <Autocomplete
                    value={locValue}
                    inputValue={inputLocValue}
                    onChange={(event, newValue) => {
                      handleLocations(event, newValue);
                    }}
                    onInputChange={(event, newInputValue) => {
                      setInputLocValue(newInputValue);
                    }}
                    options={address && address.hasOwnProperty("data") && address.data.map((addr) => addr.city)}
                    renderInput={(params) => <TextField {...params} label="Search Locations" variant="outlined" fullWidth />}
                  />
                }

                <div className="w-full">
                  <FormControl component="fieldset" className={classes.formControl + " w-full"}>
                    <FormGroup className="w-full">
                      {
                        selectedLocation && selectedLocation.length > 0 && selectedLocation.slice(0, 8).map((loc) => (
                          <div className="w-full flex flex-row justify-between items-center ">
                            <FormControlLabel control={<Checkbox checked={loc.checked} onChange={handleLocationChange} name={loc.value} />} label={loc.value} />
                            <IconButton
                              className="w-24 h-24"
                              onClick={(e) => { setSelectedLocation(selectedLocation.filter((item) => item.value !== loc.value)) }}
                            >
                              <Icon fontSize="small">clear</Icon>
                            </IconButton>
                          </div>
                        ))
                      }
                    </FormGroup>

                  </FormControl>

                  {
                    selectedLocation && selectedLocation.length > 8 &&
                    <Button variant="outlined">Show More</Button>
                  }
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded="true">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading}>Skills</Typography>
              </AccordionSummary>
              <AccordionDetails className="block">
                {skills && skills.hasOwnProperty("data") &&
                  <Autocomplete

                    value={skillValue}
                    inputValue={inputSkillValue}
                    onChange={(event, newValue) => {
                      handleSkills(event, newValue);
                    }}
                    onInputChange={(event, newInputValue) => {
                      setInputSkillValue(newInputValue);
                    }}
                    options={skills && skills.hasOwnProperty("data") && skills.data.map((addr) => addr.name)}
                    renderInput={(params) => <TextField {...params} label="Search Skills" variant="outlined" fullWidth />}
                  />
                }

                <div className="w-full">
                  <FormControl component="fieldset" className={classes.formControl + " w-full"}>
                    <FormGroup className="w-full">
                      {
                        selectedSkills && selectedSkills.length > 0 && selectedSkills.slice(0, 8).map((loc) => (
                          <div className="w-full flex flex-row justify-between items-center ">
                            <FormControlLabel control={<Checkbox checked={loc.checked} onChange={handleSkillChange} name={loc.value} />} label={loc.value} />
                            <IconButton
                              className="w-24 h-24"
                              onClick={(e) => { setSelectedSkills(selectedSkills.filter((item) => item.value !== loc.value)) }}
                            >
                              <Icon fontSize="small">clear</Icon>
                            </IconButton>
                          </div>
                        ))
                      }
                    </FormGroup>

                  </FormControl>

                  {
                    selectedSkills && selectedSkills.length > 8 &&
                    <Button variant="outlined">Show More</Button>
                  }
                </div>

              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded="true">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading}>Industries</Typography>
              </AccordionSummary>
              <AccordionDetails className="block">
                {industries && industries.hasOwnProperty("data") &&
                  <Autocomplete
                    value={indValue}
                    inputValue={inputIndValue}
                    onChange={(event, newValue) => {
                      handleIndustries(event, newValue);
                    }}
                    onInputChange={(event, newInputValue) => {
                      setInputIndValue(newInputValue);
                    }}
                    options={industries && industries.hasOwnProperty("data") && industries.data.map((addr) => addr.name)}
                    renderInput={(params) => <TextField {...params} label="Search Industries" variant="outlined" fullWidth />}
                  />
                }

                <div className="w-full">
                  <FormControl component="fieldset" className={classes.formControl + " w-full"}>
                    <FormGroup className="w-full">
                      {
                        selectedIndustry && selectedIndustry.length > 0 && selectedIndustry.slice(0, 8).map((loc) => (
                          <div className="w-full flex flex-row justify-between items-center ">
                            <FormControlLabel control={<Checkbox checked={loc.checked} onChange={handleIndustryChange} name={loc.value} />} label={loc.value} />
                            <IconButton
                              className="w-24 h-24"
                              onClick={(e) => { setSelectedIndustry(selectedIndustry.filter((item) => item.value !== loc.value)) }}
                            >
                              <Icon fontSize="small">clear</Icon>
                            </IconButton>
                          </div>
                        ))
                      }
                    </FormGroup>

                  </FormControl>

                  {
                    selectedIndustry && selectedIndustry.length > 8 &&
                    <Button variant="outlined">Show More</Button>
                  }
                </div>

              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded="true">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading}>Levels</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormControl component="fieldset" className={classes.formControl + " w-full"}>
                  <FormGroup className="w-full">
                    {
                      levels.map((level) => (
                        <FormControlLabel control={<Checkbox onChange={handleLevelChange} name={level} />} label={level} />
                      ))
                    }

                  </FormGroup>
                </FormControl>

              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded="true">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading}>Salaries</Typography>
              </AccordionSummary>
              <AccordionDetails className="block">
                <div className="w-full m-0">
                  <Slider
                    value={selectedSalary}
                    onChange={handleSalary}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    getAriaValueText={valuetext}
                    max={10}
                  />
                </div>
                <div className="flex w-full m-0">
                  <TextField
                    id="outlined-name"
                    label="min"
                    value={selectedSalary[0]}
                    variant="outlined"
                  />
                  <TextField
                    id="outlined-uncontrolled"
                    label="max"
                    value={selectedSalary[1]}
                    variant="outlined"
                  />
                </div>


              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded="true">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading}>Ratings</Typography>
              </AccordionSummary>
              <AccordionDetails className="block">

                <div className="w-full m-0">
                  <Slider
                    value={selectedRating}
                    onChange={handleRating}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    getAriaValueText={valuetext}
                    max={10}
                  />
                </div>
                <div className="flex w-full m-0">
                  <TextField
                    id="outlined-name"
                    label="min"
                    value={selectedRating[0]}
                    variant="outlined"
                  />
                  <TextField
                    id="outlined-uncontrolled"
                    label="max"
                    value={selectedRating[1]}
                    variant="outlined"
                  />
                </div>

                {/* <TextField
                  id="outlined-size-small"
                  defaultValue="Search"
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={selectedRating}
                  onChange={(e) => setSelectedRating(e.target.value)}
                /> */}
              </AccordionDetails>
            </Accordion>

          </div>

          <List className="pt-0">
            <ListItem
              button
              component={NavLinkAdapter}
              to="/talent/candidates/all"
              activeClassName="active"
              className={classes.listItem}
            >
              <Icon className="list-item-icon text-16" color="action">
                people
							</Icon>
              <ListItemText className="truncate" primary="All candidates" disableTypography />
            </ListItem>
            <ListItem
              button
              component={NavLinkAdapter}
              to="/talent/candidates/frequent"
              activeClassName="active"
              className={classes.listItem}
            >
              <Icon className="list-item-icon text-16" color="action">
                restore
							</Icon>
              <ListItemText className="truncate" primary="Frequently candidateed" disableTypography />
            </ListItem>
            <ListItem
              button
              component={NavLinkAdapter}
              to="/talent/candidates/starred"
              activeClassName="active"
              className={classes.listItem}
            >
              <Icon className="list-item-icon text-16" color="action">
                star
							</Icon>
              <ListItemText className="truncate" primary="Starred candidates" disableTypography />
            </ListItem>
          </List>
          <div className="p-24">
            <Button
              variant="contained"
              color="primary"
              className="w-full"
              onClick={applyFilter}
            >
              Apply
						</Button>
          </div>

        </Paper>
      </FuseAnimate>
    </div>
  );
}

export default CandidatesSidebarContent;
