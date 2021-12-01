import Checkbox from '@mui/material/Checkbox';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFolders } from '../../../store/foldersSlice';
import { selectLabels } from '../../../store/labelsSlice';
import {
  selectAllApplications,
  deselectAllApplications,
  toggleInSelectedApplications
} from '../../store/applicationsSlice';

function CandidateToolbar(props) {
  const dispatch = useDispatch();
  const selectedApplicationIds = useSelector(({ jobDetail }) => jobDetail.applications.selectedApplicationIds);
  const applications = useSelector(({ jobDetail }) => jobDetail.applications.data);

  const [menu, setMenu] = useState({
    selectMenu: null,
    foldersMenu: null,
    labelsMenu: null,
  });

  function handleMenuOpen(event, _menu) {
    setMenu({
      ..._menu,
      [_menu]: event.currentTarget,
    });
  }

  function handleMenuClose(event, _menu) {
    setMenu({
      ..._menu,
      [_menu]: null,
    });
  }

  function handleCheckChange(event) {
    return event.target.checked ? dispatch(selectAllApplications()) : dispatch(deselectAllCandidates());
  }

  return (
    <div className="flex flex-1 items-center sm:px-8">
      <Checkbox
        onChange={handleCheckChange}
        checked={selectedApplicationIds.length === Object.keys(applications).length && selectedApplicationIds.length > 0}
        indeterminate={
          selectedApplicationIds.length !== Object.keys(applications).length && selectedApplicationIds.length > 0
        }
      />

      <IconButton
        className=""
        size="small"
        aria-label="More"
        aria-owns={menu.select ? 'select-menu' : null}
        aria-haspopup="true"
        onClick={(ev) => handleMenuOpen(ev, 'select')}
      >
        <Icon>arrow_drop_down</Icon>
      </IconButton>

      <Menu
        id="select-menu"
        anchorEl={menu.select}
        open={Boolean(menu.select)}
        onClose={(ev) => handleMenuClose(ev, 'select')}
      >
        <MenuItem
          onClick={(ev) => {
            dispatch(selectAllApplications());
            handleMenuClose(ev, 'select');
          }}
        >
          All
        </MenuItem>
        <MenuItem
          onClick={(ev) => {
            dispatch(deselectAllCandidates());
            handleMenuClose(ev, 'select');
          }}
        >
          None
        </MenuItem>
        <MenuItem
          onClick={(ev) => {
            // dispatch(selectCandidatesByParameter(['hasApplied', true]));
            handleMenuClose(ev, 'select');
          }}
        >
          Applied
        </MenuItem>
      </Menu>

      {selectedApplicationIds.length > 0 && (
        <>
          <div className="border-r-1 h-48 w-1 mx-12 my-0" />

          <IconButton
            onClick={(ev) => dispatch(setFolderOnSelectedCandidates(4))}
            aria-label="Delete"
            size="large"
          >
            <Icon>delete</Icon>
          </IconButton>

          <IconButton
            aria-label="More"
            aria-owns={menu.folders ? 'folders-menu' : null}
            aria-haspopup="true"
            onClick={(ev) => handleMenuOpen(ev, 'folders')}
            size="large"
          >
            <Icon>folder</Icon>
          </IconButton>

          <Menu
            id="folders-menu"
            anchorEl={menu.folders}
            open={Boolean(menu.folders)}
            onClose={(ev) => handleMenuClose(ev, 'folders')}
          >
            {folders.length > 0 &&
              folders.map((folder) => (
                <MenuItem
                  onClick={(ev) => {
                    dispatch(setFolderOnSelectedCandidates(folder.id));
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
            onClick={(ev) => handleMenuOpen(ev, 'labels')}
            size="large"
          >
            <Icon>label</Icon>
          </IconButton>

          <Menu
            id="folders-menu"
            anchorEl={menu.labels}
            open={Boolean(menu.labels)}
            onClose={(ev) => handleMenuClose(ev, 'labels')}
          >
            {labels.length > 0 &&
              labels.map((label) => (
                <MenuItem
                  onClick={(ev) => {
                    dispatch(toggleLabelOnSelectedCandidates(label.id));
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

export default CandidateToolbar;
