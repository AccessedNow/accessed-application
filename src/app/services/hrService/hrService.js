import FuseUtils from '@fuse/utils/FuseUtils';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import ApiClient from '../apiManager';
// const api = new ApiClient();

/* eslint-disable camelcase */

class HRService extends FuseUtils.EventEmitter {
	init() {
	}

  getJobById = (id) => {
    return new Promise((resolve, reject) => {
    	console.log('id', id)
      ApiClient.get(`http://localhost:8081/api/talent/jobs/${id}`)
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
      ApiClient.get(`http://localhost:8081/api/talent/jobs?${params}`)
        .then(response => {
          if (response.data.data) {
            resolve(response.data.data);
          } else {
            reject(response.data.error);
          }
        });


    });

  };


  searchApplications = (jobId, filter) => {
    var params = new URLSearchParams(filter);
    return new Promise((resolve, reject) => {
      ApiClient.get(`http://localhost:8081/api/talent/jobs/${jobId}/applications?${params}`)
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

const instance = new HRService();

export default instance;
