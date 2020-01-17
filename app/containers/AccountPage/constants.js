/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CHANGE_FORGOT_STATUS = 'boilerplate/Account/CHANGE_FORGOT_STATUS';

export const REGISTER_USER = 'boilerplate/Account/REGISTER_USER';
export const REGISTER_USER_SUCCESS = 'boilerplate/Account/REGISTER_USER_SUCCESS';
export const REGISTER_USER_ERROR = 'boilerplate/Account/REGISTER_USER_ERROR';
export const LOGIN_USER = 'boilerplate/Account/LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'boilerplate/Account/LOGIN_USER_SUCCESS';
export const LOGIN_USER_ERROR = 'boilerplate/Account/LOGIN_USER_ERROR';

