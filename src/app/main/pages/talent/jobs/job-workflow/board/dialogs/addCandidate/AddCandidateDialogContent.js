import FuseChipSelect from '@fuse/core/FuseChipSelect';
import { useDebounce, useForm, useUpdateEffect } from '@fuse/hooks';
import _ from '@lodash';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';

import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import List from '@material-ui/core/List';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import LabelModel from 'app/main/apps/scrumboard/model/LabelModel';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import moment from 'moment';
import React, { useCallback } from 'react';
import { withStyles } from '@material-ui/core/styles';

import { useDispatch, useSelector } from 'react-redux';
import { addLabel } from '../../../store/boardSlice';
import {closeAddCandidateDialog, closeCardDialog, removeCard, updateCard} from '../../../store/cardSlice';

import CardActivity from './activity/CardActivity';
import CardAttachment from './attachment/CardAttachment';
import CardChecklist from './checklist/CardChecklist';
import CardComment from './comment/CardComment';
import CheckListMenu from './toolbar/CheckListMenu';
import DueMenu from './toolbar/DueMenu';
import LabelsMenu from './toolbar/LabelsMenu';
import MembersMenu from './toolbar/MembersMenu';
import OptionsMenu from './toolbar/OptionsMenu';


const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});


const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);


function AddCandidateDialogContent(props) {
	const dispatch = useDispatch();
	const card = useSelector(({ scrumboardApp }) => scrumboardApp.card.data);
	const board = useSelector(({ scrumboardApp }) => scrumboardApp.board);



	const { form: cardForm, handleChange, setForm, setInForm } = useForm(card);
	const updateCardData = useDebounce((boardId, newCard) => {
		dispatch(updateCard({ boardId, card: { ...newCard } }));
	}, 600);
	const dueDate = cardForm && cardForm.due ? moment(cardForm.due).format(moment.HTML5_FMT.DATE) : '';
  const [anchorEl, setAnchorEl] = React.useState(null);

	useUpdateEffect(() => {
		updateCardData(board.id, cardForm);
	}, [dispatch, board.id, cardForm, updateCardData]);

	function removeDue() {
		setInForm('due', null);
	}

	function toggleLabel(labelId) {
		setInForm('idLabels', _.xor(cardForm.idLabels, [labelId]));
	}

	function toggleMember(memberId) {
		setInForm('idMembers', _.xor(cardForm.idMembers, [memberId]));
	}

	function addCheckList(newList) {
		setInForm('checklists', [...cardForm.checklists, newList]);
	}

	function chipChange(name, value) {
		setInForm(
			name,
			value.map(item => item.value)
		);
	}

	function addNewChip(name, value) {
		setInForm(name, [...cardForm[name], value]);
	}

	function makeCover(attachmentId) {
		setInForm('idAttachmentCover', attachmentId);
	}

	function removeCover() {
		setInForm('idAttachmentCover', '');
	}

	function removeAttachment(attachmentId) {
		setForm({
			...cardForm,
			attachments: _.reject(cardForm.attachments, { id: attachmentId }),
			idAttachmentCover: cardForm.idAttachmentCover === attachmentId ? '' : cardForm.idAttachmentCover
		});
	}

	const handleCheckListChange = useCallback(
		(item, index) => {
			setInForm(`checklists[${index}]`, item);
		},
		[setInForm]
	);

	function removeCheckList(id) {
		setInForm('checklists', _.reject(cardForm.checklists, { id }));
	}

	function commentAdd(comment) {
		return setInForm('activities', [comment, ...cardForm.activities]);
	}

  const handleMenuClick = (event) => {
		event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

	return (
		<>
      <DialogTitle id="customized-dialog-title" onClose={ev => dispatch(closeAddCandidateDialog())}>
        Add Candidate
      </DialogTitle>

			<DialogContent dividers className="p-0">

        <FormControl component="fieldset" className="p-16">
          <FormLabel component="legend">Employment Type</FormLabel>
          <RadioGroup row aria-label="position" name="position" defaultValue="top">
            <FormControlLabel
              value="All"
              control={<Radio color="primary" />}
              label="All"
              labelPlacement="end"
            />
            <FormControlLabel
              value="Outsourcing"
              control={<Radio color="primary" />}
              label="Outsourcing"
              labelPlacement="end"
            />
            <FormControlLabel
              value="Internal"
              control={<Radio color="primary" />}
              label="Internal"
              labelPlacement="end"
            />
          </RadioGroup>
        </FormControl>
				<div className="flex flex-col sm:flex-row sm:justify-between justify-center items-center mb-24">

          <div className="w-full">
            {board.members.map(member => {
              return (
              	<div className="w-full">
                  <Divider />
									<MenuItem
										className="px-8"
										key={member.id}
										onClick={ev => {
											toggleMember(member.id);
										}}
									>
										<Checkbox size="small" />
										<Avatar className="w-48 h-48" src={member.avatar} />
										<ListItemText primary={member.name} secondary="Sr. Manager"  className="mx-8"/>
                    <IconButton color="inherit" onClick={handleMenuClick}>
                      <Icon>label</Icon>
                    </IconButton>

                    <Menu
                      id="simple-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleMenuClose}
                    >
                      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
                      <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
                    </Menu>
									</MenuItem>
								</div>
              );
            })}
          </div>


				</div>



			</DialogContent>
      <DialogActions>
        <Button onClick={ev => dispatch(closeAddCandidateDialog())} color="primary">
          Cancel
        </Button>
        <Button onClick={ev => dispatch(closeAddCandidateDialog())} color="primary">
          Add
        </Button>
      </DialogActions>
		</>
	);
}

export default AddCandidateDialogContent;
