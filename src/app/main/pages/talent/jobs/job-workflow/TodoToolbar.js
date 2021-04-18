import FormControl from '@material-ui/core/FormControl';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleOrderDescending, changeOrder } from './store/todosSlice';

function TodoToolbar(props) {
	const dispatch = useDispatch();
	const orderBy = useSelector(({ jobWorkflowPage }) => jobWorkflowPage.todos.orderBy);
	const orderDescending = useSelector(({ jobWorkflowPage }) => jobWorkflowPage.todos.orderDescending);

	function handleOrderChange(ev) {
		dispatch(changeOrder(ev.target.value));
	}

	return (
		<div className="flex justify-between w-full">
			<div className="flex" />
			<div className="flex items-center">

			</div>
		</div>
	);
}

export default TodoToolbar;
