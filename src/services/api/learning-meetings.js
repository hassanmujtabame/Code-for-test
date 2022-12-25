
import BaseApi from "./base-service";
class LearningMeetingApi extends BaseApi{
    //Get all Meetings
    getAll(params){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`network/meetings?${s}`);
    }
    getItem(id){
        return window.axios.get(`network/meetings/${id}`);
    }
}

export default new LearningMeetingApi();