import FuseUtils from '@fuse/utils/FuseUtils';
import axios from 'axios';
import _ from 'lodash';

import jwtDecode from 'jwt-decode';
/* eslint-disable camelcase */

class JwtService extends FuseUtils.EventEmitter {
  init() {
    this.setInterceptors();
    this.handleAuthentication();
  }

  setInterceptors = () => {
    axios.interceptors.response.use(
      (response) => {
        return response;
      },
      (err) => {

        return new Promise((resolve, reject) => {
          if(!err.response){
            this.emit('onNetworkError');
          } else {
            if (err.response.status === 401 && err.config && !err.config.__isRetryRequest) {
              // if you ever get an unauthorized response, logout the user
              this.emit('onAutoLogout', 'Invalid access_token');
              this.setSession(null);
            }
            throw err;
          }
        });
      }
    );
  };

  handleAuthentication = () => {
    const access_token = this.getAccessToken();

    if (!access_token) {
      this.emit('onNoAccessToken');

      return;
    }

    if (this.isAuthTokenValid(access_token)) {
      this.setSession(access_token);
      this.emit('onAutoLogin', true);
    } else {
      this.setSession(null);
      this.emit('onAutoLogout', 'access_token expired');
    }
  };

  createUser = (data) => {
    return new Promise((resolve, reject) => {
      axios.post('http://localhost:8080/api/registration', data).then((response) => {
        if (response.data.data.user) {
          this.setSession(response.data.data.access_token);

          let user = {
            uuid: 'XgbuVEXBU5gtSKdbQRP1Zbbby1i1',
            from: 'custom-db',
            password: 'admin',
            role: 'admin',
            data: {
              displayName: response.data.data.user.firstName + ' ' + response.data.data.user.lastName,
              photoURL: 'assets/images/avatars/Abbott.jpg',
              email: response.data.data.user.email,
              settings: {
                layout: {
                  style: 'layout1',
                  config: {
                    scroll: 'content',
                    navbar: {
                      display: false,
                      folded: true,
                      position: 'left'
                    },
                    toolbar: {
                      display: false,
                      style: 'fixed',
                      position: 'below'
                    },
                    footer: {
                      display: false,
                      style: 'fixed',
                      position: 'below'
                    },
                    mode: 'fullwidth'
                  }
                },
                customScrollbars: true,
                theme: {
                  main: 'defaultDark',
                  navbar: 'defaultDark',
                  toolbar: 'defaultDark',
                  footer: 'defaultDark'
                }
              },
              shortcuts: ['calendar', 'mail', 'contacts']
            }
          };


          // resolve(response.data.data.user);
          resolve(user);
        } else {
          reject(response.data.error);
        }
      });
    });
  };

  signInWithEmailAndPassword = (username, password) => {
    return new Promise((resolve, reject) => {
      axios
        .post('http://accessed-auth.us-west-2.elasticbeanstalk.com/api/authenticate', {
            username: username,
            password: password
        })
        .then((response) => {
          if (response.data.data.user) {
            this.setSession(response.data.data.token);

            // let user = {
            //   role: 'admin',
            //   data: {
            //     id: response.data.data.user.id,
            //     displayName: response.data.data.user.firstName + ' ' + response.data.data.user.lastName,
            //     avatar: response.data.data.user.avatar,
            //     email: response.data.data.user.email,
            //     settings: {
            //     layout: {
            //       style: 'layout1',
            //         config: {
            //         scroll: 'content',
            //           navbar: {
            //             display: true,
            //             folded: true,
            //             position: 'left'
            //         },
            //         toolbar: {
            //             display: true,
            //             style: 'fixed',
            //             position: 'below'
            //         },
            //         footer: {
            //             display: false,
            //             style: 'fixed',
            //             position: 'below'
            //         },
            //         mode: 'fullwidth'
            //       }
            //     },
            //     customScrollbars: true,
            //       theme: {
            //       main: 'accessed',
            //         navbar: 'accessed',
            //         toolbar: 'accessed',
            //         footer: 'defaultDark'
            //     }
            //   },
            //   // shortcuts: ['calendar', 'mail', 'contacts']
            // }
            // };
            // resolve(user);

            // resolve(response.data.user);
            resolve({
              data: {...response.data.data.user, displayName: response.data.data.user.firstName + ' ' + response.data.data.user.lastName },
              role: _.some(response.data.data.user.roles, ['name', 'ROLE_ADMIN'])? 'admin': 'user',
              shortcuts: ['calendar', 'mail', 'contacts']
            });

          } else {
            reject(response.data.error);
          }
        });
    });
  };

  signInWithToken = () => {
    return new Promise((resolve, reject) => {
      axios
        .get('/api/auth/access-token', {
          data: {
            access_token: this.getAccessToken(),
          },
        })
        .then((response) => {
          if (response.data.user) {
            this.setSession(response.data.access_token);
            resolve(response.data.user);
          } else {
            this.logout();
            reject(new Error('Failed to login with token.'));
          }
        })
        .catch((error) => {
          this.logout();
          reject(new Error('Failed to login with token.'));
        });
    });
  };

  confirmRegistration = (data) => {
    return new Promise((resolve, reject) => {
      axios
        .get('https://api.accessed.co/auth-service/api/registration/confirmation?token=' + data.token)
        .then((response) => {
          if (response.data.user) {
            console.log(response.data.user);
            resolve(response.data.user);
          } else {
            console.log('No data')
            reject(new Error('Failed to login with token.'));
          }
        })
        .catch((error) => {
          this.logout();
          reject(new Error('Failed to confirm with token.'));
        });
    });
  };

  updateUserData = (user) => {
    return axios.post('/api/auth/user/update', {
      user,
    });
  };

  setSession = (access_token) => {
    if (access_token) {
      localStorage.setItem('jwt_access_token', access_token);
      axios.defaults.headers.common.Authorization = `Bearer ${access_token}`;
    } else {
      localStorage.removeItem('jwt_access_token');
      delete axios.defaults.headers.common.Authorization;
    }
  };

  logout = () => {
    this.setSession(null);
  };

  isAuthTokenValid = (access_token) => {
    if (!access_token) {
      return false;
    }
    const decoded = jwtDecode(access_token);
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      console.warn('access token expired');
      return false;
    }

    return true;
  };

  getAccessToken = () => {
    return window.localStorage.getItem('jwt_access_token');
  };
}

const instance = new JwtService();

export default instance;
