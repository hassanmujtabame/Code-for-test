import BaseApi from "../base-service";
class JobsServiceApi extends BaseApi {
    //Get all schedules
    getAll(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`service-provider/user/jobs?${s}`);
    }
    addItem(data){
        return window.axios.post(`service-provider/user/jobs`,data);  
    }
    updateItem(id,data){
        data.append('_method','PUT')
        return window.axios.put(`service-provider/user/jobs/${id}`,data);  
    }
    deleteItem(id){
        return window.axios.delete(`service-provider/user/jobs/${id}`);  
    }

}

export default new JobsServiceApi();