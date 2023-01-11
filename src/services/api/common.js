
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
   getCoursesHome(params = {}){
     /*نقدم دورتنا بكل شغف*/
     let s=this.generateQueryUrl(params)
     return window.axios.get(`user/courses-home?${s}`);  
   }
   rate(data){
    /** تقييم تجربة */
    /*
     data:{
        rate : 1
        category_name: 'network' or 'service-provider'
        comment:'تجربة رائعة'
     }
    */
    return window.axios.post(`user/rate-category`,data);  
   }
}

export default new CommonApi();