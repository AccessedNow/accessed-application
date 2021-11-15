import FuseLoading from '@fuse/core/FuseLoading';
import FuseScrollbars from '@fuse/core/FuseScrollbars';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';

import TextField from '@mui/material/TextField';
import ChecklistModel from 'app/main/apps/scrumboard/model/ChecklistModel';
import { useEffect, useState } from 'react';
import * as yup from 'yup';
import _ from '@lodash';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import {getCandidateNotes, addCandidateNote} from "../../store/candidateSlice";
import NoteList from "./NoteList";

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  text: yup.string().required('You must enter a text'),
});

function CandidateNotes(props) {
  const dispatch = useDispatch();
  const routeParams = useParams();
  const [anchorEl, setAnchorEl] = useState(null);
  const [notes, setNotes] = useState([]);
  const [message, setMessage] = useState('');
  const user = useSelector(({ auth }) => auth.user);

  useEffect(() => {
    dispatch(getCandidateNotes(props.id, routeParams)).then((response) => {
      setNotes(response.payload);
    });
  }, [dispatch, routeParams]);



  function onInputChange(ev) {
    setMessage(ev.target.value);
  }

  function onMessageSubmit(ev) {
    ev.preventDefault();
    if (message === '') {
      return;
    }

    dispatch(
      addCandidateNote({
        message,
        subject: props.id
      })
    ).then((data) => {
      setMessage('');

      data.payload.createdBy = user.data;
      let temp = _.setIn(
        notes,
        'content',
        notes.content.concat(data.payload)
      );

      setNotes(
        temp
      );
    });
  }

  if(notes)

  return (
    <div>
      <FuseScrollbars>
        <NoteList notes={notes}/>
      </FuseScrollbars>
      <form onSubmit={onMessageSubmit} className="absolute bottom-0 right-0 left-0 py-16 px-8">
        <Paper className="flex items-center relative rounded-24 shadow">
        <InputBase
        autoFocus={false}
        id="message-input"
        className="flex-1 flex flex-grow flex-shrink-0 mx-16 ltr:mr-48 rtl:ml-48 my-8"
        placeholder="Type your message"
        onChange={onInputChange}
        value={message}
        />
        <IconButton
          className="absolute ltr:right-0 rtl:left-0 top-0"
          type="submit"
          size="large"
        >
          <Icon className="text-24" color="action">
            send
          </Icon>
        </IconButton>
        </Paper>
      </form>
    </div>
  );
}

export default CandidateNotes;
