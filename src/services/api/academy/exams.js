import BaseApi from "../base-service";
class ExamsApi extends BaseApi{
    //Get all Exams
    getItem(id){
        return window.axios.get(`academy/instructor/course-exams/${id}`);
    }
    deleteQuestion(id){
        return window.axios.delete(`academy/instructor/exams/questions/${id}`);
    }
    addQuestion(exam_id,data){
        return window.axios.post(`academy/instructor/courses/exams/${exam_id}/questions`,data);
    }
    addExam(course_id,data){
        return window.axios.post(`academy/instructor/courses/${course_id}/exams`,data);
    }
    deleteExam(id){
        return window.axios.delete(`https://test.riadiat.sa/api/v1/academy/instructor/courses/exam/${id}`);
    }
    updateExam(id,data){
        data.append('_method','PUT')
        return window.axios.post(`academy/instructor/course-exams/${id}`,data);
    }
}

export default new ExamsApi();