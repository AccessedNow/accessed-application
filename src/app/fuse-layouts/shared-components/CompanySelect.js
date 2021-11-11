import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { setPreferredCompany } from 'app/auth/store/userSlice';

export default function AccountMenu() {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const user = useSelector(({ auth }) => auth.user);
  const open = Boolean(anchorEl);

  const preferredCompany = _.filter(user.data.company, ['companyId', user.data.preferredCompany])[0];

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, id) => {
    // setSelectedIndex(index);
    setAnchorEl(null);
    dispatch(setPreferredCompany(id));
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event) => {
    dispatch(setPreferredCompany(event.target.value));
  };


  return (
    <div>
      <List
        aria-label="Device settings"
        sx={{ bgcolor: 'background.paper' }}
        className="p-0"
      >
        <ListItem
          button

          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
        >
          <ListItemAvatar>
            <Avatar variant="square" alt={preferredCompany.name} src={preferredCompany.avatar} className="rounded-4" />
          </ListItemAvatar>
          <ListItemText primary={preferredCompany.name} secondary="change"/>
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        {user.data.company.map((company, index) => (
          <MenuItem
            key={company.companyId}
            disabled={index === 0}
            selected={company.companyId === user.data.preferredCompany}
            onClick={(event) => handleMenuItemClick(event, company.companyId)}
          >
            {company.name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
