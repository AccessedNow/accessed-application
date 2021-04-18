import FuseUtils from '@fuse/utils';
import _ from '@lodash';
import mock from '../mock';
const departmentDB = {
    departments: [
        {
            id: 1,
            name: "Finance",
            manager: {
                id: 224,
                firstName: "Wayne",
                lastName: "Doe 1",
                avatar: "assets/images/avatars/katherine.jpg",
            },
            location: "",
            noOfEmployee: 5
        },
        {
            id: 2,
            name: "Automobiles",
            manager: {
                id: 224,
                firstName: "Wayne",
                lastName: "Doe 1",
                avatar: "assets/images/avatars/katherine.jpg",
            },
            location: "",
            noOfEmployee: 5
        },
        {
            id: 3,
            name: "IT",
            manager: {
                id: 224,
                firstName: "Wayne",
                lastName: "Doe 1",
                avatar: "assets/images/avatars/katherine.jpg",
            },
            location: "",
            noOfEmployee: 5
        },
        {
            id: 4,
            name: "HR",
            manager: {
                id: 224,
                firstName: "Wayne",
                lastName: "Doe 1",
                avatar: "assets/images/avatars/katherine.jpg",
            },
            location: "",
            noOfEmployee: 5
        },
        {
            id: 5,
            name: "Sales",
            manager: {
                id: 224,
                firstName: "Wayne",
                lastName: "Doe 1",
                avatar: "assets/images/avatars/katherine.jpg",
            },
            location: "",
            noOfEmployee: 5
        }

    ]
};
mock.onGet('/api/departments/all').reply(config => {
    return [200, departmentDB.departments];
});

mock.onPost('/api/departments/add-department').reply(request => {
    const { department } = JSON.parse(request.data);

    let newObj = {
        ...department,
        id: new Date().getTime()
    };
    departmentDB.departments = [newObj, ...departmentDB.departments];
    return [200, newObj];
});

mock.onPost('/api/departments/update-department').reply(config => {
    const { department } = JSON.parse(config.data);
    let response = departmentDB.departments.map((cand) => {
        if (department.id === cand.id)
            return department;
        else
            return cand;
    });

    return [200, response];
});

mock.onPost('/api/departments/remove-department').reply(request => {
    const { id } = JSON.parse(request.data);
    departmentDB.departments = departmentDB.departments.filter(contact => id !== contact.id);

    return [200, departmentDB];
});