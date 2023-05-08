
import BaseApi from "../base-service";
class PartnersApi extends BaseApi{
    //Get all Partners
    getAll(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`incubator/partners?${s}`);
    }
    getItem(id){
        return window.axios.get(`incubator/partners/${id}`);
    }
    
}

export default new PartnersApi();