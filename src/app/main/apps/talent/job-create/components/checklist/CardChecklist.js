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
import CardAddChecklistItem from './CardAddChecklistItem';
import CardChecklistItem from './CardChecklistItem';
import CardChecklistName from './CardChecklistName';

function CardChecklist(props) {
  const { onCheckListChange, list } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const checkListNameRef = useRef();
  const { watch, control } = useForm({ mode: 'onChange', defaultValues: list });
  const form = watch();

  console.log('list', list);
  useEffect(() => {
    if (!_.isEqual(form, list)) {
      onCheckListChange(form);
    }
  }, [form, onCheckListChange, list]);



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
              {list.map((item, _index) => (
                <CardChecklistItem
                  item={item}
                  key={_index}
                  index={_index}
                  onListItemChange={(item, itemIndex) => {
                    onChange(_.setIn(value, `[${itemIndex}]`, item));
                  }}
                  onListItemRemove={() => {
                    onChange(_.reject(value, { id: checkItem.id }));
                  }}
                />
              ))}
              <CardAddChecklistItem onListItemAdd={(item) => onChange([...value, item])} />
            </List>
          )}
        />
      </div>
    </div>
  );
}

export default CardChecklist;
