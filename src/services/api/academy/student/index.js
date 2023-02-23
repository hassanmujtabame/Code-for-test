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
}

export default new StudentsApi;