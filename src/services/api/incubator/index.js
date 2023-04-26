
import BaseApi from "../base-service";
class IncubatorApi extends BaseApi{
    getHomeSchedules(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`network/network-schedule?${s}`);
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
    getProgramsProjects(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`incubator/phases?${s}`); 
    }
    getDepartments(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`incubator/departments?${s}`); 
    }
    getDepartment(id){
        return window.axios.get(`incubator/departments/${id}`); 
    }
}

export default new IncubatorApi();