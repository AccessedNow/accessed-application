import FuseUtils from '@fuse/utils/FuseUtils';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import ApiClient from '../apiManager';
// const api = new ApiClient();

/* eslint-disable camelcase */

class PipeLineService extends FuseUtils.EventEmitter {
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

  

  getPipeLineById = (companyId,id) => {
    return new Promise((resolve, reject) => {
      console.log('id', id)
      ApiClient.get(`http://accessed-job-service.us-west-2.elasticbeanstalk.com/api/company/${companyId}/pipelines/${id}`)
        .then(response => {
          if (response.data.data) {
            resolve(response.data.data);
          } else {
            reject(response.data.error);
          }
        });


    });

  };

  getCompanyPipeLines = (companyId) => {
 
    return new Promise((resolve, reject) => {
      ApiClient.get(`http://accessed-job-service.us-west-2.elasticbeanstalk.com/api/company/${companyId}/pipelines`)
        .then(response => {
          if (response.data.data) {
            resolve(response.data.data);
          } else {
            reject(response.data.error);
          }
        });


    });

  };


  addPipeLine = (companyId,object) => {
    return new Promise((resolve, reject) => {
      ApiClient.post(`http://accessed-job-service.us-west-2.elasticbeanstalk.com/api/company/${companyId}/pipelines`, object)
        .then(response => {
          if (response.data.data) {
            resolve(response.data.data);
          } else {
            reject(response.data.error);
          }
        });


    });

  };

  updatePipeLine = (companyId,id,object) => {
    return new Promise((resolve, reject) => {

      ApiClient.put(`http://accessed-job-service.us-west-2.elasticbeanstalk.com/api/company/${companyId}/pipelines/${id}`, object)
        .then(response => {
          if (response.data.data) {
            resolve(response.data.data);
          } else {
            reject(response.data.error);
          }
        });


    });

  }; 


  removePipeLine = (companyId,id) => {
    return new Promise((resolve, reject) => {

      ApiClient.delete(`http://accessed-job-service.us-west-2.elasticbeanstalk.com/api/company/${companyId}/pipelines/${id}`)
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



const instance = new PipeLineService();

export default instance;
