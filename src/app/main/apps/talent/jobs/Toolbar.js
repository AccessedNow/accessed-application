import FormControl from '@mui/material/FormControl';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { toggleOrderDescending, changeOrder } from '../store/candidatesSlice';

function Toolbar(props) {
  const dispatch = useDispatch();
  const totalElements = useSelector(({ jobSearchApp }) => jobSearchApp.jobs.totalElements);
  const orderBy = useSelector(({ jobSearchApp }) => jobSearchApp.jobs.orderBy);
  const orderDescending = useSelector(({ jobSearchApp }) => jobSearchApp.jobs.orderDescending);

  function handleOrderChange(ev) {
    dispatch(changeOrder(ev.target.value));
  }

  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex">
        <Typography className="text-14 md:text-14 mx-12">
          {totalElements} JOBS MATCHING YOUR SEARCH
        </Typography>
      </div>
      <div className="flex items-center">
        <FormControl className="" variant="filled">
          <Select
            value={orderBy}
            onChange={handleOrderChange}
            displayEmpty
            name="filter"
            classes={{ select: 'py-8' }}
          >
            <MenuItem value="">
              <em>Order by</em>
            </MenuItem>
            <MenuItem value="startDate">Start Date</MenuItem>
            <MenuItem value="dueDate">Due Date</MenuItem>
            <MenuItem value="title">Title</MenuItem>
          </Select>
        </FormControl>
        <IconButton onClick={(ev) => dispatch(toggleOrderDescending())} size="large">
          <Icon style={{ transform: orderDescending ? 'scaleY(-1)' : 'scaleY(1)' }}>sort</Icon>
        </IconButton>
      </div>
    </div>
  );
}

export default Toolbar;
