import mock from '../mock';

const mailDB = {
	mails: [
    {
      _id: "6034c458dcc5cb7705d2ee6f",
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
      title: "Accountant Staff",
      currency: "USD",
      expirationDate: 1580545602,
      requiredOnDate: 1581755202,
      salaryRangeLow: 65000,
      salaryRangeHigh: 80000,
      salaryFixed: null,
      jobFunction: "TECH",
			description: "We are looking for a Chief Technology Officer to help pursue our mission: simplify the homeownership journey with consolidated services, " +
			"transparent pricing, and most importantly, a client-centric philosophy. CapCenter needs a technology executive that is ready to make an impact from day one. " +
			"Together, our team makes the buy, sell and refinance process easier and less stressful for our clients. One team + big savings leads to clients for life. ",
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
      id: "6034c458dcc5cb7705d2ee6f"
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
      title: "Senior UX Designer",
      currency: "USD",
      expirationDate: 1580545602,
      requiredOnDate: 1581755202,
      salaryRangeLow: 65000,
      salaryRangeHigh: 80000,
      salaryFixed: null,
      jobFunction: "TECH",
      description: "We are looking for a Chief Technology Officer to help pursue our mission: simplify the homeownership journey with consolidated services, " +
      "transparent pricing, and most importantly, a client-centric philosophy. CapCenter needs a technology executive that is ready to make an impact from day one. " +
      "Together, our team makes the buy, sell and refinance process easier and less stressful for our clients. One team + big savings leads to clients for life. ",
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
      jobId: 112898,
      id: "6034c458dcc5cb7705d2ee6g"
    }
  ],
	folders: [
		{
			id: 0,
			handle: 'inbox',
			title: 'Inbox',
			translate: 'INBOX',
			icon: 'inbox'
		},
		{
			id: 1,
			handle: 'sent',
			title: 'Sent',
			translate: 'SENT',
			icon: 'send'
		},
		{
			id: 2,
			handle: 'drafts',
			title: 'Drafts',
			translate: 'DRAFTS',
			icon: 'email_open'
		},
		{
			id: 3,
			handle: 'spam',
			title: 'Spam',
			translate: 'SPAM',
			icon: 'error'
		},
		{
			id: 4,
			handle: 'trash',
			title: 'Trash',
			translate: 'TRASH',
			icon: 'delete'
		}
	],
	filters: [
		{
			id: 0,
			handle: 'starred',
			title: 'Starred',
			translate: 'STARRED',
			icon: 'star'
		},
		{
			id: 1,
			handle: 'important',
			title: 'Important',
			translate: 'IMPORTANT',
			icon: 'label'
		}
	],
	labels: [
		{
			id: 0,
			handle: 'note',
			title: 'Note',
			color: '#7CB342'
		},
		{
			id: 1,
			handle: 'paypal',
			title: 'Paypal',
			color: '#D84315'
		},
		{
			id: 2,
			handle: 'invoice',
			title: 'Invoice',
			color: '#607D8B'
		},
		{
			id: 3,
			handle: 'amazon',
			title: 'Amazon',
			color: '#03A9F4'
		}
	]
};

// mock.onGet('/api/job-app/job').reply(config => {
// 	const { params } = config;
// 	console.log(params.jobId)
// 	const response = mailDB.mails.find(mail => mail.jobId === parseInt(params.jobId));
// 	return [200, response];
// });

mock.onGet('/api/job-app/jobs').reply(config => {
	const { params } = config;
	let response = [];

	if (params.labelHandle) {
		const labelId = mailDB.labels.find(label => label.handle === params.labelHandle).id;

		response = mailDB.mails.filter(mail => mail.labels.includes(labelId));
	} else if (params.filterHandle) {
		response = mailDB.mails.filter(mail => mail[params.filterHandle]);
	} // folderHandle
	else {
		let { folderHandle } = params;
		if (!folderHandle) {
			folderHandle = 'inbox';
		}
		const folderId = mailDB.folders.find(folder => folder.handle === folderHandle).id;
		// response = mailDB.mails.filter(mail => mail.folder === folderId);
    response = mailDB.mails;
	}

	return [200, response];
});

mock.onPost('/api/job-app/update-job').reply(request => {
	const mail = JSON.parse(request.data);
	mailDB.mails = mailDB.mails.map(_mail => {
		if (_mail.id === mail.id) {
			return mail;
		}
		return _mail;
	});

	return [200, mail];
});
mock.onGet('/api/job-app/filters').reply(200, mailDB.filters);
mock.onGet('/api/job-app/labels').reply(200, mailDB.labels);
mock.onGet('/api/job-app/folders').reply(200, mailDB.folders);

mock.onPost('/api/job-app/set-folder').reply(request => {
	const data = JSON.parse(request.data);
	const { selectedMailIds, folderId } = data;
	mailDB.mails = mailDB.mails.map(_mail => {
		if (selectedMailIds.includes(_mail.id)) {
			return {
				..._mail,
				folder: folderId
			};
		}
		return _mail;
	});

	return [200];
});

mock.onPost('/api/job-app/toggle-label').reply(request => {
	const data = JSON.parse(request.data);
	const { selectedMailIds, labelId } = data;
	mailDB.mails = mailDB.mails.map(_mail => {
		if (selectedMailIds.includes(_mail.id)) {
			return {
				..._mail,
				labels: _mail.labels.includes(labelId)
					? _mail.labels.filter(_id => _id !== labelId)
					: [..._mail.labels, labelId]
			};
		}
		return _mail;
	});

	return [200];
});
mock.onPost('/api/job-app/delete-mails').reply(request => {
	const data = JSON.parse(request.data);
	const { selectedMailIds } = data;
	mailDB.mails = mailDB.mails.filter(_mail => (selectedMailIds.includes(_mail.id) ? false : _mail));
	return [200];
});
