import config from '../config/config';


export function epochToDate(timestamp) {
    var date = new Date(timestamp); // The 0 there is the key, which sets the date to the epoch
    // d.setUTCSeconds(timestamp);
    return date;
};


export function dateDifference(timestamp) {
    let date = new Date(timestamp); // The 0 there is the key, which sets the date to the epoch
    let currentDate = new Date();
    let diffTime = Math.abs(currentDate - date);
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
};
