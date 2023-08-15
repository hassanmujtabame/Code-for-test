import BaseApi from "./base-service";
class AdsApi extends BaseApi{
  
    getAll(params={}){
        let s=this.generateQueryUrl(params)
        ///user/banners?position=string&paginate=number
        return window.axios.get(`banners?${s}`);
        //return window.axios.get(`network/ads?${s}`);
    }
}
export default new AdsApi();