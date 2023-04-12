
import BaseApi from "../base-service";
import fields from "./fields";
import consultants from "./consultants";
import requests from "./requests";
import client from "./client";
class ConsultingApi extends BaseApi{
    fields = fields;
    client = client
    requests = requests;
    consultants = consultants;
            //Get all Consulting
        getAll(params={}){
            let s=this.generateQueryUrl(params)
            return window.axios.get(`consulting/consultants?${s}`);
        }
        bookingConsultant(data){
            return window.axios.post(`consulting/user/booking-consultants`,data);
        }
}

export default new ConsultingApi()