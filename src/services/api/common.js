
import BaseApi from "./base-service";
class CommonApi extends BaseApi {

    ContactUsSend(data){
        return window.axios.post(`contact-us`,{data});
    }
   
}

export default new CommonApi();