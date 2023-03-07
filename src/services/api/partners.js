
import BaseApi from "./base-service";
class PartnersApi extends BaseApi{
    //Get all Partners
    getAll(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`network/partners?${s}`);
    }
    getItem(id){
        return window.axios.get(`network/partners/${id}`);
    }

    addItem(data){
        return window.axios.post(`network/partners`,data);  
    }
    updateItem(data){
        //data.append('_method','PUT')
        return window.axios.post(`network/modiy-company-data`,data);  
    }
    getCategories(){
        return window.axios.get(`network/categories`);
    }
    
    getPartnersHome(){
        /* for list partners in home page*/
        return window.axios.get(`user/partner-home`);  
    }
    getPartnersByCat(cat=null){
        /* for list partners by category id*/
        let url = 'user/partner-home';
        if(cat)
        url = `user/partner-home?category_id=${cat}`
        return window.axios.get(url);  
    }
}

export default new PartnersApi();