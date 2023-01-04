
import BaseApi from "./base-service";
class CommonApi extends BaseApi {

    ContactUsSend(data){
        return window.axios.post(`contact-us`,{data});
    }
    getPartnerHome(){
        /* for list partners in home page*/
        return window.axios.get(`user/partner-home`);
        
    }
   
}

export default new CommonApi();