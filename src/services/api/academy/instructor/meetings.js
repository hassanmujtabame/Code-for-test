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
    addItem(data){
        return window.axios.post(`academy/instructor/meetings`,data);  
    }
    updateIem(id,data){
        data.append('_method','PUT')
        return window.axios.put(`academy/instructor/meetings/${id}`,data);  
    }
    deleteItem(id){
        return window.axios.delete(`academy/instructor/meetings/${id}`);
    }
    getCategories(){
        return window.axios.get(`network/categories`);
    }
    sendGroupMessage(data){
        //https://test.riadiat.sa/api/v1/academy/instructor/meetings/send-group-message
        return window.axios.post(`academy/instructor/meetings/send-group-message`,data);
    
    }
}

export default new InstructorMeetingsApi();