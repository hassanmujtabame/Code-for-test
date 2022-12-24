
class ProjectsApi {
    //Get all Projects
    getAll(params={}){
        let s="";
        Object.keys(params).forEach((key)=>{
            if(s!="") s+=`&`
             s+=`${key}=${params[key]}`
        })
        return window.axios.get(`network/projects?${s}`);
    }
    getItem(id){
        return window.axios.get(`network/projects/${id}`);
    }
}

export default new ProjectsApi();