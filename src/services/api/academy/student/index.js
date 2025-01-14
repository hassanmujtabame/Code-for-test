import BaseApi from "../../base-service";

class StudentsApi extends BaseApi{

    getMyExams(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`academy/user/courses/exams?${s}`);
    }
    getMyExam(id){
        return window.axios.get(`academy/user/courses/exams/${id}`);
    }
    getMyCertificates(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`academy/user/courses/certificates?${s}`);
    }
    getMyQuestionExam(exam_id,level){
        return window.axios.get(`academy/user/courses/exams/${exam_id}/question/${level}`);
    }
    setMyResponseQuestionExam(exam_id,level,data){
        return window.axios.post(`academy/user/courses/exams/${exam_id}/question/${level}`,data);
    }
    uploadProjectFile(data,config={}){
        return window.axios.post(`academy/user/courses/projects`,data,config);
    }
    deleteProjectFile(project_id){
        return window.axios.delete(`academy/user/courses/projects/${project_id}`);
    }
    getMyCourses(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`academy/user/courses?${s}`);
    }
    getMyMeetings(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`academy/user/meetings?${s}`);
    }
    getMyProjects(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`academy/user/courses/projects?${s}`);
    }
}

export default new StudentsApi;