import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';

import TextField from '@mui/material/TextField';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import {getCandidateNotes} from "../../store/candidateSlice";

const CustomTimeline = styled(Timeline)(({ theme }) => ({
  cursor: 'pointer',

  '& :before': {
    display: 'none'
  },
}));



function NotesTab(props) {
  const dispatch = useDispatch();
  const routeParams = useParams();

  const user = useSelector(({ auth }) => auth.user);
  const [inputNote, setInputNote] = useState(null);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    dispatch(getCandidateNotes(props.id, routeParams)).then((response) => {
      setNotes(response.payload.content);
    });
  }, [dispatch, routeParams]);


  const handleChange = (prop) => (event) => {
    setNote({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setNote(null);
  };

  const container = {
    show: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <CustomTimeline>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot>
              <Avatar
                sx={{
                  borderWidth: 2,
                  borderStyle: 'solid',
                  borderColor: 'white',
                }}
                className="w-40 h-40"
                src={user.data.avatar}
              />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Add note</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type='text'
                value={inputNote}
                onChange={handleChange('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      // onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {/*{values.showPassword ? <VisibilityOff /> : <Visibility />}*/}
                    </IconButton>
                  </InputAdornment>
                }
                label="Add Note"
              />
            </FormControl>
          </TimelineContent>
        </TimelineItem>
        {notes.map((note) => (
          <motion.div key={note.id}>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot>
                  <FastfoodIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                  Eat
                </Typography>
                <Typography>Because you need strength</Typography>
              </TimelineContent>
            </TimelineItem>
          </motion.div>
        ))}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot>
              <FastfoodIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              Eat
            </Typography>
            <Typography>Because you need strength</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary" variant="outlined">
              <HotelIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              Sleep
            </Typography>
            <Typography>Because you need rest</Typography>
          </TimelineContent>
        </TimelineItem>
      </CustomTimeline>

    </motion.div>
  );
}

export default NotesTab;
