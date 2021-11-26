import FuseUtils from '@fuse/utils';
import _ from '@lodash';

function TaskModel(data) {
  data = data || {};

  return _.defaults(data, {
    id: FuseUtils.generateGUID(),
    type: 'EMAIL',
    required: false,
    allowChange: true
  });
}

export default TaskModel;
