
import BaseApi from "./base-service";
class ProjectsApi extends BaseApi{
    //Get all Projects
    getAll(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`network/projects?${s}`);
    }
    getAllPage(type,perPage,params={}){
        /** for get projects [moral|physical] 
         * perPage (4|8)
        */
        let s=this.generateQueryUrl(params)
        return window.axios.get(`network/${type}-projects-list-${perPage}?${s}`);
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
    getRecents(){
        return window.axios.get(`network/projects`);// we will use latest projects
    }
    getStatistics(){
        return window.axios.get(`network/statistics-projects`);
    }
}

export default new ProjectsApi();