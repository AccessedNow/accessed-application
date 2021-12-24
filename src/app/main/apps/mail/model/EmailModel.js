import FuseUtils from '@fuse/utils';
import _ from '@lodash';

function EmailModel(data) {
  data = data || {};

  return _.defaults(data, {
    id: FuseUtils.generateGUID(),
    type: 'DEFAULT',
    from: null,
    to: [],
    meta: null,
    subject: '',
    body: '',
    attachments: []
  });
}

export default EmailModel;
