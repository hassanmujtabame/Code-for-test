
class OffersApi {
    //Get all Offers
    getAll(params={}){
        let s="";
        Object.keys(params).forEach((key)=>{
            if(s!="") s+=`&`
            if( Array.isArray(params[key]))
            params[key].forEach((element,i) => {
                if(i!==0) s+=`&`
                s+=`${key}[]=${element}`
            });
            else
             s+=`${key}=${params[key]}`
        })
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