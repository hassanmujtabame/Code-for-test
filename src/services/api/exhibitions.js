
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
        return window.axios.get(`network/categories`);
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
    shareExhibition(data){
        return window.axios.post(`network/exhibition-shares`,data);  
    }
    updateExhibition(id,data){
        data.append('_method','PUT')
        return window.axios.post(`network/exhibitions/${id}`,data);  
    }
    deleteExhibition(id){
        return window.axios.delete(`network/exhibitions/${id}`);  
    }
}

export default new ExhibitionsApi();