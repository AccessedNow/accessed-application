import FuseUtils from '@fuse/utils/FuseUtils';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import ApiClient from '../apiManager';
// const api = new ApiClient();

/* eslint-disable camelcase */

class CompanyService extends FuseUtils.EventEmitter {
	init() {
		this.setInterceptors();
		this.handleAuthentication();
	}

  getCompany = (id) => {
			return new Promise((resolve, reject) => {
				ApiClient.get(`/company/${id}`)
					.then(response => {
						if (response.data.data) {
							resolve(response.data.data);
						} else {
							reject(response.data.error);
						}
					});


			});

  };

  followCompany = (id) => {
    return new Promise((resolve, reject) => {
      ApiClient.post(`/company/${id}/follow`)
        .then(response => {
          if (response.data.data) {
            resolve(response.data.data);
          } else {
            reject(response.data.error);
          }
        });


    });

  };

  getCompanyFollowers = (id, page, size) => {
    return new Promise((resolve, reject) => {
      ApiClient.get(`/company/${id}/followers?size=${size}&page=${page}`)
        .then(response => {
          if (response.data.data) {
            resolve(response.data.data);
          } else {
            reject(response.data.error);
          }
        });


    });

  };

  getPeopleAlsoViewed = (id) => {
    return new Promise((resolve, reject) => {
      ApiClient.get(`/company/${id}/peopleAlsoViewed`)
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

const instance = new CompanyService();

export default instance;
