import BaseApi from "../../base-service";

class StudentsApi extends BaseApi{

    getMyExams(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`academy/user/courses/exams?${s}`);
    }
    getMyCourses(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`academy/user-courses?${s}`);
    }
    getMyProjects(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`academy/user/courses/projects?${s}`);
    }
}

export default new StudentsApi;