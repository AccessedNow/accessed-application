const ApiClient = require('../apiManager');
const qs = require('qs');

// let client = new ApiClient('http://localhost:90/api');
let client = new ApiClient('http://accessed-feed-service.us-west-2.elasticbeanstalk.com/api');

module.exports = {

  findCompanyRelationById(id) {
    return client.get(`/company/${id}`);
  },

  searchCompany(params, data){

    // const options = {
    //   headers: {'userId': userId}
    // };
    return client.post(`/search/all?` + qs.stringify(params), data);
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
