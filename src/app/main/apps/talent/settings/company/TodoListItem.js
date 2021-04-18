import _ from '@lodash';
import Checkbox from '@material-ui/core/Checkbox';
import {
  Link
} from "react-router-dom";

import { amber, red } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';

import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTodo, openEditTodoDialog } from './store/todosSlice';
import { openEditCompanyDialog, removeCompany, toggleStarredContact, selectContacts } from './store/companySlice';

import {buildPartyAvatarUrl, buildPartyCoverUrl} from 'app/utils/urlHelper';


const useStyles = makeStyles({
	todoItem: {
		'&.completed': {
			background: 'rgba(0,0,0,0.03)',
			'& .todo-title, & .todo-notes': {
				textDecoration: 'line-through'
			}
		}
	}
});

function TodoListItem(props) {
	const dispatch = useDispatch();

	const classes = useStyles(props);

	return (
		<ListItem
			className={clsx(
				classes.todoItem,
				{ completed: props.company.completed },
				'border-solid border-b-1 py-16 px-0 sm:px-8'
			)}
			dense
			button
		>
      {props.company.avatar ? (
        <Avatar variant="rounded" className={classes.avatar + " w-72 h-72 mr-12 border"} src={buildPartyAvatarUrl(props.company)} />
      ) : (
        <Avatar variant="rounded" className={classes.avatar + " w-72 h-72 mr-12 border"} src="" />
      )}

			<div className="flex flex-1 flex-col relative overflow-hidden px-8">
				<Typography
					variant="subtitle1"
					className="todo-title truncate"
					color={props.company.completed ? 'textSecondary' : 'inherit'}
				>
					{props.company.name}
				</Typography>

				<Typography color="textSecondary" className="todo-notes truncate">
				</Typography>


			</div>

			<div className="px-8">
				<IconButton
					onClick={ev => {
						ev.preventDefault();
						ev.stopPropagation();
						dispatch(
							updateTodo({
								...props.company,
								important: !props.company.important
							})
						);
					}}
				>
					{props.company.important ? <Icon style={{ color: red[500] }}>error</Icon> : <Icon>error_outline</Icon>}
				</IconButton>
        <a href={"/talent/settings/company/"+props.company.id}><IconButton

				>
					{props.company.starred ? <Icon style={{ color: amber[500] }}>star</Icon> : <Icon>edit</Icon>}
				</IconButton></a>
			</div>
		</ListItem>
	);
}

export default TodoListItem;
