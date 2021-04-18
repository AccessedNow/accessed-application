import mock from '../mock';
import _ from '@lodash';
const membersDB = {
	members: [
		{

			id: 224,
			firstName: "Wayne",
			lastName: "Doe 1",
			headline: "I am Wayne Doe 1",
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
			partyType: "PERSON",
			role: "Administrator"
		},
		{

			id: 225,
			firstName: "Wayne",
			lastName: "Doe 2",
			headline: "I am Wayne Doe2",
			about: null,
			favorite: false,
			salary: 100,
			position: "Sr. Designer",
			avatar: "assets/images/avatars/Abbott.jpg",
			createdDate: 4645645456,
			noOfMonths: 45,
			level: "SENIOR",
			hasSaved: true,
			status: "ACTIVE",
			partyType: "PERSON",
      role: "Administrator"
		},
		{

			id: 226,
			firstName: "Wayne",
			lastName: "Doe 3",
			headline: "I am Wayne Doe 3",
			about: null,
			favorite: false,
			salary: 100,
			position: "Sr. Designer",
			avatar: "assets/images/avatars/alice.jpg",
			createdDate: 4645645456,
			noOfMonths: 45,
			level: "SENIOR",
			hasSaved: true,
			status: "ACTIVE",
			partyType: "PERSON",
      role: "Administrator"
		},
		{

			id: 227,
			firstName: "Wayne",
			lastName: "Doe 4",
			headline: "I am Wayne Doe 4",
			about: null,
			favorite: false,
			salary: 100,
			position: "Sr. Designer",
			avatar: "assets/images/avatars/andrew.jpg",
			createdDate: 4645645456,
			noOfMonths: 45,
			level: "SENIOR",
			hasSaved: true,
			status: "ACTIVE",
			partyType: "PERSON",
			role: "Corporate Recruiter"

		},
	]
};
mock.onGet('/api/members/all').reply(config => {
	return [200, membersDB.members];
});
// mock.onGet('/api/candidates/all').reply(config => {

// 	const { experience, location, industry, level, rating, salary, skill, tag,jobId} = config.params;
// 	let response = [];
// 	response = candidateDB.candidates;
// 	if (experience && experience.length > 0)
// 		response = response.filter(candidate => (candidate.applicant["noOfMonths"]) >= experience[0] && (candidate.applicant["noOfMonths"]) <= experience[1]);
// 	if (location && location.length > 0)
// 		response = response.filter(candidate => (location.indexOf(candidate.applicant["primaryAddress"]["state"]) > -1) ||
// 			(location.indexOf(candidate.applicant["primaryAddress"]["city"]) > -1) ||
// 			(location.indexOf(candidate.applicant["primaryAddress"]["country"]) > -1));
// 	if (industry && industry.length > 0) {
// 		response = response.filter(candidate => (candidate.applicant["skills"].some(s => industry.includes(s.name) && s.type === "INDUSTRY")));
// 	}
// 	if (skill && skill.length > 0) {
// 		response = response.filter(candidate => (candidate.applicant["skills"].some(s => skill.includes(s.name))));

// 	}
// 	if (tag && tag.length > 0) {
// 		response = response.filter(candidate => (candidate.applicant["tags"].some(s => tag.includes(s.name))));

// 	}
// 	if (level && level.length > 0) {
// 		response = response.filter(candidate => (level.indexOf(candidate.applicant.level) > -1));

// 	}
// 	if (rating && rating.length > 0) {
// 		response = response.filter(candidate => (candidate["rating"]) >= rating[0] && (candidate["rating"]) <= rating[1]);
// 	}
// 	if (salary && salary.length > 0) {
// 		response = response.filter(candidate => (candidate.applicant["salary"]) >= salary[0] && (candidate.applicant["salary"]) <= salary[1]);
// 	}
// 	if(jobId && jobId>0)
// 	{
// 		response = response.filter(candidate => candidate.jobId===parseInt(jobId));
// 	}

// 	return [200, response];
// });
// mock.onGet('/api/candidates/candidate').reply(config => {
//   const { params } = config;
//   debugger;
//   const response = candidateDB.candidates.find(candidate => parseInt(candidate.id) === parseInt(params.id));
//   return [200, response];
// });
// mock.onGet('/api/candidates/compare').reply(config => {
// 	let response = candidateDB.candidates;

// 	response = response.filter(candidate => (config.params.id.indexOf(parseInt(candidate["id"])) > -1));
// 	return [200, response];
// });

// mock.onGet('/api/candidates/update').reply(config => {
// 	const { candidate } = config.params;
// 	return [200, candidateDB.candidates.map((cand) => {
// 		if (candidate.id === cand.id)
// 			return candidate;
// 		else
// 			return cand;
// 	})];
// });
// mock.onGet('/api/candidates/suggestions').reply(config => {

// 	const { page, size } = config.params;
// 	let response = candidateDB.candidates.slice((page * size), (page * size + size));
// 	return [200, response];
// })

 export default membersDB;
