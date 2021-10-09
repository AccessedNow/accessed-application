import FuseUtils from '@fuse/utils/FuseUtils';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import ApiClient from '../apiManager';
// const api = new ApiClient();

/* eslint-disable camelcase */

class FeedService extends FuseUtils.EventEmitter {
	init() {
		this.setInterceptors();
		this.handleAuthentication();
	}

	setInterceptors = () => {
    axios.interceptors.request.use(
      requestConfig => {
        requestConfig.headers.common['Authorization'] = `Bearer ${localStorage.getItem('jwt_access_token')}`;
        requestConfig.headers.common['UserId'] = 5125;
        return requestConfig;
      },
      err => {

        return Promise.reject(err);
      },
    );

		axios.interceptors.response.use(
			response => {
				return response;
			},
			err => {
				return new Promise((resolve, reject) => {
					if (err.response.status === 401 && err.config && !err.config.__isRetryRequest) {
						// if you ever get an unauthorized response, logout the user
						this.emit('onAutoLogout', 'Invalid access_token');
						this.setSession(null);
					}
					throw err;
				});
			}
		);
	};

 

  getLatestFeeds = (id, type, page, size) => {
			return new Promise((resolve, reject) => {
				let url = null;
				if(type){
					url = `/feeds/latest?id=${id}&type=${type}&size=${size}&page=${page}`;
				} else {
          url = `/feeds/latest?id=${id}&size=${size}&page=${page}`;
				}

        ApiClient.get(url)
					.then(response => {
						if (response.data.data) {
							resolve(response.data.data);
						} else {
							reject(response.data.error);
						}
					});


			});

    // return new Promise((resolve, reject) => {
    //   axios
    //     .get('http://localhost:90/api/feeds/latest?size=20&page=0', { headers: {'userId': '5125'}})
    //     .then(response => {
    //       if (response.data) {
    //         resolve(response.data.data);
    //       } else {
    //         reject(response.data.error);
    //       }
    //     })
    //     .catch(error => {
    //       reject(new Error('Failed to login with token.'));
    //     });
    // });



  };

  getPartyFollowers = (id, type, page, size) => {
    return new Promise((resolve, reject) => {
      ApiClient.get(`/${type.toLowerCase()}/${id}/followers?size=${size}&page=${page}`)
        .then(response => {
          if (response.data.data) {
            resolve(response.data.data);
          } else {
            reject(response.data.error);
          }
        });


    });

  };

  getPartyPages = (id, type, page, size) => {
  	let path = type=='PERSON'?'user':type.toLowerCase();
  	size = size?size:10;
  	page = page?page:0;
    return new Promise((resolve, reject) => {
      ApiClient.get(`/${path}/${id}/pages?size=${size}&page=${page}&type=${type}`)
        .then(response => {
          if (response.data.data) {
            resolve(response.data.data);
          } else {
            reject(response.data.error);
          }
        });


    });

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

	createUser = data => {
		return new Promise((resolve, reject) => {
			axios.post('/api/auth/register', data).then(response => {
				if (response.data.user) {
					this.setSession(response.data.access_token);
					resolve(response.data.user);
				} else {
					reject(response.data.error);
				}
			});
		});
	};

  signInWithEmailAndPassword = (email, password) => {
		return new Promise((resolve, reject) => {

			// axios
			// 	.get('/api/auth', {
			// 		data: {
			// 			email,
			// 			password
			// 		}
			// 	})
			// 	.then(response => {
			// 		if (response.data.user) {
			// 			this.setSession(response.data.access_token);
			// 			resolve(response.data.user);
			// 		} else {
			// 			reject(response.data.error);
			// 		}
			// 	});



      ApiClient.post('/authentication/login', {username: email, password: password})
        .then(response => {

          if (response.data.data.user) {
            this.setSession(response.data.data.token);


            let payload = {data: response.data.data.user, role: 'aaaa'};

            resolve(payload);
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
						access_token: this.getAccessToken()
					}
				})
				.then(response => {
					if (response.data.user) {
						this.setSession(response.data.access_token);
						resolve(response.data.user);
					} else {
						this.logout();
						reject(new Error('Failed to login with token.'));
					}
				})
				.catch(error => {
					this.logout();
					reject(new Error('Failed to login with token.'));
				});
		});
	};

	updateUserData = user => {
		return axios.post('/api/auth/user/update', {
			user
		});
	};

	setSession = access_token => {
		if (access_token) {
			localStorage.setItem('jwt_acceredirectUrlss_token', access_token);
			axios.defaults.headers.common.Authorization = `Bearer ${access_token}`;
		} else {
			localStorage.removeItem('jwt_access_token');
			delete axios.defaults.headers.common.Authorization;
		}
	};

	logout = () => {
		this.setSession(null);
	};

	isAuthTokenValid = access_token => {
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

const instance = new FeedService();

export default instance;
