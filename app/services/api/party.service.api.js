const ApiClient = require('../apiManager');


let client = new ApiClient('http://accessed.us-west-2.elasticbeanstalk.com/api');

async function findById(id) {
  if(id==null){
    return;
  }
  let response = await client.get(`/party/${id}`);
  return response.data.data;
}

function findCompanyById(id) {
  if(id==null){
    return;
  }
  return client.get(`/company/${id}`);
}


module.exports = {

  findById : findById,
  findCompanyById : findCompanyById,
  update(id, data) {
    return client.put(`/party/${id}`, data);
  }

}
