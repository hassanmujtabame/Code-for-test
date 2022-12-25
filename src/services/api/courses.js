
import BaseApi from "./base-service";
class CoursesApi extends BaseApi{
    //Get all Courses
    getAll(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`academy/courses?${s}`);
    }
    getItem(id){
        return window.axios.get(`academy/courses/${id}`);
    }
}

export default new CoursesApi();