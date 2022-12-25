
import BaseApi from "./base-service";
class OffersApi extends BaseApi{
    //Get all Offers
    getAll(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`network/offers?${s}`);
    }
    getItem(id){
        return window.axios.get(`network/offers/${id}`);
    }
    getCategories(){
        return window.axios.get(`network/offers-categories`);
    }
    getRecent(){
        return window.axios.get(`network/latest-offers`);
    }

    addOffer(data){
        return window.axios.post(`network/offers`,data);  
    }
}

export default new OffersApi();