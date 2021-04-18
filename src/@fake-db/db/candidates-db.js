import mock from '../mock';
import _ from '@lodash';
const candidateDB = {
	candidates: [
		{
			id: '1',
			applicant: {
				id: 195,
				firstName: "Abbott",
				lastName: "Doe 1",
				headline: "I am Wayne Doe 1",
				about: null,
				favorite: false,
				salary: 100,
				position: "Sr. Designer",
				avatar: "assets/images/avatars/Abbott.jpg",
				createdDate: 4645645456,
				noOfMonths: 5,
				level: "SENIOR",
				hasSaved: true,
				status: "ACTIVE",
				primaryAddress: {
					id: 12966,
					city: "San Diego",
					state: "California",
					country: "UK",
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
					},
					{
						id: 643,
						createdDate: 1614153073,
						name: "Accounting",
						type: "INDUSTRY"
					},
					{
						id: 442,
						createdDate: 1614153073,
						name: "Banking",
						type: "INDUSTRY"
					}
				],
				tags: [
					{
						id: 9765,
						createdDate: 1614153073,
						name: "Junior"
					},
					// {
					// 	id: 643,
					// 	createdDate: 1614153073,
					// 	name: "Reject"
					// }
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
				],
				noOfReviews: 10,
				reviews: [{
					id: 1,
					reviewer: { id: 1, firstName: "Abbott", lastName: "Doe", createdDate: 1231356, avatar: "assets/images/avatars/Abbott.jpg" }
				},
				{
					id: 2,
					reviewer: { id: 2, firstName: "Wayne", lastName: "Doe", createdDate: 1231356, avatar: "assets/images/avatars/Abbott.jpg" }
				}]
			},
			appliedOn: 1615298069,
			jobId: 112897,
			phoneNumber: 6435643,
			email: "wayne@gmail.com",
			progress: 2,
			rating: 1,
			resume: "wayne.pdf",
			status: 'APPLIED',
			sources: [{ id: 1, type: "LINKEDIN" }]
		},
		{
			id: '2',
			applicant: {
				id: 196,
				firstName: "Alice",
				lastName: "Doe",
				headline: "I am Alice",
				about: null,
				favorite: false,
				salary: 100,
				position: "Sr. UX Designer",
				avatar: "assets/images/avatars/alice.jpg",
				createdDate: 4645645456,
				noOfMonths: 45,
				level: "JUNIOR",
				hasSaved: false,
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
						name: "Accounting",
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
			},
			appliedOn: 1614611682,
			jobId: 112897,
			phoneNumber: 3554645645,
			email: "wayne@gmail.com",
			progress: 1,
			rating: 2,
			resume: "wayne.pdf",
			status: 'PHONE_SCREEN'
		},
		{
			id: '3',
			applicant: {
				id: 197,
				firstName: "Andrew",
				lastName: "Doe 3",
				headline: "I am Andre",
				about: null,
				favorite: false,
				salary: 100,
				position: "Sr. Mobile Designer",
				avatar: "assets/images/avatars/andrew.jpg",
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
			},
			appliedOn: 1614611682,
			jobId: 1,
			phoneNumber: 7564565,
			email: "wayne@gmail.com",
			progress: 3,
			rating: 4,
			resume: "wayne.pdf"
		},
		{
			id: '4',
			applicant: {
				id: 198,
				firstName: "Arnold",
				lastName: "Doe",
				headline: "I am Arnold",
				about: null,
				favorite: false,
				salary: 100,
				position: "Application Designer",
				avatar: "assets/images/avatars/Arnold.jpg",
				createdDate: 4645645456,
				noOfMonths: 45,
				level: "SENIOR",
				hasSaved: false,
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
			},
			appliedOn: 238956456,
			jobId: 112897,
			phoneNumber: 999356453,
			email: "wayne@gmail.com",
			progress: 3,
			rating: 4,
			resume: "wayne.pdf",
			status: 'PHONE_SCREEN'
		},
		{
			id: '5',
			applicant: {
				id: 199,
				firstName: "Barrera",
				lastName: "Doe",
				headline: "I am Barrera",
				about: null,
				favorite: false,
				salary: 100,
				position: "Sr. Web Designer",
				avatar: "assets/images/avatars/Barrera.jpg",
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
			},
			appliedOn: 1614261682,
			phoneNumber: 854534534,
			email: "wayne@gmail.com",
			progress: 3,
			rating: 4,
			resume: "wayne.pdf"
		},
		{
			id: '6',
			applicant: {
				id: 200,
				firstName: "Blair",
				lastName: "Doe",
				headline: "I am Blair",
				about: null,
				favorite: false,
				salary: 100,
				position: "Sr. Designer",
				avatar: "assets/images/avatars/Blair.jpg",
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
			},
			appliedOn: 1617261682,
			jobId: 1,
			phoneNumber: 235245,
			email: "wayne@gmail.com",
			progress: 3,
			rating: 4,
			resume: "wayne.pdf"
		},
		{
			id: '7',
			applicant: {
				id: 201,
				firstName: "Boyle",
				lastName: "Doe",
				headline: "I am Boyle",
				about: null,
				favorite: false,
				salary: 100,
				position: "Sr. Designer",
				avatar: "assets/images/avatars/Boyle.jpg",
				createdDate: 4645645456,
				noOfMonths: 45,
				level: "SENIOR",
				hasSaved: false,
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
			},
			appliedOn: 1619261682,
			jobId: 1,
			phoneNumber: 64354,
			email: "wayne@gmail.com",
			progress: 3,
			rating: 4,
			resume: "wayne.pdf"
		},
		{
			id: '8',
			applicant: {
				id: 202,
				firstName: "Carl",
				lastName: "Doe",
				headline: "I am Carl",
				about: null,
				favorite: false,
				salary: 100,
				position: "Designer",
				avatar: "assets/images/avatars/carl.jpg",
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
			},
			appliedOn: 1614361682,
			jobId: 1,
			phoneNumber: 76532445345,
			email: "carl@gmail.com",
			progress: 3,
			rating: 4,
			resume: "wayne.pdf"
		},
		{
			id: '9',
			applicant: {
				id: 203,
				firstName: "Christy",
				lastName: "Doe",
				headline: "I am Christy",
				about: null,
				favorite: false,
				salary: 100,
				position: "Sr. Designer",
				avatar: "assets/images/avatars/Christy.jpg",
				createdDate: 4645645456,
				noOfMonths: 45,
				level: "SENIOR",
				hasSaved: false,
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
			},
			appliedOn: 1664361682,
			jobId: 1,
			phoneNumber: 997777777777,
			email: "christy@gmail.com",
			progress: 3,
			rating: 4,
			resume: "wayne.pdf"
		},
		{
			id: '10',
			applicant: {
				id: 204,
				firstName: "Copeland",
				lastName: "Doe",
				headline: "I am Copeland Doe",
				about: null,
				favorite: false,
				salary: 100,
				position: "Sr. Designer",
				avatar: "assets/images/avatars/Copeland.jpg",
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
			},
			appliedOn: 4645645456,
			jobId: 1,
			phoneNumber: 997777777777,
			email: "Copeland@gmail.com",
			progress: 3,
			rating: 4,
			resume: "wayne.pdf"
		},
		{
			id: '11',
			applicant: {
				id: 205,
				firstName: "Danielle",
				lastName: "Doe",
				headline: "I am Danielle Doe",
				about: null,
				favorite: false,
				salary: 100,
				position: "Sr. Designer",
				avatar: "assets/images/avatars/danielle.jpg",
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
			},
			appliedOn: 4645645456,
			jobId: 1,
			phoneNumber: 997777777777,
			email: "danielle@gmail.com",
			progress: 3,
			rating: 4,
			resume: "wayne.pdf"
		},
		{
			id: '12',
			applicant: {
				id: 206,
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
			},
			appliedOn: 4645645456,
			jobId: 1,
			phoneNumber: 997777777777,
			email: "wayne@gmail.com",
			progress: 3,
			rating: 4,
			resume: "wayne.pdf"
		},
		{
			id: '13',
			applicant: {
				id: 207,
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
				hasSaved: false,
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
			},
			appliedOn: 4645645456,
			jobId: 1,
			phoneNumber: 997777777777,
			email: "wayne@gmail.com",
			progress: 3,
			rating: 4,
			resume: "wayne.pdf"
		},
		{
			id: '14',
			applicant: {
				id: 208,
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
			},
			appliedOn: 4645645456,
			jobId: 1,
			phoneNumber: 997777777777,
			email: "wayne@gmail.com",
			progress: 3,
			rating: 4,
			resume: "wayne.pdf"
		},
		{
			id: '15',
			applicant: {
				id: 209,
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
			},
			appliedOn: 4645645456,
			jobId: 1,
			phoneNumber: 997777777777,
			email: "wayne@gmail.com",
			progress: 3,
			rating: 4,
			resume: "wayne.pdf"
		},
		{
			id: '16',
			applicant: {
				id: 210,
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
			},
			appliedOn: 4645645456,
			jobId: 1,
			phoneNumber: 997777777777,
			email: "wayne@gmail.com",
			progress: 3,
			rating: 4,
			resume: "wayne.pdf"
		},
		{
			id: '17',
			applicant: {
				id: 211,
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
			},
			appliedOn: 4645645456,
			jobId: 1,
			phoneNumber: 997777777777,
			email: "wayne@gmail.com",
			progress: 3,
			rating: 4,
			resume: "wayne.pdf"
		},
		{
			id: '18',
			applicant: {
				id: 212,
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
				hasSaved: false,
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
			},
			appliedOn: 4645645456,
			jobId: 1,
			phoneNumber: 997777777777,
			email: "wayne@gmail.com",
			progress: 3,
			rating: 4,
			resume: "wayne.pdf"
		},
		{
			id: '19',
			applicant: {
				id: 213,
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
			},
			appliedOn: 4645645456,
			jobId: 1,
			phoneNumber: 997777777777,
			email: "wayne@gmail.com",
			progress: 3,
			rating: 4,
			resume: "wayne.pdf"
		},
		{
			id: '20',
			applicant: {
				id: 214,
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
			},
			appliedOn: 4645645456,
			jobId: 1,
			phoneNumber: 997777777777,
			email: "wayne@gmail.com",
			progress: 3,
			rating: 4,
			resume: "wayne.pdf"
		},
		{
			id: '21',
			applicant: {
				id: 215,
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
				hasSaved: false,
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
			},
			appliedOn: 4645645456,
			jobId: 1,
			phoneNumber: 997777777777,
			email: "wayne@gmail.com",
			progress: 3,
			rating: 4,
			resume: "wayne.pdf"
		},
		{
			id: '22',
			applicant: {
				id: 216,
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
			},
			appliedOn: 4645645456,
			jobId: 1,
			phoneNumber: 997777777777,
			email: "wayne@gmail.com",
			progress: 3,
			rating: 4,
			resume: "wayne.pdf"
		},
		{
			id: '23',
			applicant: {
				id: 217,
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
			},
			appliedOn: 4645645456,
			jobId: 1,
			phoneNumber: 997777777777,
			email: "wayne@gmail.com",
			progress: 3,
			rating: 4,
			resume: "wayne.pdf"
		},
		{
			id: '24',
			applicant: {
				id: 218,
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
				hasSaved: false,
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
			},
			appliedOn: 4645645456,
			jobId: 1,
			phoneNumber: 997777777777,
			email: "wayne@gmail.com",
			progress: 3,
			rating: 4,
			resume: "wayne.pdf"
		},
		{
			id: '25',
			applicant: {
				id: 219,
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
			},
			appliedOn: 4645645456,
			jobId: 1,
			phoneNumber: 997777777777,
			email: "wayne@gmail.com",
			progress: 3,
			rating: 4,
			resume: "wayne.pdf"
		},
		{
			id: '26',
			applicant: {
				id: 220,
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
			},
			appliedOn: 4645645456,
			jobId: 1,
			phoneNumber: 997777777777,
			email: "wayne@gmail.com",
			progress: 3,
			rating: 4,
			resume: "wayne.pdf"
		},
		{
			id: '27',
			applicant: {
				id: 221,
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
			},
			appliedOn: 4645645456,
			jobId: 1,
			phoneNumber: 997777777777,
			email: "wayne@gmail.com",
			progress: 3,
			rating: 4,
			resume: "wayne.pdf"
		},
		{
			id: '28',
			applicant: {
				id: 222,
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
			},
			appliedOn: 4645645456,
			jobId: 1,
			phoneNumber: 997777777777,
			email: "wayne@gmail.com",
			progress: 3,
			rating: 4,
			resume: "wayne.pdf"
		},
		{
			id: '29',
			applicant: {
				id: 223,
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
			},
			appliedOn: 4645645456,
			jobId: 1,
			phoneNumber: 997777777777,
			email: "wayne@gmail.com",
			progress: 3,
			rating: 4,
			resume: "wayne.pdf"
		},
		{
			id: '30',
			applicant: {
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
			},
			appliedOn: 4645645456,
			jobId: 1,
			phoneNumber: 997777777777,
			email: "wayne@gmail.com",
			progress: 3,
			rating: 4,
			resume: "wayne.pdf"
		},
	]
};

