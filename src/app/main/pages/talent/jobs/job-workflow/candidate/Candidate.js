import FuseLoading from '@fuse/core/FuseLoading';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import withReducer from 'app/store/withReducer';
import clsx from 'clsx';
import React, { useRef, useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { Link, withRouter, useParams } from 'react-router-dom';
import { useDeepCompareEffect } from '@fuse/hooks';
import reducer from '../store';
import { reorderCard, reorderList, resetBoard, getBoard } from '../store/boardSlice';

import BoardAddList from './BoardAddList';
import BoardList from './BoardList';
import BoardTitle from './BoardTitle';
import BoardCardDialog from './dialogs/card/BoardCardDialog';
import BoardSettingsSidebar from './sidebars/settings/BoardSettingsSidebar';

function CandidatePage(props) {
	const dispatch = useDispatch();
	const board = useSelector(({ candidatePage }) => candidatePage.board);

	const routeParams = useParams();
	const containerRef = useRef(null);
	const [settingsDrawerOpen, setSettingsDrawerOpen] = useState(false);
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

	useDeepCompareEffect(() => {
		// dispatch(getBoard(routeParams));
		dispatch(getBoard({boardId: "32gfhaf2", boardUri: "acme-frontend-application"}))
		return () => {
			dispatch(resetBoard());
		};
	}, [dispatch, routeParams]);

	function onDragEnd(result) {
		const { source, destination } = result;

		// dropped nowhere
		if (!destination) {
			return;
		}

		// did not move anywhere - can bail early
		if (source.droppableId === destination.droppableId && source.index === destination.index) {
			return;
		}

		// reordering list
		if (result.type === 'list') {
			dispatch(reorderList(result));
		}

		// reordering card
		if (result.type === 'card') {
			dispatch(reorderCard(result));
		}
	}

	function toggleSettingsDrawer(state) {
		setSettingsDrawerOpen(state === undefined ? !settingsDrawerOpen : state);
	}



  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

	if (!board) {
    return <FuseLoading/>
	}

	return (
		<div className="flex flex-1 flex-auto flex-col w-full h-full relative" ref={containerRef}>
      <AppBar position="static" color="transparent" className="shadow-0">
        <Toolbar className="flex items-center justify-between px-4 sm:px-24 h-64 sm:h-96 container">
          <Hidden xsDown>
            <FormGroup row>
              <FormControlLabel
                control={<Switch checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                label="Qualified"
              />

            </FormGroup>
          </Hidden>

          <Hidden smUp>
            <IconButton color="inherit" to="/apps/scrumboard/boards/" component={Link}>
              <Icon>assessment</Icon>
            </IconButton>
          </Hidden>

          <IconButton color="inherit" onClick={() => toggleSettingsDrawer(true)}>
            <Icon>settings</Icon>
          </IconButton>
        </Toolbar>
      </AppBar>

		</div>
	);
}

export default withReducer('candidatePage', reducer)(withRouter(CandidatePage));
