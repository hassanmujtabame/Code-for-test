
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
getAvailableDates(id){
    return window.axios.get(`consulting/consultants/${id}/available-time`);
}
getProjects(id){
    return window.axios.get(`consulting/consultants/${id}/projects`);
}
getCourses(id){
    return window.axios.get(`consulting/consultants/${id}/courses`);
}
getRates(id){
    return window.axios.get(`consulting/consultants/${id}/rates`);
}
}

export default new ConsultantsApi()