
import BaseApi from "./base-service";
class ScheduleApi extends BaseApi {
    //Get all schedules
    getAll(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`network/schedules?${s}`);
    }
    getItem(id){
        return window.axios.get(`network/schedules/${id}`);
    }
    getHomeNetwork(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`network/network-schedule?${s}`);
    }
    getRecent(){
        return window.axios.get(`network/latest-schedules`);
    }

}

export default new ScheduleApi();