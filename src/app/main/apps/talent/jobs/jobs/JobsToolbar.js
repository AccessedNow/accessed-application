import Checkbox from '@material-ui/core/Checkbox';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFolders } from '../store/foldersSlice';
import { selectLabels } from '../store/labelsSlice';
import {
	toggleLabelOnSelectedJobs,
	setFolderOnSelectedJobs,
	selectJobsByParameter,
	deselectAllJobs,
	selectAllJobs,
	selectJobs
} from '../store/jobsSlice';

function JobToolbar(props) {
	const dispatch = useDispatch();
	const selectedJobIds = useSelector(({ jobApp }) => jobApp.jobs.selectedJobIds);
	const jobs = useSelector(selectJobs);
	const labels = useSelector(selectLabels);
	const folders = useSelector(selectFolders);

	const [menu, setMenu] = useState({
		selectMenu: null,
		foldersMenu: null,
		labelsMenu: null
	});

	function handleMenuOpen(event, _menu) {
		setMenu({
			..._menu,
			[_menu]: event.currentTarget
		});
	}

	function handleMenuClose(event, _menu) {
		setMenu({
			..._menu,
			[_menu]: null
		});
	}

	function handleCheckChange(event) {
		return event.target.checked ? dispatch(selectAllJobs()) : dispatch(deselectAllJobs());
	}

	return (
		<div className="flex flex-1 items-center sm:px-8">
			<Checkbox
				onChange={handleCheckChange}
				checked={selectedJobIds.length === Object.keys(jobs).length && selectedJobIds.length > 0}
				indeterminate={selectedJobIds.length !== Object.keys(jobs).length && selectedJobIds.length > 0}
			/>

			<IconButton
				className=""
				size="small"
				aria-label="More"
				aria-owns={menu.select ? 'select-menu' : null}
				aria-haspopup="true"
				onClick={ev => handleMenuOpen(ev, 'select')}
			>
				<Icon>arrow_drop_down</Icon>
			</IconButton>

			<Menu
				id="select-menu"
				anchorEl={menu.select}
				open={Boolean(menu.select)}
				onClose={ev => handleMenuClose(ev, 'select')}
			>
				<MenuItem
					onClick={ev => {
						dispatch(selectAllJobs());
						handleMenuClose(ev, 'select');
					}}
				>
					All
				</MenuItem>
				<MenuItem
					onClick={ev => {
						dispatch(deselectAllJobs());
						handleMenuClose(ev, 'select');
					}}
				>
					None
				</MenuItem>
				<MenuItem
					onClick={ev => {
						dispatch(selectJobsByParameter(['read', true]));
						handleMenuClose(ev, 'select');
					}}
				>
					Read
				</MenuItem>
				<MenuItem
					onClick={ev => {
						dispatch(selectJobsByParameter(['read', false]));
						handleMenuClose(ev, 'select');
					}}
				>
					Unread
				</MenuItem>
				<MenuItem
					onClick={ev => {
						dispatch(selectJobsByParameter(['starred', true]));
						handleMenuClose(ev, 'select');
					}}
				>
					Starred
				</MenuItem>
				<MenuItem
					onClick={ev => {
						dispatch(selectJobsByParameter(['starred', false]));
						handleMenuClose(ev, 'select');
					}}
				>
					Unstarred
				</MenuItem>
				<MenuItem
					onClick={ev => {
						dispatch(selectJobsByParameter(['important', true]));
						handleMenuClose(ev, 'select');
					}}
				>
					Important
				</MenuItem>
				<MenuItem
					onClick={ev => {
						dispatch(selectJobsByParameter(['important', false]));
						handleMenuClose(ev, 'select');
					}}
				>
					Unimportant
				</MenuItem>
			</Menu>

			{selectedJobIds.length > 0 && (
				<>
					<div className="border-r-1 h-48 w-1 mx-12 my-0" />

					<IconButton onClick={ev => dispatch(setFolderOnSelectedJobs(4))} aria-label="Delete">
						<Icon>delete</Icon>
					</IconButton>

					<IconButton
						aria-label="More"
						aria-owns={menu.folders ? 'folders-menu' : null}
						aria-haspopup="true"
						onClick={ev => handleMenuOpen(ev, 'folders')}
					>
						<Icon>folder</Icon>
					</IconButton>

					<Menu
						id="folders-menu"
						anchorEl={menu.folders}
						open={Boolean(menu.folders)}
						onClose={ev => handleMenuClose(ev, 'folders')}
					>
						{folders.length > 0 &&
							folders.map(folder => (
								<MenuItem
									onClick={ev => {
										dispatch(setFolderOnSelectedJobs(folder.id));
										handleMenuClose(ev, 'folders');
									}}
									key={folder.id}
								>
									{folder.title}
								</MenuItem>
							))}
					</Menu>

					<IconButton
						aria-label="More"
						aria-owns={menu.labels ? 'labels-menu' : null}
						aria-haspopup="true"
						onClick={ev => handleMenuOpen(ev, 'labels')}
					>
						<Icon>label</Icon>
					</IconButton>

					<Menu
						id="folders-menu"
						anchorEl={menu.labels}
						open={Boolean(menu.labels)}
						onClose={ev => handleMenuClose(ev, 'labels')}
					>
						{labels.length > 0 &&
							labels.map(label => (
								<MenuItem
									onClick={ev => {
										dispatch(toggleLabelOnSelectedJobs(label.id));
										handleMenuClose(ev, 'labels');
									}}
									key={label.id}
								>
									{label.title}
								</MenuItem>
							))}
					</Menu>
				</>
			)}
		</div>
	);
}

export default JobToolbar;
