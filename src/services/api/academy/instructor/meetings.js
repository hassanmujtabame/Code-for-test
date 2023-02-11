import BaseApi from "../../base-service";
class InstructorMeetingsApi extends BaseApi{
    //Get all instructor's meetings
    getAll(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`academy/instructor/meetings?${s}`);
    }
    getItem(id){
        return window.axios.get(`academy/instructor/meetings/${id}`);
    }
    deleteItem(id){
        return window.axios.delete(`academy/instructor/meetings/${id}`);
    }
}

export default new InstructorMeetingsApi();