
import BaseApi from "./base-service";
class ProjectsApi extends BaseApi{
    //Get all Projects
    getAll(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`network/projects?${s}`);
    }
    getHomeNetwork(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`network/home-projects?${s}`);
    }
    getItem(id){
        return window.axios.get(`network/projects/${id}`);
    }
    addItem(data){
        return window.axios.post(`network/projects`,data);  
    }
    getCategories(){
        return window.axios.get(`network/projects-categories`);
    }
}

export default new ProjectsApi();