import FuseUtils from '@fuse/utils/FuseUtils';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import ApiClient from '../apiManager';
// const api = new ApiClient();

/* eslint-disable camelcase */

class JobService extends FuseUtils.EventEmitter {
  init() {
    this.setInterceptors();
    this.handleAuthentication();
  }

  setInterceptors = () => {
    axios.interceptors.request.use(
      requestConfig => {
        requestConfig.headers.common['Authorization'] = `Bearer ${localStorage.getItem('jwt_access_token')}`;
        requestConfig.headers.common['UserId'] = 5;
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

  getJobLanding = () => {
    return new Promise((resolve, reject) => {
      ApiClient.get(`http://accessed-job-service.us-west-2.elasticbeanstalk.com/api/jobs/landing`)
        .then(response => {
          if (response.data.data) {
            resolve(response.data.data);
          } else {
            reject(response.data.error);
          }
        });


    });

  };

  getCompanyJobs = (id) => {
    return new Promise((resolve, reject) => {
      ApiClient.get(`http://accessed-job-service.us-west-2.elasticbeanstalk.com/api/company/${id}/jobs`)
        .then(response => {
          if (response.data.data) {
            resolve(response.data.data);
          } else {
            reject(response.data.error);
          }
        });


    });

  };

  getJobById = (id) => {
    return new Promise((resolve, reject) => {
      console.log('id', id)
      ApiClient.get(`http://accessed-job-service.us-west-2.elasticbeanstalk.com/api/jobs/${id}`)
        .then(response => {
          if (response.data.data) {
            resolve(response.data.data);
          } else {
            reject(response.data.error);
          }
        });


    });

  };

  searchJobs = (filter) => {
    var params = new URLSearchParams(filter);
    return new Promise((resolve, reject) => {
      ApiClient.get(`http://accessed-job-service.us-west-2.elasticbeanstalk.com/api/jobs/search?${params}`)
        .then(response => {
          if (response.data.data) {
            resolve(response.data.data);
          } else {
            reject(response.data.error);
          }
        });


    });

  };


  addJob = (object) => {
    return new Promise((resolve, reject) => {
      ApiClient.post(`http://accessed-job-service.us-west-2.elasticbeanstalk.com/api/jobs`, object)
        .then(response => {
          if (response.data.data) {
            resolve(response.data.data);
          } else {
            reject(response.data.error);
          }
        });


    });

  };

  updateJob = (object) => {
    return new Promise((resolve, reject) => {

      ApiClient.put(`http://accessed-job-service.us-west-2.elasticbeanstalk.com/api/jobs/${object.jobId}`, object)
        .then(response => {
          if (response.data.data) {
            resolve(response.data.data);
          } else {
            reject(response.data.error);
          }
        });


    });

  };

  getCategories = (searchText) => {
    return new Promise((resolve, reject) => {

      ApiClient.get(`http://accessed-feed-service.us-west-2.elasticbeanstalk.com/api/categories/list?query=&type=JOB`)
        .then(response => {
          if (response.data.data) {
            resolve(response.data.data);
          } else {
            reject(response.data.error);
          }
        });


    });

  };

  getSkills = (searchText) => {
    return new Promise((resolve, reject) => {

      ApiClient.get(`http://accessed-feed-service.us-west-2.elasticbeanstalk.com/api/common/skills/search?query=&id=`)
        .then(response => {
          if (response.data.data) {
            resolve(response.data.data);
          } else {
            reject(response.data.error);
          }
        });


    });

  };

  getIndustries = (searchText) => {
    return new Promise((resolve, reject) => {

      ApiClient.get(`http://accessed-feed-service.us-west-2.elasticbeanstalk.com/api/common/industry/search?query=`)
        .then(response => {
          if (response.data.data) {
            resolve(response.data.data);
          } else {
            reject(response.data.error);
          }
        });


    });

  };

  getJobFunctions = (searchText) => {
    return new Promise((resolve, reject) => {

      ApiClient.get(`http://accessed-feed-service.us-west-2.elasticbeanstalk.com/api/common/jobfunction/search?query=`)
        .then(response => {
          if (response.data.data) {
            resolve(response.data.data);
          } else {
            reject(response.data.error);
          }
        });


    });

  };

  getTitleSuggestion = (searchText) => {
    return new Promise((resolve, reject) => {

      ApiClient.get(`http://accessed-job-service.us-west-2.elasticbeanstalk.com/api/jobs/search/suggestions?query=a`)
        .then(response => {
          if (response.data.data) {
            resolve(response.data.data);
          } else {
            reject(response.data.error);
          }
        });


    });

  };



};



const instance = new JobService();

export default instance;
