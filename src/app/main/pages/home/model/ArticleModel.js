import FuseUtils from '@fuse/utils';
import _ from '@lodash';

function ArticleModel(data) {
  data = data || {};

  return _.defaults(data, {
    id: FuseUtils.generateGUID(),
    title: '',
    description: '',
    image: [],
    mentions: [],
  });
}

export default ArticleModel;
