import ConfirmationDialog from 'app/main/documentation/material-ui-components/components/dialogs/ConfirmationDialog';
import mock from '../mock';

const companyDB = {
	companies: [
    {
      "id": 25,
      "name": "Hacker News",
      "avatar": "logo.png",
      "cover": "",
      "partyType": "COMPANY",
      "headline": "",
      "primaryAddress": {
        "name": null,
        "address1": "1600 Paseo Drive",
        "city": "Mountain View",
        "state": "California",
        "country": "US",
        "images": [
          "image.png",
          "image2.png",
          "image3.png"
        ]
      },
      "hasFollowed": false,
      "images": [
        "image.png",
        "image2.png",
        "image3.png"
      ],
      "role": {
        "default": true,
        "privileges": [
          "view_candidates"
        ],
        "_id": "606af1f79d374cc49876fdb2",
        "name": "Administrator",
        "company": 17,
        "description": {
          "en": "Can search, filter, follow/unfollow, and view candidate overviews including personal information, tags, sources, and experience as well as request evaluations for any candidate the user has access to."
        },
        "createdBy": 91
      },
    },
    {
      "id": 100,
      "name": "ABC News",
      "avatar": "logo.png",
      "cover": "",
      "partyType": "COMPANY",
      "headline": "",
      "primaryAddress": {
        "name": null,
        "address1": "1600 Paseo Drive",
        "city": "Mountain View",
        "state": "California",
        "country": "US",
        "images": [
          "image.png",
          "image2.png",
          "image3.png"
        ]
      },
      "hasFollowed": false,
      "images": [
        "image.png",
        "image2.png",
        "image3.png"
      ],
      "role": {
        "default": true,
        "privileges": [
          "view_candidates"
        ],
        "_id": "606af1f79d374cc49876fdb2",
        "name": "Administrator",
        "company": 17,
        "description": {
          "en": "Can search, filter, follow/unfollow, and view candidate overviews including personal information, tags, sources, and experience as well as request evaluations for any candidate the user has access to."
        },
        "createdBy": 91
      },
    },
    {
      "id": 101,
      "name": "Al Jazeera",
      "avatar": "logo.png",
      "cover": "",
      "partyType": "COMPANY",
      "headline": "",
      "primaryAddress": {
        "name": null,
        "address1": "1600 Paseo Drive",
        "city": "Mountain View",
        "state": "California",
        "country": "US",
        "images": [
          "image.png",
          "image2.png",
          "image3.png"
        ]
      },
      "hasFollowed": false,
      "images": [
        "image.png",
        "image2.png",
        "image3.png"
      ],
      "role": {
        "default": true,
        "privileges": [
          "view_candidates"
        ],
        "_id": "606af1f79d374cc49876fdb2",
        "name": "Administrator",
        "company": 17,
        "description": {
          "en": "Can search, filter, follow/unfollow, and view candidate overviews including personal information, tags, sources, and experience as well as request evaluations for any candidate the user has access to."
        },
        "createdBy": 91
      },
    },
    {
      "id": 102,
      "name": "Ars Technica",
      "avatar": "logo.png",
      "cover": "",
      "partyType": "COMPANY",
      "headline": "",
      "primaryAddress": {
        "name": null,
        "address1": "1600 Paseo Drive",
        "city": "Mountain View",
        "state": "California",
        "country": "US",
        "images": [
          "image.png",
          "image2.png",
          "image3.png"
        ]
      },
      "hasFollowed": false,
      "images": [
        "image.png",
        "image2.png",
        "image3.png"
      ],
      "role": {
        "default": true,
        "privileges": [
          "view_candidates"
        ],
        "_id": "606af1f79d374cc49876fdb2",
        "name": "Administrator",
        "company": 17,
        "description": {
          "en": "Can search, filter, follow/unfollow, and view candidate overviews including personal information, tags, sources, and experience as well as request evaluations for any candidate the user has access to."
        },
        "createdBy": 91
      },
    }
	]
};


mock.onGet('/api/companies/all').reply(config => {
	return [200, companyDB.companies];
});

mock.onGet('/api/companies/getUserCompanies').reply(config => {
	return [200, companyDB.companies.filter(m=>m.userId===config.params)];
});


mock.onGet('/api/company').reply(request => {
  const { id } = request.params;
  const response = null; // _.find(companyDB.companies, { id: id });
  return [200, response];
});
