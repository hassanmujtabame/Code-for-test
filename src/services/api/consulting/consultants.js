
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
register(data){
    return window.axios.get(`consulting/consultants`,data);
    
}
getAvailability(id,params={}){
    let s=this.generateQueryUrl(params)
    return window.axios.get(`consulting/consultants/${id}/availability?${s}`);
}
getMyAvailability(params={}){
    let s=this.generateQueryUrl(params)
    return window.axios.get(`consulting/consultants-my-availability?${s}`);
}
updateMyAvailability(data){
    return window.axios.post(`consulting/consultants-my-availability`,data)
}
mySchedules(params={}){
    let s=this.generateQueryUrl(params)
    return window.axios.get(`consulting/consultants-my-schedules?${s}`);
}
updateMyAvailabiltyOld(data){
    //data.append('_method','PUT')
    return window.axios.post(`consulting/consultants-my-schedules`,data)
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