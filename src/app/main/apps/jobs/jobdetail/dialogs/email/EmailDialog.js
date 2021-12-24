import { useDebounce } from '@fuse/hooks';
import FuseScrollbars from '@fuse/core/FuseScrollbars';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Controller, useForm } from 'react-hook-form';
import _ from '@lodash';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import EmailModel from '../../../../mail/model/EmailModel';
import NoteLabel from 'app/main/apps/notes/NoteLabel';
import NoteReminderLabel from 'app/main/apps/notes/NoteReminderLabel';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { forwardRef } from 'react';
import { useState, useEffect } from 'react';
import { withRouter, useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { openEmailDialog, closeEmailDialog } from '../../store/jobSlice';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  subject: yup.string(),
  message: yup.string()
});

function EmailDialog(props) {
  const dispatch = useDispatch();
  const defaultValues = _.merge(
    {},
    EmailModel()
  );

  const emailDialog = useSelector(({ jobDetail }) => jobDetail.job.emailDialog);

  const { formState, handleSubmit, getValues, reset, watch, setValue, control } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors } = formState;

  const emailForm = watch();

  /**
   * Create New Note
   */
  function onCreate(data) {
    if (!props.onCreate) {
      return;
    }
    props.onCreate(data);
  }

  return (
    <Dialog
      classes={{
        paper: 'w-full m-24',
      }}
      TransitionComponent={Transition}
      onClose={(ev) => dispatch(closeNoteDialog())}
      open={Boolean(notes.noteDialogId)}
    >
      <div className="flex flex-col w-full">
        <FuseScrollbars className="flex flex-auto w-full max-h-640">
          <div className="w-full">
            <div className="px-20 my-16">
              <Controller
                name="subject"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    className="font-semibold text-14"
                    placeholder="Title"
                    type="text"
                    disableUnderline
                    fullWidth
                  />
                )}
              />
            </div>
            <div className="px-20 my-16">
              <Controller
                name="body"
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder="Take a note..."
                    multiline
                    rows="4"
                    disableUnderline
                    fullWidth
                  />
                )}
              />
            </div>

          </div>
        </FuseScrollbars>

        <div className="flex flex-auto justify-between items-center px-16 pb-12">

          <div className="flex items-center">
            {props.variant === 'new' ? (
              <Button
                className="m-4"
                type="submit"
                variant="contained"
                color="secondary"
                size="small"
                onClick={handleSubmit(onCreate)}
                disabled={_.isEmpty(dirtyFields) || !isValid}
              >
                Create
              </Button>
            ) : (
              <>
                <Tooltip title="Delete Note" placement="bottom">
                  <IconButton className="w-32 h-32 mx-4 p-0" onClick={props.onRemove} size="large">
                    <Icon fontSize="small">delete</Icon>
                  </IconButton>
                </Tooltip>
                <Button className="m-4" onClick={props.onClose} variant="outlined" size="small">
                  Close
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default EmailDialog;
