import mock from '../mock';


const addressDB = {
	address: [
		{
			id: '1',
			city: 'San Jose',
			state: 'California',
			country: 'US'
		},
		{
			id: '2',
			city: 'San Diego',
			state: 'California',
			country: 'US'
		},
		{
			id: '3',
			city: 'San Francisco',
			state: 'California',
			country: 'US'
		},
		{
			id: '4',
			city: 'Los Angeles',
			state: 'California',
			country: 'US'
		},
		{
			id: '5',
			city: 'Philadelphia',
			state: 'Pennsylvania',
			country: 'US'
		},
		{
			id: '6',
			city: 'Chicao',
			state: 'Illinois',
			country: 'US'
		},
		{
			id: '7',
			city: 'New York',
			state: 'New York',
			country: 'US'
		},
		{
			id: '8',
			city: 'Seattle',
			state: 'Washington',
			country: 'US'
		},
		{
			id: '8',
			city: 'Houston',
			state: 'Texas',
			country: 'US'
		},
		{
			id: '9',
			city: 'Miamia',
			state: 'Florida',
			country: 'US'
		},
	]
};
mock.onGet('/api/address/all').reply(config => {	

	return [200, addressDB.address];
});

mock.onGet('/api/address/search').reply(config => {

	const { query } = config.params;

	let response = [];
	//response = _.filter(addressDB.address, function(o) { return o.city.toLowerCase().includes(query.toLowerCase()) || o.state.toLowerCase().includes(query.toLowerCase()) || o.country.toLowerCase().includes(query.toLowerCase()); });	
	
	return [200, response];
});

// mock.onGet('/api/candidates/compare').reply(config => {
// 	return [200, candiatePageDB.candidates];
// });
