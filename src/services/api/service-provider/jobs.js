import BaseApi from "../base-service";
class JobsServiceApi extends BaseApi {
    //Get all schedules
    getAll(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`service-provider/user/jobs?${s}`);
    }
    getItem(id){
        return window.axios.get(`service-provider/user/jobs/${id}`);
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
    suspendItem(id){
        return window.axios.post(`service-provider/user/jobs/suspend/${id}`);  
    }
    notSuspendItem(id){
        return window.axios.post(`service-provider/user/jobs/not-suspend/${id}`);  
    }
    getCategories(){
        return window.axios.get(`service-provider/user/service-categories`);  
    }
    getFields(id,params){
        let s=this.generateQueryUrl({...params,service_category_id:id})
        return window.axios.get(`service-provider/user/service-fields?${s}`); 
    }
    applyJob(data){
       /*
       note
        job_id
        cv
       */
        return window.axios.post(`service-provider/user/apply-job`,data); 

    }

}

export default new JobsServiceApi();