import { Controller, useForm } from 'react-hook-form';
import _ from '@lodash';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import LinearProgress from '@mui/material/LinearProgress';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { useRef, useState, useEffect } from 'react';
import AddEmaillistItem from './CardAddChecklistItem';
import EmaillistItem from './CardChecklistItem';

function Emaillist(props) {
  const { onCheckListChange, checklist, index } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const checkListNameRef = useRef();
  const { watch, control } = useForm({ mode: 'onChange', defaultValues: checklist });
  const form = watch();

  useEffect(() => {
    if (!_.isEqual(form, checklist)) {
      onCheckListChange(form, index);
    }
  }, [form, index, onCheckListChange, checklist]);


  if (!form) {
    return null;
  }
  return (
    <div className="mb-24">

      <div className="">
        <Controller
          name="checkItems"
          control={control}
          defaultValue={[]}
          render={({ field: { onChange, value } }) => (
            <List className="">
              {value.map((checkItem, _index) => (
                <EmaillistItem
                  item={checkItem}
                  key={checkItem.id}
                  index={_index}
                  onListItemChange={(item, itemIndex) => {
                    onChange(_.setIn(value, `[${itemIndex}]`, item));
                  }}
                  onListItemRemove={() => {
                    onChange(_.reject(value, { id: checkItem.id }));
                  }}
                />
              ))}
              <AddEmaillistItem onListItemAdd={(item) => onChange([...value, item])} />
            </List>
          )}
        />
      </div>
    </div>
  );
}

export default Emaillist;
