
import BaseApi from "./base-service";
class GraduateJobsApi extends BaseApi{
    //Get all Exhibitions
    getAll(params={}){
        /**
         * category_id :array
            year_experience_from:number

            year_experience_to:number
         */
        let s=this.generateQueryUrl(params)
        return window.axios.get(`service-provider/provider/riadiat-graduates-jobs?${s}`);
    }
    getCategories(){
        return window.axios.get(`service-provider/provider/project-categories`);
    }
  
   
}

export default new GraduateJobsApi();