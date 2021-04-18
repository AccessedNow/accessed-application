import FuseAnimate from '@fuse/core/FuseAnimate';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import Checkbox from '@material-ui/core/Checkbox';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openLabelsDialog, selectLabels } from './store/labelsSlice';
import {useTranslation} from "react-i18next/src/index";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  listIem: {
    minwidth: 'auto',
    padding: 0
  }
}));


function valuetext(value) {
  return `${value}°C`;
}



function JobSearchFilter(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [checked, setChecked] = React.useState([0]);
  const [filter, setFilter] = React.useState({
    level: [],
    employment: []
  });
  const [value, setValue] = React.useState([20, 37]);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleFilter = (type, value) => () => {
    const currentIndex = filter[type].indexOf(value);
    const update = filter;

    if (currentIndex === -1) {
      update[type].push(value);
    } else {
      update[type].splice(currentIndex, 1);
    }

    setFilter(update);
  };

  console.log('check', checked)
	return (
		<div className="w-full p-0">
			<FuseAnimate animation="transition.slideLeftIn" delay={200}>
				<Paper elevation={1} className={clsx(classes.paper, 'rounded-8')}>
          <div className={classes.root}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography className={classes.heading}>Type of Employment</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List className="w-full p-0">
                  {[{name: 'Full-Time', value: 'FULLTIME'}, {name: 'Part-Time', value: 'PARTTIME'}, {name: 'Contract', value: 'CONTRACT'}, {name: 'Freelance', value: 'FREELANCE'}, {name: 'Internship', value: 'INTERNSHIP'}].map((item) => {
                    const labelId = `checkbox-list-label-${item.value}`;

                    return (
                      <ListItem key={value.value} role={undefined} dense button onClick={handleFilter('employment', item.value)} className={classes.listIem}>
                        <ListItemIcon>
                          <Checkbox
                            edge="start"
                            checked={filter['employment'].indexOf(item.value) !== -1}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ 'aria-labelledby': labelId }}
                          />
                        </ListItemIcon>
                        <ListItemText id={labelId} primary={item.name} />
                      </ListItem>
                    );
                  })}
                </List>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography className={classes.heading}>Seniority Level</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List className="w-full p-0">
                  {['Internship', 'Entry Level', 'Associate', 'Mid-Senior', 'Director', 'Executive'].map((value) => {
                    const labelId = `checkbox-list-label-${value}`;

                    return (
                      <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)} className={classes.listIem}>
                        <ListItemIcon>
                          <Checkbox
                            edge="start"
                            checked={checked.indexOf(value) !== -1}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ 'aria-labelledby': labelId }}
                          />
                        </ListItemIcon>
                        <ListItemText id={labelId} primary={value} />
                      </ListItem>
                    );
                  })}
                </List>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography className={classes.heading}>Location</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List className="w-full p-0">
                  {['Internship', 'Entry Level', 'Associate', 'Mid-Senior', 'Director', 'Executive'].map((value) => {
                    const labelId = `checkbox-list-label-${value}`;

                    return (
                      <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)} className={classes.listIem}>
                        <ListItemIcon>
                          <Checkbox
                            edge="start"
                            checked={checked.indexOf(value) !== -1}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ 'aria-labelledby': labelId }}
                          />
                        </ListItemIcon>
                        <ListItemText id={labelId} primary={value} />
                      </ListItem>
                    );
                  })}
                </List>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography className={classes.heading}>Company</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List className="w-full p-0">
                  {['Amazon', 'Apple', 'Comcast', 'Google', 'Microsoft', 'Netflix' ].map((value) => {
                    const labelId = `checkbox-list-label-${value}`;

                    return (
                      <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)} className={classes.listIem}>
                        <ListItemIcon>
                          <Checkbox
                            edge="start"
                            checked={checked.indexOf(value) !== -1}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ 'aria-labelledby': labelId }}
                          />
                        </ListItemIcon>
                        <ListItemText id={labelId} primary={value} />
                      </ListItem>
                    );
                  })}
                </List>
              </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography className={classes.heading}>Salary Range</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className={classes.root}>
                  <Grid container spacing={3}>
                    <Grid item xs={6}>
                      <Typography id="range-slider" gutterBottom>
                        {value[0]}
                      </Typography>
                    </Grid>
                    <Grid item xs={6} justify="flex-end">
                      <Typography id="range-slider" gutterBottom>
                        {value[1]}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Slider
                    value={value}
                    onChange={handleSliderChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    getAriaValueText={valuetext}
                  />
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
          <div className="w-full justify-center p-20" alignItems="center">
            <Button variant="contained" color="primary" className="w-full">
              Apply
            </Button>
          </div>
				</Paper>
			</FuseAnimate>
		</div>
	);
}

export default JobSearchFilter;
