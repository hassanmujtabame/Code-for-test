
import BaseApi from "../base-service";
class CategorieszScheduleServiceApi extends BaseApi {
    //Get all schedules
    getAll(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`service-provider/provider/schedule-categories?${s}`);
    }
    getItem(id){
        
        return window.axios.get(`service-provider/provider/schedule-categories/${id}`,);
    }
    addItem(data){
        
        return window.axios.post(`service-provider/provider/schedule-categories`,data);
    }
    updateItem(id,data){
        data.append('_method','PUT')
        return window.axios.post(`service-provider/provider/schedule-categories/${id}`,data);
    }
    deleteItem(id){
        return window.axios.delete(`service-provider/provider/schedule-categories/${id}`);
    }

}

export default new CategorieszScheduleServiceApi();