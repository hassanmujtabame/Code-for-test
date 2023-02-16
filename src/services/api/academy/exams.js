import BaseApi from "../base-service";
class ExamsApi extends BaseApi{
    //Get all Exams
    deleteQuestion(id){
        return window.axios.get(`academy/instructor/exams/questions/${id}`);
    }
    addExam(course_id,data){
        return window.axios.post(`academy/instructor/courses/${course_id}/exams`,data);
    }
    updateExam(id,data){
        //data.append('_method','PUT')
        return window.axios.post(`academy/instructor/courses/exams/${id}`,data);
    }
}

export default new ExamsApi();