
import BaseApi from "../base-service";
class CoursesApi extends BaseApi{
    //Get all Courses
    getAll(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`academy/courses?${s}`);
    }
    getItem(id){
        return window.axios.get(`academy/courses/${id}`);
    }
    addItem(data){
        return window.axios.post(`academy/instructor/courses`,data);
    }
    getCoursesHasExams(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`academy/instructor/course-exams?${s}`);
    }
    getCoursesHasProjects(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`academy/instructor/course-projects?${s}`);
    }
     getProjectsNeedRevision(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`academy/instructor/course-projects-review?${s}`);
    }
}

export default new CoursesApi();