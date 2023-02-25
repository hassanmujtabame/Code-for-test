import BaseApi from "../base-service";
class ProjectsApi extends BaseApi{
    //Get all Projects
    getAll(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`academy/courses?${s}`);
    }
    getItem(id){
        return window.axios.get(`academy/courses/projects/${id}`);
    }
    addProject(data){
        return window.axios.post(`academy/instructor/course-projects`,data);
    }
    updateProject(id,data){
        //data.append('_method','PUT')
        return window.axios.post(`academy/instructor/course-projects/${id}`,data);
    }
    addAttachment(project_id,data,config={}){
        return window.axios.post(`academy/instructor/course-projects/${project_id}/attachments`,data,config);
    }
    deleteAttachment(id){
        return window.axios.delete(`academy/instructor/course-projects/attachments/${id}`);
    }
}

export default new ProjectsApi();