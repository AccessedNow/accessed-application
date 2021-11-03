import _ from '@lodash';
import Checkbox from '@mui/material/Checkbox';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import ListItem from '@mui/material/ListItem';
import clsx from 'clsx';

function FormListItem(props) {
  function handleChange(event) {
    props.onListItemChange(event.target.value, props.index);
  }

  if (!props.item) {
    return null;
  }

  return (
    <ListItem className="p-0" key={props.item.id} dense>
      <Input
        className={clsx('flex flex-1 mx-8', props.item.checked && 'line-through opacity-50')}
        name="text"
        value={props.item}
        onChange={handleChange}
        disableUnderline
      />
      <IconButton
        className="w-32 h-32 mx-4 p-0"
        aria-label="Delete"
        onClick={() => props.onListItemRemove(props.index)}
        size="large"
      >
        <Icon fontSize="small">delete</Icon>
      </IconButton>
    </ListItem>
  );
}

export default FormListItem;
