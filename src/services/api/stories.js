
class StoriesApi {
    //Get all Stories
    getAll(params={}){
        let s="";
        Object.keys(params).forEach((key)=>{
            if(s!="") s+=`&`
             s+=`${key}=${params[key]}`
        })
        return window.axios.get(`network/stories?${s}`);
    }
    getItem(id){
        return window.axios.get(`network/stories/${id}`);
    }
}

export default new StoriesApi();