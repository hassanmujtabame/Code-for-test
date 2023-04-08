
import BaseApi from "./base-service";
class ModelsApi extends BaseApi{
    //Get all Models
    getAll(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`network/models?${s}`);
    }
    getMine(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`network/my-downloads-models?${s}`);
    }
    download(model_id){
        return window.axios.get(`network/download-model/${model_id}`);
    }
    getHomeNetwork(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`network/home-models?${s}`);
    }
    getCategories(){
        return window.axios.get(`network/categories`);
    }
    getItem(id){
        return window.axios.get(`network/models/${id}`);
    }
    getRecent(){
        return window.axios.get(`network/latest-models`);
    }
}

export default new ModelsApi();