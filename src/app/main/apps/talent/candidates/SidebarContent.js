import _ from '@lodash';
import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';

import { motion } from 'framer-motion';
import { selectFilters } from './store/filtersSlice';
import { selectFolders } from './store/foldersSlice';
import { selectLabels } from './store/labelsSlice';
// import { openNewTodoDialog } from './store/todosSlice';
import { setFilter } from './store/candidatesSlice';
import FilterItem from '../components/FilterItem';


// From https://github.com/abdonrd/github-labels
const labels = [
  {
    id: 1,
    name: 'good first issue',
    color: '#7057ff',
    description: 'Good for newcomers',
  },
  {
    id: 2,
    name: 'help wanted',
    color: '#008672',
    description: 'Extra attention is needed',
  },
  {
    id: 3,
    name: 'priority: critical',
    color: '#b60205',
    description: '',
  },
  {
    id: 4,
    name: 'priority: high',
    color: '#d93f0b',
    description: '',
  },
  {
    id: 5,
    name: 'priority: low',
    color: '#0e8a16',
    description: '',
  },
  {
    id: 6,
    name: 'priority: medium',
    color: '#fbca04',
    description: '',
  },
  {
    id: 7,
    name: "status: can't reproduce",
    color: '#fec1c1',
    description: '',
  }
];



const StyledListItem = styled(ListItem)(({ theme }) => ({
  color: 'inherit!important',
  textDecoration: 'none!important',
  height: 40,
  width: '100%',
  borderRadius: 6,
  paddingLeft: 12,
  paddingRight: 12,
  marginBottom: 4,
  '&.active': {
    backgroundColor:
      theme.palette.mode === 'light'
        ? 'rgba(0, 0, 0, .05)!important'
        : 'rgba(255, 255, 255, .1)!important',
    pointerEvents: 'none',
    '& .list-item-icon': {
      color: 'inherit',
    },
  },
  '& .list-item-icon': {
    fontSize: 16,
    width: 16,
    height: 16,
    marginRight: 16,
  },
}));

function SidebarContent(props) {
  const dispatch = useDispatch();
  const filter = useSelector(({ candidatesApp }) => candidatesApp.candidates.filter);


  const labels = useSelector(selectLabels);
  const folders = useSelector(selectFolders);
  const filters = useSelector(selectFilters);

  const defaultValues = _.merge(
    {},
    filter
  );
  const { formState, handleSubmit, getValues, reset, watch, setValue, control } = useForm({
    mode: 'onChange',
    defaultValues
  });

  const form = watch();
  console.log('filter', form)


  function handleListItemChange(field, data) {
    const temp = _.setIn(
      filter,
      field,
      data
    );

    dispatch(
      setFilter(
        temp
      )
    );
  }

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { delay: 0.4 } }}
      className="flex-auto border-l-1 border-solid"
    >
      <div className="p-24 pb-16">
        <Button
          onClick={() => {
            dispatch(openNewTodoDialog());
          }}
          variant="contained"
          color="secondary"
          className="w-full"
        >
          Add task
        </Button>
      </div>

      <div className="px-12 ">

        <Controller
          name="city"
          control={control}
          render={({ field }) => (
            <FilterItem
              {...field}
              label="City"
              list={labels}
              value={filter.city}
              onListItemChange={handleListItemChange}
            />
          )}
        />

        <Controller
          name="state"
          control={control}
          render={({ field }) => (
            <FilterItem
              {...field}
              label="State"
              list={labels}
              value={filter.state}
              onListItemChange={handleListItemChange}
            />
          )}
        />

      </div>

      <div className="px-12">
        <List>
          {folders.length > 0 &&
            folders.map((folder) => (
              <StyledListItem
                button
                component={NavLinkAdapter}
                to={`/apps/todo/${folder.handle}`}
                key={folder.id}
                activeClassName="active"
              >
                <Icon className="list-item-icon" color="action">
                  {folder.icon}
                </Icon>
                <ListItemText primary={folder.title} disableTypography />
              </StyledListItem>
            ))}
        </List>

        <List>
          <ListSubheader className="pl-12" disableSticky>
            FILTERS
          </ListSubheader>

          {filters.length > 0 &&
            filters.map((filter) => (
              <StyledListItem
                button
                component={NavLinkAdapter}
                to={`/apps/todo/filter/${filter.handle}`}
                activeClassName="active"
                key={filter.id}
              >
                <Icon className="list-item-icon" color="action">
                  {filter.icon}
                </Icon>
                <ListItemText primary={filter.title} disableTypography />
              </StyledListItem>
            ))}
        </List>

        <List>
          <ListSubheader className="pl-12" disableSticky>
            LABELS
          </ListSubheader>

          {labels.length > 0 &&
            labels.map((label) => (
              <StyledListItem
                button
                component={NavLinkAdapter}
                to={`/apps/todo/label/${label.handle}`}
                key={label.id}
              >
                <Icon className="list-item-icon" style={{ color: label.color }} color="action">
                  label
                </Icon>
                <ListItemText primary={label.title} disableTypography />
              </StyledListItem>
            ))}
        </List>
      </div>
    </motion.div>
  );
}

export default SidebarContent;
