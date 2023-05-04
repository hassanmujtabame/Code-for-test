
import BaseApi from "../base-service";

class WorkspaceApi extends BaseApi{
   
    getRecents(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`workspace/recents?${s}`);
    }
    
}

export default new WorkspaceApi();