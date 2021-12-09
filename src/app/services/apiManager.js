const axios = require('axios');
const Raven = require('raven-js');
// const store  = require('../store/index');

const baseUrl = 'http://localhost:90/api';
// const baseUrl = 'http://accessed-feed-service.us-west-2.elasticbeanstalk.com/api';
// const baseUrl = 'http://anymay.us-west-2.elasticbeanstalk.com/api';

/**
 * Create a new Axios client instance
 * @see https://github.com/mzabriskie/axios#creating-an-instance
 */
const getClient = (url = null) => {

  const options = {
    baseURL: url?url:baseUrl
  };

  options.headers = {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInppcCI6IkdaSVAifQ.H4sIAAAAAAAAAKtWyiwuVrJSyk8uyS9ILUpT0lHKTCxRsjI0MzS1MDS2MDTXUUqtKIAIWBoYGIEESotTi_ISc1OB-kBMU4f03MTMHL3k_FylWgAint93UQAAAA.IMfLQrfUn6_H_DdRBAX4A3-4FlHJmURikmdtEWhjl54`,
    UserId: 5
  };


  const client = axios.create(options);


  // Add a request interceptor
  client.interceptors.request.use(
    requestConfig => {
      requestConfig.headers['Authorization'] = `Bearer ${localStorage.getItem('jwt_access_token')}`;
      requestConfig.headers['UserId'] = 87;
      return requestConfig;
    },
    (requestError) => {
      Raven.captureException(requestError);

      return Promise.reject(requestError);
    },
  );

  // Add a response interceptor
  client.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status >= 500) {
        Raven.captureException(error);
      }

      if (error.response.status === 401 && error.config && !error.config.__isRetryRequest) {
        // if you ever get an unauthorized response, logout the user
        this.emit('onAutoLogout', 'Invalid access_token');
        this.setSession(null);
      }

      return Promise.reject(error);
    },
  );

  return client;
};


class ApiClient {
  constructor(baseUrl = null) {
    this.client = getClient(baseUrl);
  }

  get(url, conf = {}) {
    return this.client.get(url, conf)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }

  delete(url, conf = {}) {
    return this.client.delete(url, conf)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }

  head(url, conf = {}) {
    return this.client.head(url, conf)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }

  options(url, conf = {}) {
    return this.client.options(url, conf)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }

  post(url, data = {}, conf = {}) {
    return this.client.post(url, data, conf)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }

  put(url, data = {}, conf = {}) {
    return this.client.put(url, data, conf)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }

  patch(url, data = {}, conf = {}) {
    return this.client.patch(url, data, conf)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }
}

const instance = new ApiClient();
export default instance;



/**
 * Base HTTP Client
 */
/*
module.exports = {
  // Provide request methods with the default base_url
  get(url, conf = {}) {
    return getClient().get(url, conf)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  },

  delete(url, conf = {}) {
    return getClient().delete(url, conf)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  },

  head(url, conf = {}) {
    return getClient().head(url, conf)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  },

  options(url, conf = {}) {
    return getClient().options(url, conf)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  },

  post(url, data = {}, conf = {}) {
    return getClient().post(url, data, conf)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  },

  put(url, data = {}, conf = {}) {
    return getClient().put(url, data, conf)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  },

  patch(url, data = {}, conf = {}) {
    return getClient().patch(url, data, conf)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }
};
*/
