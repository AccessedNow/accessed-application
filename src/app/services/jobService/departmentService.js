import FuseUtils from '@fuse/utils/FuseUtils';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import ApiClient from '../apiManager';
// const api = new ApiClient();

/* eslint-disable camelcase */

class DepartmentService extends FuseUtils.EventEmitter {
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

  

  getDepartments = (companyId) => {
    return new Promise((resolve, reject) => {

      ApiClient.get(`http://accessed-job-service.us-west-2.elasticbeanstalk.com/api/company/${companyId}/departments`)
        .then(response => {
          if (response.data.data) {
            resolve(response.data.data);
          } else {
            reject(response.data.error);
          }
        });


    });

  };


  addDepartment = (companyId,object) => {
    return new Promise((resolve, reject) => {
      ApiClient.post(`http://accessed-job-service.us-west-2.elasticbeanstalk.com/api/company/${companyId}/departments`, object)
        .then(response => {
          if (response.data.data) {
            resolve(response.data.data);
          } else {
            reject(response.data.error);
          }
        });


    });

  };

  updateDepartment = (companyId,id,object) => {
    return new Promise((resolve, reject) => {

      ApiClient.put(`http://accessed-job-service.us-west-2.elasticbeanstalk.com/api/company/${companyId}/departments/${id}`, object)
        .then(response => {
          if (response.data.data) {
            resolve(response.data.data);
          } else {
            reject(response.data.error);
          }
        });


    });
  };


  removeDepartment = (companyId,id) => {
    return new Promise((resolve, reject) => {

      ApiClient.delete(`http://accessed-job-service.us-west-2.elasticbeanstalk.com/api/company/${companyId}/departments/${id}`)
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



const instance = new DepartmentService();

export default instance;
