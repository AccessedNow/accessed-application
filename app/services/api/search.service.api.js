const ApiClient = require('../apiManager');


let client = new ApiClient('http://localhost:90/api');

module.exports = {

  find(id) {
    return client.get(`/company/${id}`);
  },

  search(data, userId){

    const options = {
      headers: {'userId': userId}
    };
    return client.post(`/company/${id}/follow`, data, options);
  },

  followCompany(id, userId){

    const options = {
      headers: {'userId': userId}
    };
    return client.post(`/company/${id}/follow`, {}, options);
  },


  createJobPost(id, jobId, userId){

    const options = {
      headers: {'userId': userId}
    };
    return client.post(`/feeds`, data, options);
  },

  update(userId, data) {
    return client.put(`/users/${userId}`, data);
  }

}
