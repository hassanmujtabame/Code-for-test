
import BaseApi from "../base-service";
import partners from "./partners";
class IncubatorApi extends BaseApi{
    partners = partners
    getHomeSchedules(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`network/network-schedule?${s}`);
    }
    getStages(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`incubator/stages?${s}`);

    }
    getSubscribes(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`incubator/user-subscriptions?${s}`);
    }
    getStageItem(id,params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`incubator/stages/${id}?${s}`);
    }
    getStagePhase(stage_id,params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`incubator/stage/${stage_id}?${s}`);
    }
    getProgram(id){
        return window.axios.get(`incubator/projects/${id}`);
    }
    getPackages(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`incubator/packages?${s}`);
    }
    checkoutPackageFree(data){
        return window.axios.post(`incubator/user-checkout-package-free`,data);
    }
    checkoutPackage(data){
        return window.axios.post(`incubator/user-checkout`,data);
    }
    getProjects(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`incubator/projects?${s}`); 
    }
    getPartners(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`incubator/partners?${s}`); 
    }
    getProgramContents(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`incubator/program-contents?${s}`); 
    }
    getDepartments(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`incubator/departments?${s}`); 
    }
    getDepartment(id){
        return window.axios.get(`incubator/departments/${id}`); 
    }
    getNumbers(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`incubator/numbers?${s}`);
    }
}

export default new IncubatorApi();