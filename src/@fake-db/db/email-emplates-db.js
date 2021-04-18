import mock from '../mock';

const emailTemplateDB = {
    templates: [
        {
            id: 1,
            name: "Default",
            category: {},
            type: "PIPELINE",
            stages: [
                {
                    id: new Date().getTime(),
                    name: "Phone Screen",
                    type: "PHONESCREEN",
                    timeLimit: "7D"

                },
                {
                    id: new Date().getTime(),
                    name: "Interview",
                    type: "INTERVIEW",
                    timeLimit: "7D"

                },
                {
                    id: new Date().getTime(),
                    name: "Test",
                    type: "TEST",
                    timeLimit: "7D"

                },

                {
                    id: new Date().getTime(),
                    name: "Offer",
                    type: "OFFER",
                    timeLimit: "7D"

                },
                {
                    id: new Date().getTime(),
                    name: "Hired",
                    type: "HIRED",
                    timeLimit: "7D"

                }
            ],
        },
        {
            id: 2,
            name: "Senior Marketer",
            type: "PIPELINE",
            fields: [
                {
                    id: new Date().getTime(),
                    stageName: "Testing",
                    type: "OFFER",
                    timeLimit: "7D",
                    action: [{
                        type: "SENDEMAIL",
                        title: "Welcome, [firstname]",
                        message: "Congratulations"
                    },
                    {
                        type: "ADDTASK",
                        task: "",
                        dueDate: 167890444
                    },
                    {
                        type: "ADDTAGS",
                        tags: ["tag 1", "tag 2"]
                    },
                    {
                        type: "EVALUATIONREQUEST",
                        formId: 1,
                        members: []
                    },
                    {
                        type: "EVALUATIONREQUEST",
                        formId: 1,
                        members: []
                    },
                    {
                        type: "ADDFOLLOWERS",
                        members: []
                    },
                    {
                        type: "ASSIGNTO",
                        talentPools: [],
                        jobs: []
                    }],

                }
            ]
        },
        {
            id: 3,
            name: "Recruiter",
            type: "PIPELINE",
            fields: [
                {
                    id: new Date().getTime(),
                    stageName: "Stage 1",
                    type: "OFFER",
                    timeLimit: "7D",
                    action: [{
                        type: "SENDEMAIL",
                        title: "Welcome, [firstname]",
                        message: "Congratulations"
                    },
                    {
                        type: "ADDTASK",
                        task: "",
                        dueDate: 167890444
                    },
                    {
                        type: "ADDTAGS",
                        tags: ["tag 1", "tag 2"]
                    },
                    {
                        type: "EVALUATIONREQUEST",
                        formId: 1,
                        members: []
                    },
                    {
                        type: "EVALUATIONREQUEST",
                        formId: 1,
                        members: []
                    },
                    {
                        type: "ADDFOLLOWERS",
                        members: []
                    },
                    {
                        type: "ASSIGNTO",
                        talentPools: [],
                        jobs: []
                    }],
                    members: []

                },
                {
                    id: new Date().getTime(),
                    stageName: "Damaged",
                    type: "OFFER",
                    timeLimit: "7D",
                    action: [{
                        type: "SENDEMAIL",
                        title: "Welcome, [firstname]",
                        message: "Congratulations"
                    },
                    {
                        type: "ADDTASK",
                        task: "",
                        dueDate: 167890444
                    },
                    {
                        type: "ADDTAGS",
                        tags: ["tag 1", "tag 2"]
                    },
                    {
                        type: "EVALUATIONREQUEST",
                        formId: 1,
                        members: []
                    },
                    {
                        type: "EVALUATIONREQUEST",
                        formId: 1,
                        members: []
                    },
                    {
                        type: "ADDFOLLOWERS",
                        members: []
                    },
                    {
                        type: "ASSIGNTO",
                        talentPools: [],
                        jobs: []
                    }],

                },
                {
                    id: new Date().getTime(),
                    stageName: "Damaged",
                    type: "OFFER",
                    timeLimit: "7D",
                    action: [{
                        type: "SENDEMAIL",
                        title: "Welcome, [firstname]",
                        message: "Congratulations"
                    },
                    {
                        type: "ADDTASK",
                        task: "",
                        dueDate: 167890444
                    },
                    {
                        type: "ADDTAGS",
                        tags: ["tag 1", "tag 2"]
                    },
                    {
                        type: "EVALUATIONREQUEST",
                        formId: 1,
                        members: []
                    },
                    {
                        type: "EVALUATIONREQUEST",
                        formId: 1,
                        members: []
                    },
                    {
                        type: "ADDFOLLOWERS",
                        members: []
                    },
                    {
                        type: "ASSIGNTO",
                        talentPools: [],
                        jobs: []
                    }],

                },
                {
                    id: new Date().getTime(),
                    stageName: "Damaged",
                    type: "OFFER",
                    timeLimit: "7D",
                    action: [{
                        type: "SENDEMAIL",
                        title: "Welcome, [firstname]",
                        message: "Congratulations"
                    },
                    {
                        type: "ADDTASK",
                        task: "",
                        dueDate: 167890444
                    },
                    {
                        type: "ADDTAGS",
                        tags: ["tag 1", "tag 2"]
                    },
                    {
                        type: "EVALUATIONREQUEST",
                        formId: 1,
                        members: []
                    },
                    {
                        type: "EVALUATIONREQUEST",
                        formId: 1,
                        members: []
                    },
                    {
                        type: "ADDFOLLOWERS",
                        members: []
                    },
                    {
                        type: "ASSIGNTO",
                        talentPools: [],
                        jobs: []
                    }],

                }
            ]
        },
        {
            id: 4,
            name: "Basic (Profile)",
            type: "PROFILE",
            fields: [
                {
                    id: new Date().getTime(),
                    stageName: "Damaged",
                    type: "OFFER",
                    timeLimit: "7D",
                    action: [{
                        type: "SENDEMAIL",
                        title: "Welcome, [firstname]",
                        message: "Congratulations"
                    },
                    {
                        type: "ADDTASK",
                        task: "",
                        dueDate: 167890444
                    },
                    {
                        type: "ADDTAGS",
                        tags: ["tag 1", "tag 2"]
                    },
                    {
                        type: "EVALUATIONREQUEST",
                        formId: 1,
                        members: []
                    },
                    {
                        type: "EVALUATIONREQUEST",
                        formId: 1,
                        members: []
                    },
                    {
                        type: "ADDFOLLOWERS",
                        members: []
                    },
                    {
                        type: "ASSIGNTO",
                        talentPools: [],
                        jobs: []
                    }],

                }
            ]
        },

    ]

};
mock.onGet('/api/email-templates/all').reply(config => {
    const { params } = config;
    let response = emailTemplateDB.templates;
    return [200, response];
});
