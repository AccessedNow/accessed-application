import _ from '@lodash';
import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
import { styled } from '@mui/material/styles';
import Autocomplete from '@mui/material/Autocomplete';

import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

import Icon from '@mui/material/Icon';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import TextField from '@mui/material/TextField';

import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';

import { motion } from 'framer-motion';
import { selectFilters } from './store/filtersSlice';
import { selectFolders } from './store/foldersSlice';
import { selectLabels } from './store/labelsSlice';
// import { openNewTodoDialog } from './store/todosSlice';
import { setFilter, searchCandidates } from './store/candidatesSlice';
import FilterItem from '../components/FilterItem';
import CustomAutocomplete from '../components/CustomAutocomplete';


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

const stages = [
  {
    id: 1,
    name: 'Apply',
    color: '#7057ff',
  },
  {
    id: 2,
    name: 'Phone Screen',
    color: '#008672',
  },
  {
    id: 3,
    name: 'Phone Interview',
    color: '#b60205',
  },
  {
    id: 4,
    name: 'Interview',
    color: '#d93f0b',
  },
  {
    id: 5,
    name: 'Test',
    color: '#0e8a16',
  },
  {
    id: 6,
    name: 'Offer',
    color: '#fbca04',
  },
  {
    id: 7,
    name: 'Hired',
    color: '#fec1c1',
  }
];

const favorites = [
    {
      id: 0,
      handle: "starred",
      title: "Followed",
      icon: "star"
    },
    {
      id: 1,
      handle: "important",
      title: "Priority",
      icon: "error"
    },
    {
      id: 2,
      handle: "dueDate",
      title: "Sheduled",
      icon: "schedule"
    },
    {
      id: 3,
      handle: "completed",
      title: "Qualified",
      icon: "check"
    }
]

const statuses = [
  {
    id: 1,
    handle: "qualified",
    title: "Qualfied",
    color: "#388E3C"
  },
  {
    id: 2,
    handle: "disqualified",
    title: "Disqualfied",
    color: "#F44336"
  },
  {
    id: 3,
    handle: "hold",
    title: "On Hold",
    color: "#FF9800"
  },
  {
    id: 4,
    handle: "archived",
    title: "Archived",
    color: "#0091EA"
  }

]

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
            dispatch(searchCandidates());
          }}
          variant="contained"
          color="secondary"
          className="w-full"
        >
          Apply
        </Button>
      </div>
      <Divider />

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
            FAVORITES
          </ListSubheader>

          {favorites.length > 0 &&
          favorites.map((favorite) => (
            <StyledListItem
              button
              component={NavLinkAdapter}
              to={`/apps/todo/filter/${favorite.handle}`}
              activeClassName="active"
              key={favorite.id}
            >
              <Icon className="list-item-icon" color="action">
                {favorite.icon}
              </Icon>
              <ListItemText primary={favorite.title} disableTypography />
            </StyledListItem>
          ))}
        </List>

        <List>
          <ListSubheader className="pl-12" disableSticky>
            STATUS
          </ListSubheader>

          {statuses.length > 0 &&
          statuses.map((status) => (
            <StyledListItem
              button
              component={NavLinkAdapter}
              to={`/apps/todo/label/${status.handle}`}
              key={status.id}
            >
              <Icon className="list-item-icon" style={{ color: status.color }} color="action">
                label
              </Icon>
              <ListItemText primary={status.title} disableTypography />
            </StyledListItem>
          ))}
        </List>
        <List>
          <ListSubheader className="pl-12" disableSticky>
            STAGES
          </ListSubheader>

          {stages.length > 0 &&
          stages.map((stage) => (
            <StyledListItem
              button
              component={NavLinkAdapter}
              to={`/apps/todo/label/${stage.handle}`}
              key={stage.id}
            >
              <Icon className="list-item-icon" style={{ color: stage.color }} color="action">
                label
              </Icon>
              <ListItemText primary={stage.name} disableTypography />
            </StyledListItem>
          ))}
        </List>
      </div>

      <div>

        <div className="min-h-32 mb-8 px-20 pt-12">
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
        </div>
        <Divider />
        <div className="min-h-32 mb-8 px-20 pt-12">
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
        <div className="min-h-32 mb-8 px-20 pt-12">
          <Controller
            name="state"
            control={control}
            render={({ field }) => (
              <CustomAutocomplete
                {...field}
                label="State"
                list={labels}
                value={filter.state}
                onListItemChange={handleListItemChange}
              />
            )}
          />
        </div>
        <div className="min-h-32 mb-8 px-20 pt-12">
          <Controller
            name="state"
            control={control}
            render={({ field }) => (
              <Autocomplete
                multiple
                sx={{
                  display: 'inline-block',
                  '& input': {
                    width: 200,
                    bgcolor: 'background.paper',
                    color: (theme) =>
                      theme.palette.getContrastText(theme.palette.background.paper),
                  },
                }}
                id="custom-input-demo"
                options={labels}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="standard"
                    label="Size small"
                    placeholder="Favorites"
                  />
                )}
              />
            )}
          />
        </div>
      </div>

    </motion.div>
  );
}

export default SidebarContent;
