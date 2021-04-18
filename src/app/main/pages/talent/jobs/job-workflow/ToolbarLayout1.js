import FuseSearch from '@fuse/core/FuseSearch';
import FuseShortcuts from '@fuse/core/FuseShortcuts';
import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import ChatPanelToggleButton from 'app/fuse-layouts/shared-components/chatPanel/ChatPanelToggleButton';
import NavbarMobileToggleButton from 'app/fuse-layouts/shared-components/NavbarMobileToggleButton';
import QuickPanelToggleButton from 'app/fuse-layouts/shared-components/quickPanel/QuickPanelToggleButton';
import UserMenu from 'app/fuse-layouts/shared-components/UserMenu';
import FormControl from '@material-ui/core/FormControl';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { selectToolbarTheme } from 'app/store/fuse/settingsSlice';
import {changeOrder, toggleOrderDescending} from "./store/todosSlice";

const useStyles = makeStyles(theme => ({
	root: {}
}));

function ToolbarLayout1(props) {
  const dispatch = useDispatch();
  const classes = useStyles(props);
	const config = useSelector(({ fuse }) => fuse.settings.current.layout.config);
	const toolbarTheme = useSelector(selectToolbarTheme);

  const orderBy = useSelector(({ jobWorkflowPage }) => jobWorkflowPage.todos.orderBy);
  const orderDescending = useSelector(({ jobWorkflowPage }) => jobWorkflowPage.todos.orderDescending);

  function handleOrderChange(ev) {
    dispatch(changeOrder(ev.target.value));
  }

	return (
    <div className="flex justify-between w-full">
      <div className="flex" />
      <div className="flex items-center">
        <FormControl className="">
          <Select value={orderBy} onChange={handleOrderChange} displayEmpty name="filter" className="">
            <MenuItem value="">
              <em>Order by</em>
            </MenuItem>
            <MenuItem value="startDate">Start Date</MenuItem>
            <MenuItem value="dueDate">Due Date</MenuItem>
            <MenuItem value="title">Title</MenuItem>
          </Select>
        </FormControl>
        <IconButton onClick={ev => dispatch(toggleOrderDescending())}>
          <Icon style={{ transform: orderDescending ? 'scaleY(-1)' : 'scaleY(1)' }}>sort</Icon>
        </IconButton>
      </div>
    </div>
	);
}

export default React.memo(ToolbarLayout1);
