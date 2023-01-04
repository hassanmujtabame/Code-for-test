
import BaseApi from "./base-service";
class CommonApi extends BaseApi {

    ContactUsSend(data){
        return window.axios.post(`contact-us`,{data});
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
    getOpinions(params={department_name:'riadiat'}){
        /* ماذا يقولون عن رياديات */
        let s=this.generateQueryUrl(params)
        return window.axios.get(`user/what-do-subscribers-say?${s}`);  
    }
   
}

export default new CommonApi();