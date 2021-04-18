import mock from '../mock';


const categoryDB = {
	category: [
		{			
			name:'Accounting'
		},
		{
			
			name:'Administrative & Clerical'
		},
		{
			
			name:'Agriculture'
		},
		{
			
			name:'Architectural Services'
		}
		,
		{
			
			name:'Arts & entertainment'
		},
		{
			
			name:'Automotive'
		},
		{
			
			name:'Banking'
		},
		{
			
			name:'Biotech, Pharma, R&D'
		},
		{
			
			name:'Construction'
		},
		{
			
			name:'Consulting'
		}
	]
};
mock.onGet('/api/job-category/all').reply(config => {
	
	return [200, categoryDB.category];
});

