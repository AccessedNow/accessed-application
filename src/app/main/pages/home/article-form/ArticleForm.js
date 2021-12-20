import FuseScrollbars from '@fuse/core/FuseScrollbars';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import _ from '@lodash';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import ArticleModel from '../model/ArticleModel';
import { useState, useEffect } from 'react';
import { withRouter, useParams } from 'react-router-dom';
import * as yup from 'yup';
import format from 'date-fns/format';

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  text: yup.string()

});

function ArticleForm(props) {
  const routeParams = useParams();
  const defaultValues = _.merge(
    {},
    ArticleModel(),
    props.article,
    routeParams.labelId ? { labels: [routeParams.labelId] } : null,
    routeParams.id === 'archive' ? { archive: true } : null
  );
  const { formState, handleSubmit, getValues, reset, watch, setValue, control } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors } = formState;

  const articleForm = watch();

  /**
   * Update Note
   */
  useEffect(() => {
    if (!props.article || props.variant === 'new' || !props.onChange) {
      return;
    }
    if (!_.isEqual(props.article, articleForm)) {
      props.onChange(articleForm);
    }
  }, [articleForm, props, defaultValues]);


  /**
   * Create
   */
  function onCreate(data) {
    if (!props.onCreate) {
      return;
    }
    props.onCreate(data);
  }

  /**
   * Upate
   */
  function onUpdate(data) {
    if (!props.onUpdate) {
      return;
    }
    props.onUpdate(data);
  }

  return (
    <div className="flex flex-col w-full">
      <FuseScrollbars className="flex flex-auto w-full max-h-640">
        <div className="w-full">

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

          )}
        </div>
      </FuseScrollbars>

      <div className="flex flex-auto justify-between items-center px-16 pb-12">
        <div className="flex items-center">

          <Tooltip title="Add image" placement="bottom">
            <div>
              <NoteFormUploadImage
                onChange={(val) =>
                  setValue('image', val, { shouldDirty: true, shouldValidate: true })
                }
              />
            </div>
          </Tooltip>

        </div>

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
            <Button
              className="m-4"
              type="submit"
              variant="contained"
              color="secondary"
              size="small"
              onClick={handleSubmit(onUpdate)}
              disabled={_.isEmpty(dirtyFields) || !isValid}
            >
              Update
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

ArticleForm.propTypes = {};
ArticleForm.defaultProps = {
  variant: 'edit',
  article: null,
};

export default withRouter(ArticleForm);
