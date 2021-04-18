import mock from '../mock';

const industryDB = {
	industry: [
		{
			id: '1',
			name: 'Accounting',
			shortCode: 'ACCOUNTING'
		},
		{
			id: '2',
			name: 'Airlines Aviation',
			shortCode: 'AIRLINES_AVIATION'
		},
		{
			id: '3',
			name: 'Apparel Fashion',
			shortCode: 'APPAREL_FASHION'
		},
		{
			id: '4',
			name: 'Architecture',
			shortCode: 'ARCHITECTURE'
		},
		{
			id: '5',
			name: 'Automotive',
			shortCode: 'AUTOMOTIVE'
		},
		{
			id: '6',
			name: 'Banking',
			shortCode: 'BANKING'
		},
		{
			id: '7',
			name: 'Technology',
			shortCode: 'TECHNOLOGY'
		},
	]
};
mock.onGet('/api/industry/all').reply(config => {
	return [200, industryDB.industry];
});
mock.onGet('/api/industry/search').reply(config => {

	const { query } = config.params;

	let response = [];
	//response = _.filter(industryDB.industry, function(o) { return o.name.toLowerCase().includes(query.toLowerCase()); });	
	
	return [200, response];
});

// mock.onGet('/api/candidates/compare').reply(config => {
// 	return [200, candiatePageDB.candidates];
// });
