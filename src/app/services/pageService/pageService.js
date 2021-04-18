import FuseUtils from '@fuse/utils/FuseUtils';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import ApiClient from '../apiManager';
// const api = new ApiClient();

/* eslint-disable camelcase */

class PageService extends FuseUtils.EventEmitter {
	init() {
		this.setInterceptors();
		this.handleAuthentication();
	}

  getPage = (id) => {
	  console.log('id', id)
			return new Promise((resolve, reject) => {
        ApiClient.get(`/page/${id}`)
					.then(response => {
						if (response.data.data) {
							resolve(response.data.data);
						} else {
							reject(response.data.error);
						}
					});


			});

  };

  followPage = (id) => {
    return new Promise((resolve, reject) => {
      ApiClient.post(`/page/${id}/follow`)
        .then(response => {
          if (response.data.data) {
            resolve(response.data.data);
          } else {
            reject(response.data.error);
          }
        });


    });

  };

  getPageFollowers = (id, page, size) => {
    return new Promise((resolve, reject) => {
      ApiClient.get(`/page/${id}/followers?size=${size}&page=${page}`)
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
      ApiClient.get(`/page/${id}/peopleAlsoViewed`)
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

const instance = new PageService();

export default instance;
