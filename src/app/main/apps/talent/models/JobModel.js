import FuseUtils from '@fuse/utils';
import _ from '@lodash';

function JobModel(data) {
  data = data || {};

  return _.defaults(data, {
    id: FuseUtils.generateGUID(),
    title: '',
    description: '',
    qualifications: [],
    minimumQualifications: [],
    responsibilities: [],
    allowRemote: false,
    category: '',
    jobFunction: '',
    employmentType: '',
    education: '',
    level: '',
    industry: [],
    minMonthExperience: null,
    maxMonthExperience: null,
    salaryRangeLow: '',
    salaryRangeHigh: '',
    currency: '',
    district: '',
    city: '',
    state: '',
    country: '',
    tags: [],
    questionTemplate: '',
    applicationForm: {
      resume: {
        isDisplay: false,
        isRequired: true
      },
      coverLetter: {
        isDisplay: true,
        isRequired: true
      },
      photo: {
        isDisplay: true,
        isRequired: true
      },
      email: {
        isDisplay: true,
        isRequired: true
      }
    },
    company: {
      id: 1,
      name: 'Hacker News',
      avatar: ''
    }
  });
}

export default JobModel;
