import BaseApi from "./base-service";
// https://api.riadiat.sa/api/v1/affiliates/more-profitable
class MarketApi extends BaseApi {
  //Get all Blogs
  getAll() {
    return window.axios.get(`affiliates/more-profitable`);
  }
  
 
  getItem(id) {
    return window.axios.get(`affiliates/more-profitable/${id}`);
  }
  
  
  
  
 
  
 
}

export default new MarketApi();