mock.onGet('/api/candidates/all').reply(config => {

	const { experience, location, industry, level, rating, salary, skill, tag, jobId } = config.params;
	let response = [];
	response = candidateDB.candidates;
	if (experience && experience.length > 0)
		response = response.filter(candidate => (candidate.applicant["noOfMonths"]) >= experience[0] && (candidate.applicant["noOfMonths"]) <= experience[1]);
	if (location && location.length > 0)
		response = response.filter(candidate => (location.indexOf(candidate.applicant["primaryAddress"]["state"]) > -1) ||
			(location.indexOf(candidate.applicant["primaryAddress"]["city"]) > -1) ||
			(location.indexOf(candidate.applicant["primaryAddress"]["country"]) > -1));
	if (industry && industry.length > 0) {
		response = response.filter(candidate => (candidate.applicant["skills"].some(s => industry.includes(s.name) && s.type === "INDUSTRY")));
	}
	if (skill && skill.length > 0) {
		response = response.filter(candidate => (candidate.applicant["skills"].some(s => skill.includes(s.name))));

	}
	if (tag && tag.length > 0) {
		response = response.filter(candidate => (candidate.applicant["tags"].some(s => tag.includes(s.name))));

	}
	if (level && level.length > 0) {
		response = response.filter(candidate => (level.indexOf(candidate.applicant.level) > -1));

	}
	if (rating && rating.length > 0) {
		response = response.filter(candidate => (candidate["rating"]) >= rating[0] && (candidate["rating"]) <= rating[1]);
	}
	if (salary && salary.length > 0) {
		response = response.filter(candidate => (candidate.applicant["salary"]) >= salary[0] && (candidate.applicant["salary"]) <= salary[1]);
	}
	if (jobId && jobId > 0) {
		response = response.filter(candidate => candidate.jobId === parseInt(jobId));
	}

	return [200, response];
});
mock.onGet('/api/candidates/candidate').reply(config => {
	const { params } = config;
	debugger;
	const response = candidateDB.candidates.find(candidate => parseInt(candidate.id) === parseInt(params.id));
	return [200, response];
});
mock.onGet('/api/candidates/compare').reply(config => {
	let response = candidateDB.candidates;
	const { jobId } = config.params;
	response = response.filter(candidate => (config.params.id.indexOf(parseInt(candidate["id"])) > -1));
	if (jobId && jobId > 0) {
		response = response.filter(candidate => candidate.jobId === parseInt(jobId));
	}
	if (config.filter) {
		const { experience, location, industry, level, rating, salary, skill, tag } = config.filter;
		if (experience && experience.length > 0)
			response = response.filter(candidate => (candidate.applicant["noOfMonths"]) >= experience[0] && (candidate.applicant["noOfMonths"]) <= experience[1]);
		if (location && location.length > 0)
			response = response.filter(candidate => (location.indexOf(candidate.applicant["primaryAddress"]["state"]) > -1) ||
				(location.indexOf(candidate.applicant["primaryAddress"]["city"]) > -1) ||
				(location.indexOf(candidate.applicant["primaryAddress"]["country"]) > -1));
		if (industry && industry.length > 0) {
			response = response.filter(candidate => (candidate.applicant["skills"].some(s => industry.includes(s.name) && s.type === "INDUSTRY")));
		}
		if (skill && skill.length > 0) {
			response = response.filter(candidate => (candidate.applicant["skills"].some(s => skill.includes(s.name))));

		}
		if (tag && tag.length > 0) {
			response = response.filter(candidate => (candidate.applicant["tags"].some(s => tag.includes(s.name))));

		}
		if (level && level.length > 0) {
			response = response.filter(candidate => (level.indexOf(candidate.applicant.level) > -1));

		}
		if (rating && rating.length > 0) {
			response = response.filter(candidate => (candidate["rating"]) >= rating[0] && (candidate["rating"]) <= rating[1]);
		}
		if (salary && salary.length > 0) {
			response = response.filter(candidate => (candidate.applicant["salary"]) >= salary[0] && (candidate.applicant["salary"]) <= salary[1]);
		}

	}
	if (config.pagination) {
		const { page, size } = config.pagination;
		response = response.slice((page * size), (page * size + size))
	}
	return [200, response];
});

mock.onGet('/api/candidates/update').reply(config => {
	const { candidate } = config.params;
	return [200, candidateDB.candidates.map((cand) => {
		if (candidate.id === cand.id)
			return candidate;
		else
			return cand;
	})];
});
mock.onGet('/api/candidates/suggestions').reply(config => {

	const { page, size } = config.params;
	let response = candidateDB.candidates.slice((page * size), (page * size + size));
	return [200, response];
})

export default candidateDB;