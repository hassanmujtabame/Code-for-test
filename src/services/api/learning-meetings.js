
import BaseApi from "./base-service";
class LearningMeetingApi extends BaseApi{
    //Get all Meetings
    getAll(params){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`network/meetings?${s}`);
    }
    getHomeNetwork(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`network/home-meetings?${s}`);
    }
    getCategories(){
        return window.axios.get(`network/categories`);
    }
    getOtherMeetings(id){
        return window.axios.get(`network/other-meetings/${id}`);
    }
    postJoinMeeting(id){
        return window.axios.post(`network/meeting-join/`,{meeting_id:id});
    }
    postCancelJoinMeeting(id){
        return window.axios.post(`network/user-cancel-meeting/`,{meeting_id:id});
    }
    getItem(id){
        return window.axios.get(`network/meetings/${id}`);
    }
}

export default new LearningMeetingApi();