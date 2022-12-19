
class LearningMeetingApi {
    //Get all Meetings
    getAll(){
        return window.axios.get(`network/meetings`);
    }
    getItem(id){
        return window.axios.get(`network/meetings/${id}`);
    }
}

export default new LearningMeetingApi();