/*
 * JobList Constants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const FETCH_JOB_LIST = 'boilerplate/Job/FETCH_JOB_LIST';
export const FETCH_JOB_LIST_SUCCESS = 'boilerplate/Job/FETCH_JOB_LIST_SUCCESS';
export const FETCH_JOB_LIST_ERROR = 'boilerplate/Job/FETCH_JOB_LIST_ERROR';
export const FETCH_POPULAR_JOBS_SUCCESS = 'boilerplate/Job/FETCH_POPULAR_JOBS_SUCCESS';
export const FETCH_POPULAR_JOBS_ERROR = 'boilerplate/Job/FETCH_POPULAR_JOBS_ERROR';