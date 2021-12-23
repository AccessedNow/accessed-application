import FuseUtils from '@fuse/utils/FuseUtils';
import { yupResolver } from '@hookform/resolvers/yup';
import { unfurl } from 'unfurl.js'
import axios from 'axios';

import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import Tooltip from '@mui/material/Tooltip';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useCallback, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import ArticleModel from '../../model/ArticleModel';
import FormUploadImage from './FormUploadImage';

import _ from '@lodash';
import * as yup from 'yup';
import {getUrlMeta} from '../../../../../store/accessed/commonSlice'
import {
  removeArticle,
  updateArticle,
  addArticle,
  closeNewArticleDialog,
  closeEditArticleDialog,
} from '../../home/store/homeSlice';



const defaultValues = {
  text: '',
  type: '',
};

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  text: yup.string().required('You must enter a name'),
});

function ArticleDialog(props) {
  const dispatch = useDispatch();
  const articleDialog = useSelector(({ homePage }) => homePage.home.articleDialog);
  const [link, setLink] = useState(null);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const { control, watch, reset, handleSubmit, formState, getValues } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors } = formState;

  const id = watch('id');
  const name = watch('name');
  const avatar = watch('avatar');

  /**
   * Initialize Dialog with Data
   */
  const initDialog = useCallback(() => {
    /**
     * Dialog type: 'edit'
     */
    if (articleDialog.type === 'edit' && articleDialog.data) {
      reset({ ...articleDialog.data });
    }

    /**
     * Dialog type: 'new'
     */
    if (articleDialog.type === 'new') {
      reset({
        ...defaultValues,
        ...articleDialog.data,
        id: FuseUtils.generateGUID(),
      });
    }
  }, [articleDialog.data, articleDialog.type, reset]);

  /**
   * On Dialog Open
   */
  useEffect(() => {
    if (articleDialog.props.open) {
      initDialog();
    }
  }, [articleDialog.props.open, initDialog]);

  /**
   * Close Dialog
   */
  function closeComposeDialog() {
    return articleDialog.type === 'edit'
      ? dispatch(closeEditArticleDialog())
      : dispatch(closeNewArticleDialog());
  }

  /**
   * Form Submit
   */
  function onSubmit(data) {
    if (articleDialog.type === 'new') {
      dispatch(addArticle(data));
    } else {
      dispatch(updateArticle({ ...articleDialog.data, ...data }));
    }
    closeComposeDialog();
  }

  function handleEmailsChange(index, event) {
    var emails = this.state.emails.slice(); // Make a copy of the emails first.
    emails[index] = event.target.value; // Update it with the modified email.
    this.setState({emails: emails}); // Update the state.
  }

  function handleType(type) {
    var emails = this.state.emails.slice(); // Make a copy of the emails first.
    emails[index] = event.target.value; // Update it with the modified email.
    this.setState({emails: emails}); // Update the state.
  }

  /**
   * Remove Event
   */
  function handleRemove() {
    dispatch(removeArticle(id));
    closeComposeDialog();
  }

  return (
    <Dialog
      classes={{
        paper: 'w-full m-24',
      }}
      {...articleDialog.props}
      onClose={closeComposeDialog}
      fullWidth
      maxWidth="xs"
    >

      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col md:overflow-hidden"
      >
        {!showPrivacy?
          <>
            <DialogContent classes={{ root: 'p-8' }}>
              <div className="px-20 my-16">
                <div className="flex flex-row">
                  <Avatar/>
                  <Button onClick={(ev) => {
                    setShowPrivacy(true);
                  }}>Privacy</Button>
                </div>
                <Controller
                  name="text"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextareaAutosize
                      aria-label="enter text"
                      value={value}
                      onChange={(ev) => {
                        onChange(ev);
                        // if(new RegExp("([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?").test(ev.target.value)) {}

                        var myRe = /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm;
                        var urlList = myRe.exec(ev.target.value);
                        if(urlList){
                          // dispatch(getUrlMeta(urlList[0])).then((data) => {
                          //   setLink(data.payload);
                          // });

                        }
                      }}
                      minRows={4}
                      placeholder="What's on your mind..."
                      className="w-full"
                    />
                  )}
                />
                {link &&
                  <div className="flex flex-row p-6 border-1 rounded-6">
                    <div className="w-48 h-48"><img src={link.imageUrl} /></div>
                    <div>{link.title}</div>
                  </div>
                }
              </div>
            </DialogContent>
            <DialogActions className="justify-between p-4 pb-16">
              <div className="flex flex-auto justify-between items-center px-16 pb-12">
                <div className="flex items-center">

                  <Tooltip title="Add image" placement="bottom">
                    <div>
                      <FormUploadImage
                        onChange={(val) =>
                          setValue('image', val, { shouldDirty: true, shouldValidate: true })
                        }
                      />
                    </div>
                  </Tooltip>
                  <Tooltip title="Add Job" placement="bottom">
                    <IconButton
                      className="w-32 h-32 mx-4 p-0"
                      onClick={() => setShowList(!showList)}
                      size="large"
                    >
                      <Icon fontSize="small">work</Icon>
                    </IconButton>
                  </Tooltip>

                </div>

                {articleDialog.type === 'new' ? (
                    <div className="">
                      <Button className="m-4 py-3" variant="outlined" size="small">
                        Close
                      </Button>
                      <Button
                        size="small"
                        variant="contained"
                        color="secondary"
                        type="submit"
                        disabled={_.isEmpty(dirtyFields) || !isValid}
                      >
                        Add
                      </Button>
                    </div>
                ) : (
                    <div className="">
                      <Button className="m-4 py-3" variant="outlined" size="small">
                        Close
                      </Button>
                      <Button
                        size="small"
                        variant="contained"
                        color="secondary"
                        type="submit"
                        disabled={_.isEmpty(dirtyFields) || !isValid}
                      >
                        Save
                      </Button>
                    </div>
                )}
              </div>
            </DialogActions>
          </>
          :
          <>
            <DialogTitle className="flex flex-row justify-between">
              <Button onClick={() => {
                setShowPrivacy(false)
              }}></Button>
              <Typography className="w-full">Select Audience</Typography>
            </DialogTitle>
            <DialogContent classes={{ root: 'p-8' }}>
              Privacy
            </DialogContent>
            <DialogActions className="justify-between p-4 pb-16">
              <div className="flex flex-auto justify-between items-center px-16 pb-12">

                  <div className="">
                    <Button className="m-4 py-3" variant="outlined" size="small">
                      Back
                    </Button>
                  </div>
              </div>
            </DialogActions>
          </>
        }
      </form>
    </Dialog>
  );
}

export default ArticleDialog;
