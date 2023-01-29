
import BaseApi from "../base-service";
class ScheduleServiceProviderApi extends BaseApi {
    //Get all schedules
    getAll(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`service-provider/provider/provider-schedules?${s}`);
    }
    addItem(data){
        //data.append('_method','PUT')
        return window.axios.post(`service-provider/provider/provider-schedules`,data);
    }
    updateItem(id,data){
        return window.axios.post(`service-provider/provider/provider-schedules/${id}`,data);
    }
    deleteItem(id){
        return window.axios.delete(`service-provider/provider/provider-schedules/${id}`);
    }

}

export default new ScheduleServiceProviderApi();