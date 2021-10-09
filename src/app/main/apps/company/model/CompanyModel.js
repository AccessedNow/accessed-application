import FuseUtils from '@fuse/utils';
import _ from '@lodash';

function CompanyModel(data) {
  data = data || {};

  return _.defaults(data, {
    id: FuseUtils.generateGUID(),
    avatar: null,
    name: '',
    legalName: '',
    about: '',
    mission: '',
    annualRevenue: null,
    size: '',
    tickerSymbol: '',
    industry: [],
    website: '',
    yearFounded: null,
    primaryAddress: {
      name: '',
      address1: '',
      city: "Ho Chi Minh",
      state: '',
      country: ''
    }
  });
}

export default CompanyModel;
