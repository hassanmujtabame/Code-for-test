
import BaseApi from "./base-service";
class ExhibitionsApi extends BaseApi{
    //Get all Exhibitions
    getAll(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`network/exhibitions?${s}`);
    }
    getHomeNetwork(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`network/home-exhibitions?${s}`);
    }
    getItem(id){
        return window.axios.get(`network/exhibitions/${id}`);
    }
    getCategories(){
        return window.axios.get(`network/exhibitions-categories`);
    }
    getRecent(){
        return window.axios.get(`network/latest-exhibitions`);
    }
    getTags(){
        return window.axios.get(`network/exhibitions-tags`);
    }
    addExhibition(data){
        return window.axios.post(`network/exhibitions`,data);  
    }
    updateExhibition(id,data){
        return window.axios.pull(`network/exhibitions/${id}`,data);  
    }
}

export default new ExhibitionsApi();