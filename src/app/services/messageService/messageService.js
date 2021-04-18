import FuseUtils from '@fuse/utils/FuseUtils';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import ApiClient from '../apiManager';
// const api = new ApiClient();

/* eslint-disable camelcase */

class MessageService extends FuseUtils.EventEmitter {
	init() {
		this.setInterceptors();
		this.handleAuthentication();
	}

  getUserThreads = (id, page, size, sort) => {
			return new Promise((resolve, reject) => {
        ApiClient.get(`/v1/chat/users/${id}/threads?size=${size}&page=${page}&sortBy=${sort}`)
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

const instance = new MessageService();

export default instance;
