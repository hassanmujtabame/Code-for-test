
class PartnersApi {
    //Get all Partners
    getAll(params={}){
        let s="";
        Object.keys(params).forEach((key)=>{
            if(s!="") s+=`&`
             s+=`${key}=${params[key]}`
        })
        return window.axios.get(`network/partners?${s}`);
    }
    getItem(id){
        return window.axios.get(`network/partners/${id}`);
    }
}

export default new PartnersApi();