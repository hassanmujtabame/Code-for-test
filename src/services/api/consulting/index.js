
import BaseApi from "../base-service";
import fields from "./fields";
class ConsultingApi extends BaseApi{
    fields = fields
            //Get all Consulting
        getAll(params={}){
            let s=this.generateQueryUrl(params)
            return window.axios.get(`consulting/consultants?${s}`);
        }
}

export default new ConsultingApi()