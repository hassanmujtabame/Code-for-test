
import BaseApi from "./base-service";
class StoriesApi extends BaseApi{
    //Get all Stories
    getAll(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`network/stories?${s}`);
    }
    getHomeNetwork(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`network/home-stories?${s}`);
    }
    getItem(id){
        return window.axios.get(`network/stories/${id}`);
    }
    getMyStory(){
        return window.axios.get(`network/current-story`);
    }
}

export default new StoriesApi();