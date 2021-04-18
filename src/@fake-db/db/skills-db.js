import mock from '../mock';

const skillDb = {
	skills: [
		{
			id: '1',
			name: 'Accounting'
		},
		{
			id: '2',
			name: 'Java'
		},
		{
			id: '3',
			name: 'Windows'
		},
		{
			id: '4',
			name: 'Project Management'
		},
		{
			id: '5',
			name: 'Automotive'
		},
		{
			id: '6',
			name: 'Banking',
		},
		{
			id: '7',
			name: 'Management'
		},
		{
			id: '8',
			name: 'Development'
		},
		{
			id: '9',
			name: 'NodeJs'
		},
		{
			id: '10',
			name: 'MongoDb'
		},
		{
			id: '11',
			name: 'Management'
		},
		{
			id: '12',
			name: 'Leadership'
		},
		{
			id: '13',
			name: 'Reactive Programming'
		},
	]
};
 mock.onGet('/api/skills/all').reply(config => {
	return [200, skillDb.skills];
});
mock.onGet('/api/skills/search').reply(config => {

	const { query } = config.params;

	let response = [];
	//response = _.filter(skillDb.skills, function(o) { return o.name.toLowerCase().includes(query.toLowerCase()); });	
	
	return [200, response];
});

// mock.onGet('/api/candidates/compare').reply(config => {
// 	return [200, candiatePageDB.candidates];
// });
