import FuseUtils from '@fuse/utils/FuseUtils';
import { yupResolver } from '@hookform/resolvers/yup';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import Tooltip from '@mui/material/Tooltip';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useCallback, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import ArticleModel from '../../model/ArticleModel';

import _ from '@lodash';
import * as yup from 'yup';

import {
  removeArticle,
  updateArticle,
  addArticle,
  closeNewArticleDialog,
  closeEditArticleDialog,
} from '../../home/store/homeSlice';

const defaultValues = {
  text: '',
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
        paper: 'm-24',
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
        <DialogContent classes={{ root: 'p-24' }}>
          <div className="px-20 my-16">
            <Controller
              name="text"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="What's on your mind..."
                  multiline
                  rows="4"
                  disableUnderline
                  fullWidth
                />
              )}
            />
          </div>
        </DialogContent>

        {articleDialog.type === 'new' ? (
          <DialogActions className="justify-between p-4 pb-16">
            <div className="px-16">
              <Button
                variant="contained"
                color="secondary"
                type="submit"
                disabled={_.isEmpty(dirtyFields) || !isValid}
              >
                Add
              </Button>
            </div>
          </DialogActions>
        ) : (
          <DialogActions className="justify-between p-4 pb-16">
            <div className="px-16">
              <Button
                variant="contained"
                color="secondary"
                type="submit"
                disabled={_.isEmpty(dirtyFields) || !isValid}
              >
                Save
              </Button>
            </div>
            <IconButton onClick={handleRemove} size="large">
              <Icon>delete</Icon>
            </IconButton>
          </DialogActions>
        )}
      </form>
    </Dialog>
  );
}

export default ArticleDialog;
