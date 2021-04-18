import mock from '../mock';
import scrumboardDB from './scrumboard-db'
import candidatesDB from './candidates-db'
import FuseUtils from '@fuse/utils';
import _ from '@lodash';
const jobDB = {
  pageable: {
    sort: {
      unsorted: false,
      sort: true,
      empty: false
    },
    pageSize: 30,
    pageNumber: 0,
    paged: true,
    unpaged: false
  },
  last: false,
  totalPages: 246,
  totalElements: 7353,
  first: false,
  numberOfElements: 30,
  size: 30,
  number: 0,
  content: [
    {
      _id: "6034c458dcc5cb7705d2ee6f",
      boardId: '32gfhaf2',
      status: "ACTIVE",
      requiredResume: "false",
      durationMonths: null,
      minMonthExperience: 5,
      maxMonthExperience: 10,
      noOfResources: 1,
      noOfViews: 0,
      noOfApplied: 0,
      isNegotiable: "false",
      hasApplied: false,
      noApplied: 0,
      skills: [],
      industry: [],
      hasSaved: false,
      labels: [
        "ReactJS",
        "Web Developer",
        "UI Developer"
      ],
      tags: [
        "ReactJS",
        "Web Developer",
        "UI Developer"
      ],
      isExternal: false,
      shareUrl: "https://www.anymay.com/jobs/112897",
      workflowId: 100001,
      panelist: [],
      title: "Accountant Staff",
      currency: "USD",
      expirationDate: 1580545602,
      requiredOnDate: 1581755202,
      salaryRangeLow: 65000,
      salaryRangeHigh: 80000,
      salaryFixed: null,
      jobFunction: "TECH",
      level: {
        _id: "5f9eefd560d5b1d78202afa8",
        shortCode: "EXECUTIVE",
        name: "Executive"
      },
      city: "San Jose",
      state: "California",
      country: "US",
      zipcode: "",
      employmentType: "PARTTIME",
      company: {
        id: 1055,
        partyType: "COMPANY",
        name: "Vice News",
        avatar: "logo.png",
        cover: "",
        isCoverDefault: false,
        noOfMembers: 32,
        noOfEmployees: 1,
        website: ""
      },
      createdBy: {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        avatar: "assets/images/avatars/Barrera.jpg"
      },
      createdDate: 1614070872013,
      jobId: 112897,
      id: "6034c458dcc5cb7705d2ee6f",
      members: [
        {

          id: 224,
          firstName: "Wayne",
          lastName: "Doe",
          headline: "I am Wayne Doe",
          about: null,
          favorite: false,
          salary: 100,
          position: "Sr. Designer",
          avatar: "assets/images/avatars/katherine.jpg",
          createdDate: 4645645456,
          noOfMonths: 45,
          level: "SENIOR",
          hasSaved: true,
          status: "ACTIVE",
          primaryAddress: {
            id: 12966,
            city: "San Jose",
            state: "California",
            country: "US",
            postalCode: null,
            district: ""
          },
          partyType: "PERSON",
          skills: [
            {
              id: 9765,
              createdDate: 1614153073,
              name: "AutoCAD",
              type: "INDUSTRY"
            }
          ],
          tags: [
            {
              id: 9765,
              createdDate: 1614153073,
              name: "Junior"
            },
            {
              id: 643,
              createdDate: 1614153073,
              name: "Reject"
            }
          ],
          links: [
            {
              id: 9765,
              type: "FACEBOOK",
              url: "http://www.facebook.com/53534"
            },
            {
              id: 65,
              type: "GOOGLE",
              url: "http://www.gool.com/53534"
            }
          ]

        }],
      category: "",
      education: ""
    },
    {
      _id: "6034c458dcc5cb7705d2ee6g",
      status: "ACTIVE",
      requiredResume: "false",
      durationMonths: null,
      minMonthExperience: 72,
      maxMonthExperience: 96,
      noOfResources: 1,
      noOfViews: 0,
      noOfApplied: 0,
      isNegotiable: "false",
      hasApplied: false,
      noApplied: 0,
      skills: [],
      industry: [],
      hasSaved: false,
      labels: [
        "ReactJS",
        "Web Developer",
        "UI Developer"
      ],
      tags: [
        "ReactJS",
        "Web Developer",
        "UI Developer"
      ],
      isExternal: false,
      shareUrl: "https://www.anymay.com/jobs/112897",
      workflowId: 100001,
      panelist: [],
      title: "Accountant Staff1",
      currency: "USD",
      expirationDate: 1580545602,
      requiredOnDate: 1581755202,
      salaryRangeLow: 65000,
      salaryRangeHigh: 80000,
      salaryFixed: null,
      jobFunction: "TECH",
      level: {
        _id: "5f9eefd560d5b1d78202afa8",
        shortCode: "EXECUTIVE",
        name: "Executive"
      },
      city: "San Jose",
      state: "California",
      country: "US",
      employmentType: "PARTTIME",
      company: {
        id: 1055,
        partyType: "COMPANY",
        name: "Vice News 2",
        avatar: "logo.png",
        cover: "",
        isCoverDefault: false,
        noOfMembers: 32,
        noOfEmployees: 1,
        website: ""
      },
      createdBy: {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        avatar: "assets/images/avatars/Barrera.jpg"
      },
      createdDate: 1614070872013,
      jobId: 112898,
      id: "6034c458dcc5cb7705d2ee6g",
      category: "",
      education: ""
    },
    {
      _id: "6034c458dcc5cb7705d2ee6g",
      status: "ACTIVE",
      requiredResume: "false",
      durationMonths: null,
      minMonthExperience: 72,
      maxMonthExperience: 96,
      noOfResources: 1,
      noOfViews: 0,
      noOfApplied: 0,
      isNegotiable: "false",
      hasApplied: false,
      noApplied: 0,
      skills: [],
      industry: [],
      hasSaved: false,
      labels: [
        "ReactJS",
        "Web Developer",
        "UI Developer"
      ],
      tags: [
        "ReactJS",
        "Web Developer",
        "UI Developer"
      ],
      isExternal: false,
      shareUrl: "https://www.anymay.com/jobs/112897",
      workflowId: 100001,
      panelist: [],
      title: "Accountant Staff1",
      currency: "USD",
      expirationDate: 1580545602,
      requiredOnDate: 1581755202,
      salaryRangeLow: 65000,
      salaryRangeHigh: 80000,
      salaryFixed: null,
      jobFunction: "TECH",
      level: {
        _id: "5f9eefd560d5b1d78202afa8",
        shortCode: "EXECUTIVE",
        name: "Executive"
      },
      city: "San Jose",
      state: "California",
      country: "US",
      employmentType: {
        _id: "5f9ef07f60d5b1d78202afab",
        shortCode: "PARTTIME",
        name: "Part-Time"
      },
      company: {
        id: 1055,
        partyType: "COMPANY",
        name: "Vice News 2",
        avatar: "logo.png",
        cover: "",
        isCoverDefault: false,
        noOfMembers: 32,
        noOfEmployees: 1,
        website: ""
      },
      createdBy: {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        avatar: "assets/images/avatars/Barrera.jpg"
      },
      createdDate: 1614070872013,
      jobId: 112896,
      id: "6034c458dcc5cb7705d2ee6a"
    },
    {
      _id: "6034c458dcc5cb7705d2ee6b",
      status: "ACTIVE",
      requiredResume: "false",
      durationMonths: null,
      minMonthExperience: 72,
      maxMonthExperience: 96,
      noOfResources: 1,
      noOfViews: 0,
      noOfApplied: 0,
      isNegotiable: "false",
      hasApplied: false,
      noApplied: 0,
      skills: [],
      industry: [],
      hasSaved: false,
      labels: [
        "ReactJS",
        "Web Developer",
        "UI Developer"
      ],
      tags: [
        "ReactJS",
        "Web Developer",
        "UI Developer"
      ],
      isExternal: false,
      shareUrl: "https://www.anymay.com/jobs/112897",
      workflowId: 100001,
      panelist: [],
      title: "Accountant Staff1",
      currency: "USD",
      expirationDate: 1580545602,
      requiredOnDate: 1581755202,
      salaryRangeLow: 65000,
      salaryRangeHigh: 80000,
      salaryFixed: null,
      jobFunction: "TECH",
      level: {
        _id: "5f9eefd560d5b1d78202afa8",
        shortCode: "EXECUTIVE",
        name: "Executive"
      },
      city: "San Jose",
      state: "California",
      country: "US",
      employmentType: {
        _id: "5f9ef07f60d5b1d78202afab",
        shortCode: "PARTTIME",
        name: "Part-Time"
      },
      company: {
        id: 1055,
        partyType: "COMPANY",
        name: "Vice News 2",
        avatar: "logo.png",
        cover: "",
        isCoverDefault: false,
        noOfMembers: 32,
        noOfEmployees: 1,
        website: ""
      },
      createdBy: {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        avatar: "assets/images/avatars/Barrera.jpg"
      },
      createdDate: 1614070872013,
      jobId: 112895,
      id: "6034c458dcc5cb7705d2ee6b"
    }
    ,
    {
      _id: "6034c458dcc5cb7705d2ee6c",
      status: "ACTIVE",
      requiredResume: "false",
      durationMonths: null,
      minMonthExperience: 72,
      maxMonthExperience: 96,
      noOfResources: 1,
      noOfViews: 0,
      noOfApplied: 0,
      isNegotiable: "false",
      hasApplied: false,
      noApplied: 0,
      skills: [],
      industry: [],
      hasSaved: false,
      labels: [
        "ReactJS",
        "Web Developer",
        "UI Developer"
      ],
      tags: [
        "ReactJS",
        "Web Developer",
        "UI Developer"
      ],
      isExternal: false,
      shareUrl: "https://www.anymay.com/jobs/112897",
      workflowId: 100001,
      panelist: [],
      title: "Accountant Staff1",
      currency: "USD",
      expirationDate: 1580545602,
      requiredOnDate: 1581755202,
      salaryRangeLow: 65000,
      salaryRangeHigh: 80000,
      salaryFixed: null,
      jobFunction: "TECH",
      level: {
        _id: "5f9eefd560d5b1d78202afa8",
        shortCode: "EXECUTIVE",
        name: "Executive"
      },
      city: "San Jose",
      state: "California",
      country: "US",
      employmentType: {
        _id: "5f9ef07f60d5b1d78202afab",
        shortCode: "PARTTIME",
        name: "Part-Time"
      },
      company: {
        id: 1055,
        partyType: "COMPANY",
        name: "Vice News 2",
        avatar: "logo.png",
        cover: "",
        isCoverDefault: false,
        noOfMembers: 32,
        noOfEmployees: 1,
        website: ""
      },
      createdBy: {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        avatar: "assets/images/avatars/Barrera.jpg"
      },
      createdDate: 1614070872013,
      jobId: 112894,
      id: "6034c458dcc5cb7705d2ee6c"
    },
    {
      _id: "6034c458dcc5cb7705d2ee6d",
      status: "ACTIVE",
      requiredResume: "false",
      durationMonths: null,
      minMonthExperience: 72,
      maxMonthExperience: 96,
      noOfResources: 1,
      noOfViews: 0,
      noOfApplied: 0,
      isNegotiable: "false",
      hasApplied: false,
      noApplied: 0,
      skills: [],
      industry: [],
      hasSaved: false,
      labels: [
        "ReactJS",
        "Web Developer",
        "UI Developer"
      ],
      tags: [
        "ReactJS",
        "Web Developer",
        "UI Developer"
      ],
      isExternal: false,
      shareUrl: "https://www.anymay.com/jobs/112897",
      workflowId: 100001,
      panelist: [],
      title: "Accountant Staff1",
      currency: "USD",
      expirationDate: 1580545602,
      requiredOnDate: 1581755202,
      salaryRangeLow: 65000,
      salaryRangeHigh: 80000,
      salaryFixed: null,
      jobFunction: "TECH",
      level: {
        _id: "5f9eefd560d5b1d78202afa8",
        shortCode: "EXECUTIVE",
        name: "Executive"
      },
      city: "San Jose",
      state: "California",
      country: "US",
      employmentType: {
        _id: "5f9ef07f60d5b1d78202afab",
        shortCode: "PARTTIME",
        name: "Part-Time"
      },
      company: {
        id: 1055,
        partyType: "COMPANY",
        name: "Vice News 2",
        avatar: "logo.png",
        cover: "",
        isCoverDefault: false,
        noOfMembers: 32,
        noOfEmployees: 1,
        website: ""
      },
      createdBy: {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        avatar: "assets/images/avatars/Barrera.jpg"
      },
      createdDate: 1614070872013,
      jobId: 112893,
      id: "6034c458dcc5cb7705d2ee6d"
    },
    {
      _id: "6034c458dcc5cb7705d2ee6e",
      status: "ACTIVE",
      requiredResume: "false",
      durationMonths: null,
      minMonthExperience: 72,
      maxMonthExperience: 96,
      noOfResources: 1,
      noOfViews: 0,
      noOfApplied: 0,
      isNegotiable: "false",
      hasApplied: false,
      noApplied: 0,
      skills: [],
      industry: [],
      hasSaved: false,
      labels: [
        "ReactJS",
        "Web Developer",
        "UI Developer"
      ],
      tags: [
        "ReactJS",
        "Web Developer",
        "UI Developer"
      ],
      isExternal: false,
      shareUrl: "https://www.anymay.com/jobs/112897",
      workflowId: 100001,
      panelist: [],
      title: "Accountant Staff1",
      currency: "USD",
      expirationDate: 1580545602,
      requiredOnDate: 1581755202,
      salaryRangeLow: 65000,
      salaryRangeHigh: 80000,
      salaryFixed: null,
      jobFunction: "TECH",
      level: {
        _id: "5f9eefd560d5b1d78202afa8",
        shortCode: "EXECUTIVE",
        name: "Executive"
      },
      city: "San Jose",
      state: "California",
      country: "US",
      employmentType: {
        _id: "5f9ef07f60d5b1d78202afab",
        shortCode: "PARTTIME",
        name: "Part-Time"
      },
      company: {
        id: 1055,
        partyType: "COMPANY",
        name: "Vice News 2",
        avatar: "logo.png",
        cover: "",
        isCoverDefault: false,
        noOfMembers: 32,
        noOfEmployees: 1,
        website: ""
      },
      createdBy: {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        avatar: "assets/images/avatars/Barrera.jpg"
      },
      createdDate: 1614070872013,
      jobId: 112893,
      id: "6034c458dcc5cb7705d2ee6e"
    }
  ]
};
mock.onGet('/api/jobs/getJobs').reply(config => {


  let response = jobDB.content;
  let total = 0;
  if (config.filter) {
    const { experience, skill, owner, status } = config.filter;

    if (experience && experience.length > 0)
      response = response.filter(candidate => (candidate["minMonthExperience"]) >= experience[0] && (candidate["maxMonthExperience"]) <= experience[1]);

    if (skill && skill.length > 0) {
      response = response.filter(job => (job["skills"].some(s => skill.includes(s.name))));

    }
    if (status && status.length > 0) {
      response = response.filter(job => (status.indexOf(job.status.toLowerCase()) > -1));

    }
    if (owner && owner.length > 0) {
      response = response.filter(job => (owner.indexOf(job.company.name) > -1));

    }
  }
  total = response.length;
  if (config.pagination) {
    const { page, size } = config.pagination;
    response = response.slice((page * size), (page * size + size))
  }
  response = response.map((job) => {
    return { ...job, candidates: candidatesDB.candidates.filter(candidate => candidate.jobId === job.jobId) }
  })


  return [200, { data: response, total: total }];
});

