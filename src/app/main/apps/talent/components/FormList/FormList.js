import _ from '@lodash';

import List from '@mui/material/List';
import FormAddListItem from './FormAddListItem';
import FormListItem from './FormListItem';

function FormList(props) {
  function handleListItemChange(item) {
    props.onListChange(props.list.map((_item) => (_item.id === item.id ? item : _item)));
  }

  function handleListItemRemove(idx) {
    _.pullAt(props.list, [idx]);
    props.onListChange(props.list);
  }


  function handleListItemAdd(item) {
    props.onListChange([...props.list, item]);
  }

  if (!props.list) {
    return null;
  }

  return (
    <div className={props.className}>
      <List dense>
        {props.list.map((item, idx) => (
          <FormListItem
            item={item}
            key={idx}
            index={idx}
            onListItemChange={handleListItemChange}
            onListItemRemove={handleListItemRemove}
          />
        ))}
        <FormAddListItem onListItemAdd={handleListItemAdd} />
      </List>
    </div>
  );
}

export default FormList;
