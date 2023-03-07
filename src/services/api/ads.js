import BaseApi from "./base-service";
class AdsApi extends BaseApi{
 
    getAll(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`network/ads?${s}`);
    }
    
}

export default new AdsApi();