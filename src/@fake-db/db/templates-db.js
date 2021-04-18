import mock from '../mock';

const templateDB = { 
    templates: [
        {
            id: 1,
            name: "Default",
            category: {},
            type: "PIPELINE",
            stages: [
                {
                    id: 101,
                    name: "Sourced",
                    type: "SOURCED",
                    timeLimit: "7D",
                    isDefault:true,
                    actions:[]
                },
                {
                    id: 102,
                    name: "Apply",
                    type: "APPLY",
                    timeLimit: "7D",
                    isDefault:true,
                    actions:[]
                },
                {
                    id: 103,
                    name: "On-Site Interview",
                    type: "ONSITEINETRVIEW",
                    timeLimit: "7D",
                    actions:[{
                        id:1,
                        type:"SENDEMAIL",
                        meta:{}
                    }]

                },

                {
                    id: 104,
                    name: "Evaluation",
                    type: "EVALUATION",
                    timeLimit: "7D",
                    actions:[]

                },
                {
                    id: 105,
                    name: "Offer",
                    type: "OFFER",
                    timeLimit: "7D",
                    actions:[]

                },
                {
                    id: 106,
                    name: "Hired",
                    type: "HIRED",
                    timeLimit: "7D",
                    actions:[
                        {
                            id:2,
                            type:'ADDTAGS',
                            meta:{
                                tags:[]
                            }
                        }
                    ]

                }
            ],
        },
        {
            id: 2,
            name: "Senior Marketer",
            type: "PIPELINE",
             stages: [
                {
                    id: 101,
                    name: "Sourced",
                    type: "SOURCED",
                    timeLimit: "7D",
                    isDefault:true
                },
                {
                    id: 102,
                    name: "Apply",
                    type: "APPLY",
                    timeLimit: "7D",
                    isDefault:true
                },
                {
                    id: 103,
                    name: "On-Site Interview",
                    type: "ONSITEINETRVIEW",
                    timeLimit: "7D",
                    actions:[{
                        id:1,
                        type:"SENDEMAIL",
                        meta:{}
                    }]

                }               
            ]
        },
        {
            id: 3,
            name: "Recruiter",
            type: "PIPELINE",
            stages: [
                {
                    id: 101,
                    name: "Sourced",
                    type: "SOURCED",
                    timeLimit: "7D",
                    isDefault:true
                },
                {
                    id: 102,
                    name: "Apply",
                    type: "APPLY",
                    timeLimit: "7D",
                    isDefault:true
                },              

                {
                    id: 103,
                    name: "Evaluation",
                    type: "EVALUATION",
                    timeLimit: "7D"

                },
                {
                    id: 104,
                    name: "Offer",
                    type: "OFFER",
                    timeLimit: "7D"

                },
              
            ]
        },
        {
            id: 4,
            name: "Basic (Profile)",
            type: "PROFILE",
            fields: [
                {
                    id: new Date().getTime(),
                    name: "Email",
                    type: "SINGLELINETEXT"
                }
            ]
        },

    ]

};
mock.onGet('/api/templates/all').reply(config => {
    const { params } = config;
    let response = templateDB.templates;
    return [200, response];
});


mock.onGet('/api/templates/getTemplateById').reply(config => {
    const { params } = config;
    let response = templateDB.templates.find(m=>m.id===params.id);
    return [200, response];
});

mock.onGet('/api/templates/getTemplateByType').reply(config => {
    const { params } = config;
    let response = templateDB.templates.filter(m=>m.type===params);
    return [200, response];
});