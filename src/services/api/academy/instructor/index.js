
import BaseApi from "../../base-service";
import meetingsAPI from "./meetings";
class InstructorsApi extends BaseApi{
    meetingsAPI = meetingsAPI;
    //Get all instructors
    getAll(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`academy/instructors?${s}`);
    }
    getBest(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`academy/instructors?${s}`);
    }
    getItem(id){
        return window.axios.get(`academy/instructors/${id}`);
    }
    getCourses(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`academy/instructor/courses?${s}`);
    }
    register(data){
        return window.axios.post(`academy/instructors`,data);
    }
    getListStudentProject(project_id){
        return window.axios.get(`academy/instructor/courses/request-projects/${project_id}`);
    }
    rateProject(project_id,data){
        data.append('project_id',project_id)
        return window.axios.post(`academy/instructor/course-projects/rates`,data);
    }
}

export default new InstructorsApi();