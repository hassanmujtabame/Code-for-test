
import BaseApi from "../base-service";
import fields from "./fields";
import consultants from "./consultants";
import requests from "./requests";
class ConsultingApi extends BaseApi{
    fields = fields;
    requests = requests;
    consultants = consultants;
            //Get all Consulting
        getAll(params={}){
            let s=this.generateQueryUrl(params)
            return window.axios.get(`consulting/consultants?${s}`);
        }
}

export default new ConsultingApi()