
import BaseApi from "../base-service";

class ConsultingRequestsApi extends BaseApi{
  //Get all Consultants
  getAll(params={}){
    let s=this.generateQueryUrl(params)
    return window.axios.get(`consulting/consultants/consultations/requests?${s}`);
}
getItem(id){
    return window.axios.get(`consulting/consultants/consultations/requests/${id}`);
}
approveIt(id,data){
    return window.axios.post(`consulting/consultants/consultations/${id}/approve`,data);
}
finishedIt(id){
    return window.axios.post(`consulting/consultants/consultations/${id}/finished`);
}
disapproveIt(id){
    return window.axios.post(`consulting/consultants/consultations/${id}/disapprove`);
}

}

export default new ConsultingRequestsApi()