import FuseUtils from '@fuse/utils/FuseUtils';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import ApiClient from '../apiManager';
// const api = new ApiClient();

/* eslint-disable camelcase */

class UserService extends FuseUtils.EventEmitter {
	init() {
		this.setInterceptors();
		this.handleAuthentication();
	}

  getProfile = (id) => {
			return new Promise((resolve, reject) => {
        ApiClient.get(`/user/${id}`)
					.then(response => {
						if (response.data.data) {
							resolve(response.data.data);
						} else {
							reject(response.data.error);
						}
					});


			});

  };

  getRelationship = (id) => {
    return new Promise((resolve, reject) => {
      ApiClient.get(`/user/${id}/relationship`)
        .then(response => {
          if (response.data.data) {
            resolve(response.data.data);
          } else {
            reject(response.data.error);
          }
        });


    });

  };

  getProfileDetail = (id) => {
    return new Promise((resolve, reject) => {
      ApiClient.get(`/user/${id}/detail`)
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
      ApiClient.get(`/user/${id}/peopleAlsoViewed`)
        .then(response => {
          if (response.data.data) {
            resolve(response.data.data);
          } else {
            reject(response.data.error);
          }
        });


    });

  };

  getPeopleYouMayKnow = (id) => {
    return new Promise((resolve, reject) => {
      ApiClient.get(`/user/${id}/peopleYouMayKnow`)
        .then(response => {
          if (response.data.data) {
            resolve(response.data.data);
          } else {
            reject(response.data.error);
          }
        });


    });

  };

  getExperiences = (id) => {
    return new Promise((resolve, reject) => {
      ApiClient.get(`/user/${id}/experiences`)
        .then(response => {
          if (response.data.data) {
            resolve(response.data.data);
          } else {
            reject(response.data.error);
          }
        });


    });

  };

  getEducations = (id) => {
    return new Promise((resolve, reject) => {
      ApiClient.get(`/user/${id}/educations`)
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

}

const instance = new UserService();

export default instance;
