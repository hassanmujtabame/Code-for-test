
import BaseApi from "./base-service";
class StoriesApi extends BaseApi{
    //Get all Stories
    getAll(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`network/stories?${s}`);
    }
    getItem(id){
        return window.axios.get(`network/stories/${id}`);
    }
}

export default new StoriesApi();