import FuseUtils from '@fuse/utils/FuseUtils';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import ApiClient from '../apiManager';
const client = new ApiClient('http://accessed-feed-service.us-west-2.elasticbeanstalk.com/api');

/* eslint-disable camelcase */

class CommonService extends FuseUtils.EventEmitter {
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



  getIndustries = (query) => {
			return new Promise((resolve, reject) => {
        client.get(`/common/industry/search?query=${query}`)
					.then(response => {
						if (response.data.data) {
							resolve(response.data.data);
						} else {
							reject(response.data.error);
						}
					});
			});

  };

}

const instance = new CommonService();

export default instance;
