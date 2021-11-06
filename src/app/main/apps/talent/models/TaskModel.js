import FuseUtils from '@fuse/utils';
import _ from '@lodash';

function NoteListItemModel(data) {
  data = data || {};

  return _.defaults(data, {
    id: FuseUtils.generateGUID(),
    type: '',
    required: false,
    allowChange: true,
    options: null
  });
}

export default NoteListItemModel;
