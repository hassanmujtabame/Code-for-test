
import BaseApi from "../../base-service";
class InstructorsApi extends BaseApi{
    //Get all instructors
    getAll(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`academy/instructors?${s}`);
    }
    getItem(id){
        return window.axios.get(`academy/instructors/${id}`);
    }
}

export default new InstructorsApi();