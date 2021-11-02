import FuseUtils from '@fuse/utils';
import _ from '@lodash';

function QuestionModel(data) {
  data = data || {};

  return _.defaults(data, {
    id: FuseUtils.generateGUID(),
    type: "MULTICHOICE",
    required: false,
    text: "Phone How would you describe technology in one sentence??",
    noMaxSelection: 0,
    options: [],
    hint: "",
    description: ""
  });
}

export default QuestionModel;
