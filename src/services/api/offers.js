
import BaseApi from "./base-service";
class OffersApi extends BaseApi{
    //Get all Offers
    getAll(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`network/offers?${s}`);
    }
    getMyOffers(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`network/my-adds?${s}`);
    }
    getItem(id){
        return window.axios.get(`network/offers/${id}`);
    }
    deleteItem(id){
        return window.axios.delete(`network/offers/${id}`);
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
    editOffer(data,id){
        return window.axios.post(`network/offers/${id}`, data);  
    }
}

export default new OffersApi();