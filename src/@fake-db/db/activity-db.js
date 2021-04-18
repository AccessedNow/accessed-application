import mock from '../mock';
import _ from '@lodash';
const activityDB = {
    activities: [
        {
            "id": 1,
            "createdDate": 1615424833,
            "actor": {
                "id": 1,
                "avatar": "",
                "fistName": "Martin",
                "lastName": "Doe"
            },
            "verb": "post",
            "object": {
                "url": "http://example.org/blog/2011/02/entry",
                "id": "tag:example.org,2011:abc123/xyz"
            },
            "target": {
                "url": "http://example.org/blog/",
                "objectType": "blog",
                "id": "tag:example.org,2011:abc123",
                "displayName": "Martin's Blog"
            }
        },
        {
            "id": 2,
            "createdDate": 1615338433,
            "actor": {
                "id": 1,
                "avatar": "",
                "fistName": "Martin",
                "lastName": "Doe"
            },
            "verb": "posted",
            "object": {
                "url": "http://example.org/blog/2011/02/entry",
                "id": "tag:example.org,2011:abc123/xyz"
            },
            "target": {
                "url": "http://example.org/blog/",
                "objectType": "blog",
                "id": "tag:example.org,2011:abc123",
                "displayName": "Martin's Blog"
            }
        },
        {
            "id": 3,
            "createdDate": 1615338433,
            "actor": {
                "id": 1,
                "avatar": "",
                "fistName": "Martin",
                "lastName": "Doe"
            },
            "verb": "posted",
            "object": {
                "url": "http://example.org/blog/2011/02/entry",
                "id": "tag:example.org,2011:abc123/xyz"
            },
            "target": {
                "url": "http://example.org/blog/",
                "objectType": "blog",
                "id": "tag:example.org,2011:abc123",
                "displayName": "Martin's Blog"
            }
        },
        {
            "id": 4,
            "createdDate": 1615338433,
            "actor": {
                "id": 1,
                "avatar": "",
                "fistName": "Martin",
                "lastName": "Doe"
            },
            "verb": "posted",
            "object": {
                "url": "http://example.org/blog/2011/02/entry",
                "id": "tag:example.org,2011:abc123/xyz"
            },
            "target": {
                "url": "http://example.org/blog/",
                "objectType": "blog",
                "id": "tag:example.org,2011:abc123",
                "displayName": "Martin's Blog"
            }
        },
        {
            "id": 5,
            "createdDate": 1615338433,
            "actor": {
                "id": 1,
                "avatar": "",
                "fistName": "Martin",
                "lastName": "Doe"
            },
            "verb": "posted",
            "object": {
                "url": "http://example.org/blog/2011/02/entry",
                "id": "tag:example.org,2011:abc123/xyz"
            },
            "target": {
                "url": "http://example.org/blog/",
                "objectType": "blog",
                "id": "tag:example.org,2011:abc123",
                "displayName": "Martin's Blog"
            }
        },
        {
            "id": 6,
            "createdDate": 1615338433,
            "actor": {
                "id": 1,
                "avatar": "",
                "fistName": "Martin",
                "lastName": "Doe"
            },
            "verb": "posted",
            "object": {
                "url": "http://example.org/blog/2011/02/entry",
                "id": "tag:example.org,2011:abc123/xyz"
            },
            "target": {
                "url": "http://example.org/blog/",
                "objectType": "blog",
                "id": "tag:example.org,2011:abc123",
                "displayName": "Martin's Blog"
            }
        },
        {
            "id": 7,
            "createdDate": 1615338433,
            "actor": {
                "id": 1,
                "avatar": "",
                "fistName": "Martin",
                "lastName": "Doe"
            },
            "verb": "posted",
            "object": {
                "url": "http://example.org/blog/2011/02/entry",
                "id": "tag:example.org,2011:abc123/xyz"
            },
            "target": {
                "url": "http://example.org/blog/",
                "objectType": "blog",
                "id": "tag:example.org,2011:abc123",
                "displayName": "Martin's Blog"
            }
        },
        {
            "id": 8,
            "createdDate": 1615338433,
            "actor": {
                "id": 1,
                "avatar": "",
                "fistName": "Martin",
                "lastName": "Doe"
            },
            "verb": "posted",
            "object": {
                "url": "http://example.org/blog/2011/02/entry",
                "id": "tag:example.org,2011:abc123/xyz"
            },
            "target": {
                "url": "http://example.org/blog/",
                "objectType": "blog",
                "id": "tag:example.org,2011:abc123",
                "displayName": "Martin's Blog"
            }
        },
        {
            "id": 9,
            "createdDate": 1615338433,
            "actor": {
                "id": 1,
                "avatar": "",
                "fistName": "Martin",
                "lastName": "Doe"
            },
            "verb": "posted",
            "object": {
                "url": "http://example.org/blog/2011/02/entry",
                "id": "tag:example.org,2011:abc123/xyz"
            },
            "target": {
                "url": "http://example.org/blog/",
                "objectType": "blog",
                "id": "tag:example.org,2011:abc123",
                "displayName": "Martin's Blog"
            }
        },
        {
            "id": 10,
            "createdDate": 1615338433,
            "actor": {
                "id": 1,
                "avatar": "",
                "fistName": "Martin",
                "lastName": "Doe"
            },
            "verb": "posted",
            "object": {
                "url": "http://example.org/blog/2011/02/entry",
                "id": "tag:example.org,2011:abc123/xyz"
            },
            "target": {
                "url": "http://example.org/blog/",
                "objectType": "blog",
                "id": "tag:example.org,2011:abc123",
                "displayName": "Martin's Blog"
            }
        },
        {
            "id": 11,
            "createdDate": 1615338433,
            "actor": {
                "id": 1,
                "avatar": "",
                "fistName": "Martin",
                "lastName": "Doe"
            },
            "verb": "posted",
            "object": {
                "url": "http://example.org/blog/2011/02/entry",
                "id": "tag:example.org,2011:abc123/xyz"
            },
            "target": {
                "url": "http://example.org/blog/",
                "objectType": "blog",
                "id": "tag:example.org,2011:abc123",
                "displayName": "Martin's Blog"
            }
        },
        {
            "id": 12,
            "createdDate": 1615338433,
            "actor": {
                "id": 1,
                "avatar": "",
                "fistName": "Martin",
                "lastName": "Doe"
            },
            "verb": "posted",
            "object": {
                "url": "http://example.org/blog/2011/02/entry",
                "id": "tag:example.org,2011:abc123/xyz"
            },
            "target": {
                "url": "http://example.org/blog/",
                "objectType": "blog",
                "id": "tag:example.org,2011:abc123",
                "displayName": "Martin's Blog"
            }
        },
        {
            "id": 13,
            "createdDate": 1615338433,
            "actor": {
                "id": 1,
                "avatar": "",
                "fistName": "Martin",
                "lastName": "Doe"
            },
            "verb": "posted",
            "object": {
                "url": "http://example.org/blog/2011/02/entry",
                "id": "tag:example.org,2011:abc123/xyz"
            },
            "target": {
                "url": "http://example.org/blog/",
                "objectType": "blog",
                "id": "tag:example.org,2011:abc123",
                "displayName": "Martin's Blog"
            }
        },
        {
            "id": 14,
            "createdDate": 1615338433,
            "actor": {
                "id": 1,
                "avatar": "",
                "fistName": "Martin",
                "lastName": "Doe"
            },
            "verb": "posted",
            "object": {
                "url": "http://example.org/blog/2011/02/entry",
                "id": "tag:example.org,2011:abc123/xyz"
            },
            "target": {
                "url": "http://example.org/blog/",
                "objectType": "blog",
                "id": "tag:example.org,2011:abc123",
                "displayName": "Martin's Blog"
            }
        }
    ]
}

mock.onGet('/api/activities/all').reply(config => {
    let response = [];
    response = activityDB.activities;
    if (config.params.type === "recent") {
        response.filter((item) => (item.createdDate > new Date() - 7).getTime() && item.createdDate < new Date().getTime())
    }
    if (config.pagination) {
        const { page, size } = config.pagination;
        response = response.slice((page * size), (page * size + size))
    }
    return [200, response];
});

mock.onGet('/api/activities/recent').reply(config => {
    let response = [];
    response = activityDB.activities;
    if (config.pagination) {
        const { page, size } = config.pagination;
        response = response.slice((page * size), (page * size + size))
    }
    return [200, response];
});