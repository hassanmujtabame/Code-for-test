import BaseApi from "../base-service";
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
    getCategories(){
        return window.axios.get(`network/categories`);
    }
    sendGroupMessage(data){
        return window.axios.post(`academy/instructor/meetings/send-group-message`,data);
    
    }
    postJoinMeeting(id){
        return window.axios.post(`network/meeting-join/`,{meeting_id:id});
    }
    postCancelJoinMeeting(id){
        return window.axios.post(`network/user-cancel-meeting/`,{meeting_id:id});
    }
}

export default new InstructorMeetingsApi();