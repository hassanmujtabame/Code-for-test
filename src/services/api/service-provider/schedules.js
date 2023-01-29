
import BaseApi from "../base-service";
class ScheduleServiceProviderApi extends BaseApi {
    //Get all schedules
    getAll(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`provider/provider-schedules?${s}`);
    }
    addItem(data){
        return window.axios.post(`provider/provider-schedules`,data);
    }
    updateItem(id,data){
        return window.axios.post(`provider/provider-schedules/${id}`,data);
    }
    deleteItem(id){
        return window.axios.delete(`provider/provider-schedules/${id}`);
    }

}

export default new ScheduleServiceProviderApi();