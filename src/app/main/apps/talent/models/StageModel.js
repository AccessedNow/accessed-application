import FuseUtils from '@fuse/utils';
import _ from '@lodash';

function StageModel(data) {
  data = data || {};

  return _.defaults(data, {
    id: FuseUtils.generateGUID(),
    type: "",
    timeLimit: 7,
    name: "",
    tasks: []
  });
}

export default StageModel;
