
import BaseApi from "./base-service";
class ProjectsApi extends BaseApi{
    //Get all Projects
    getAll(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`network/projects?${s}`);
    }
    getInvestProjectRequests(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`network/project-offers?${s}`);
    }
    
    approveInvestProjectRequest(id){
        return window.axios.get(`network/project-offers/${id}/approve`);
    }
    getEndWeek(params={}){
        /** project which end this week */
        let s=this.generateQueryUrl(params)
        return window.axios.get(`network/projects-end-this-week?${s}`);
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
    makeOffer(dataItem){
        return window.axios.post(`network/project-user-offers`,dataItem);

    }
}

export default new ProjectsApi();