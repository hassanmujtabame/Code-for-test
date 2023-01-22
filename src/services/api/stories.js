
import BaseApi from "./base-service";
class StoriesApi extends BaseApi{
    //Get all Stories
    getAll(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`network/stories?${s}`);
    }
    addItem(data){
        return window.axios.post(`network/stories`,data);  
    }
    updateItem(id,data){
        data.append('_method','PUT')
        return window.axios.post(`network/stories/${id}`,data);  
    }
    getHomeNetwork(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`network/home-stories?${s}`);
    }
    getBestStories(params={},paginate=4){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`network/distinguished-stories?paginate=${paginate}${s?'&'+s:''}`);
    }
    getItem(id){
        return window.axios.get(`network/stories/${id}`);
    }
    getMyStory(){
        return window.axios.get(`network/current-story`);
    }
}

export default new StoriesApi();