mock.onGet('/api/jobs/search').reply(config => {

  let response = jobDB.content;

  return [200, response];
});

mock.onGet('/api/jobs/job').reply(config => {
  const { params } = config;
  debugger;
  const response = jobDB.content.find(job => job.jobId === parseInt(params.jobId));
  return [200, response];
});

mock.onGet('/api/jobs/board').reply(config => {
  const { params } = config;

  let response = scrumboardDB.boards.find(board => board.id === params.boardId);

  let lists = response.lists.map(b => {
    return { ...b, idCards: candidatesDB.candidates.filter(candidate => candidate.jobId === params.jobId && candidate.status === b.status) }
  })

  response.lists = _.sortBy(lists, 'sequence');
  return [200, response];
});

mock.onPost('/api/jobs/candidates/order').reply(request => {
  const { boardId, lists } = JSON.parse(request.data);
  const board = _.find(scrumboardDB.boards, { id: boardId });
  board.lists = _.sortBy(lists, 'sequence');
  return [200, lists];
});


mock.onGet('/api/jobs/board/candidates').reply(config => {
  const { params } = config;
  const response = candidatesDB.candidates.filter(candidate => candidate.jobId === params.jobId && candidate.status === params.status);
  return [200, response];
});

mock.onGet('/api/jobs/update-job').reply(config => {
  const { job } = config.params;
  return [200, jobDB.content.map((cand) => {
    if (job.jobId === cand.id)
      return job;
    else
      return cand;
  })];
});
mock.onPost('/api/jobs/add-job').reply(request => {
  const { job } = JSON.parse(request.data);

  let newObj = {
    ...job,
    id: new Date().getTime(),
    jobId: new Date().getTime()
  };
  jobDB.content = [newObj, ...jobDB.content];
  return [200, newObj];
});

mock.onPost('/api/jobs/update-job').reply(config => {
  const { job } = config.params;
  return [200, jobDB.content.map((cand) => {
    if (job.jobId === cand.id)
      return job;
    else
      return cand;
  })];
});

mock.onPost('/api/jobs/remove-job').reply(request => {
  const { jobId } = JSON.parse(request.data);
  jobDB.content = jobDB.content.filter(contact => jobId !== contact.jobId);

  return [200, jobDB];
});




