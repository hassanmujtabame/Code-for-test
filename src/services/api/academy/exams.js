import BaseApi from "../base-service";
class LecturesApi extends BaseApi{
    //Get all Exams
    deleteQuestion(id){
        return window.axios.get(`academy/instructor/exams/questions/${id}`);
    }
}

export default new LecturesApi();