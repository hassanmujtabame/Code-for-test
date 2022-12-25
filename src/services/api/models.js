
class ModelsApi {
    //Get all Models
    getAll(params={}){
        let s="";
        Object.keys(params).forEach((key)=>{
            if(s!="") s+=`&`
             s+=`${key}=${params[key]}`
        })
        return window.axios.get(`network/models?${s}`);
    }
    getCategories(){
        return window.axios.get(`network/blogs-categories`);//إستعمال مؤقت 
    }
    getItem(id){
        return window.axios.get(`network/models/${id}`);
    }
    getRecent(){
        return window.axios.get(`network/models`);
    }
}

export default new ModelsApi();