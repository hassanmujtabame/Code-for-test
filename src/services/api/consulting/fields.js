
import BaseApi from "../base-service";

class ConsultingFieldsApi extends BaseApi{
  //Get all Consulting fields
  getAll(params={}){
    let s=this.generateQueryUrl(params)
    return window.axios.get(`consulting/fields?${s}`);
}
getItem(id){
    return window.axios.get(`consulting/fields/${id}`);
}
getBest(params={}){
    let s=this.generateQueryUrl(params)
    return window.axios.get(`consulting/fields?${s}`);
}
}

export default new ConsultingFieldsApi()