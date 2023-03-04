
import BaseApi from "../base-service";

class ConsultantsApi extends BaseApi{
  //Get all Consultants
  getAll(params={}){
    let s=this.generateQueryUrl(params)
    return window.axios.get(`consulting/consultants?${s}`);
}
getItem(id){
    return window.axios.get(`consulting/consultants/${id}`);
}
getBest(params={}){
    let s=this.generateQueryUrl(params)
    return window.axios.get(`consulting/consultants?${s}`);
}
}

export default new ConsultantsApi()