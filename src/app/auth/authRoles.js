/**
 * Authorization Roles
 */
const authRoles = {
  admin: ['admin', 'ROLE_ADMIN'],
  staff: ['admin', 'staff'],
  user: ['admin', 'staff', 'user', 'ROLE_USER'],
  onlyGuest: [],
};

export default authRoles;
