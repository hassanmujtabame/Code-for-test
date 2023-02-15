
import BaseApi from "../base-service";
class LecturesApi extends BaseApi{
    //Get all Courses
    getAll(course_id,params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`academy/instructor/courses/${course_id}/lessons?${s}`);
    }
    getItem(course_id,id){
        return window.axios.get(`academy/instructor/courses/${course_id}/lessons/${id}`);
    }
    addItem(course_id,data){
        return window.axios.post(`academy/instructor/courses/${course_id}/lessons`,data);
    }
    updateItem(lession_id,data){
        return window.axios.post(`academy/instructor/courses/lessons/${lession_id}`,data);
    }
    deleteItem(lession_id){
        return window.axios.delete(`academy/instructor/courses/lessons/${lession_id}`);
    }
    addVideo(lesson_id,data,config={}){
        return window.axios.post(`academy/instructor/courses/lessons/${lesson_id}/video`,data,config);
    }
    addAttachment(lesson_id,data,config={}){
        return window.axios.post(`academy/instructor/courses/lessons/${lesson_id}/attachments`,data,config);
    }
    deleteAttachment(id){
        return window.axios.delete(`academy/instructor/courses/lessons/attachments/${id}`);
    }
  
}

export default new LecturesApi();