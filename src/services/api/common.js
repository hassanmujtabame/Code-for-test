
import BaseApi from "./base-service";
class CommonApi extends BaseApi {

    ContactUsSend(data){
        return window.axios.post(`contact-us`,{data});
    }
    getOpinions(params={department_name:'riadiat'}){
        /* ماذا يقولون عن رياديات */
        let s=this.generateQueryUrl(params)
        return window.axios.get(`user/what-do-subscribers-say?${s}`);  
    }
   
}

export default new CommonApi();