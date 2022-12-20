
class ServiceProviderApi {
    //Get all project-categories
    getAll(params={}){
        let s="";
        Object.keys(params).forEach((key)=>{
            if(s!="") s+=`&`
             s+=`${key}=${params[key]}`
        })
        return window.axios.get(`service-provider/provider/project-categories?${s}`);
    }
    
}

export default new ServiceProviderApi();