
import BaseApi from "./base-service";
import _i18n from "@/plugins/i18n";
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
   cities(params = {}){
    let s=this.generateQueryUrl(params)
     return window.axios.get(`user/cities?${s}`);   
   }
   getCountries(params = {}){
    let s=this.generateQueryUrl(params)
    return window.axios.get(`user/countries?${s}`);
}
getTypeCertificates(){
  return [
    {id:'presence',name:"حضور"},
    {id:'projects',name:'مشاريع'},
    {id:'after_pass_exams',name:'بعد إجتياز اختبارات'},
]
}
  getDaysOfWeek(){
    return [
      {id:'sunday',name:_i18n.t('sunday')},
      {id:'monday',name:_i18n.t('monday')},
      {id:'tuesday',name:_i18n.t('tuesday')},
      {id:'wednesday',name:_i18n.t('wednesday')},
      {id:'thursday',name:_i18n.t('thursday')},
      {id:'friday',name:_i18n.t('friday')},
      {id:'saturday',name:_i18n.t('saturday')},
    ]
  }
}

export default new CommonApi();