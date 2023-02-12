import BaseApi from "../base-service";
class ProjectsApi extends BaseApi{
    //Get all Projects
    getAll(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`academy/courses?${s}`);
    }
    getItem(id){
        return window.axios.get(`academy/courses/${id}`);
    }
    
}

export default new ProjectsApi();