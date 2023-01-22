
import BaseApi from "./base-service";
class IncubatorApi extends BaseApi{
 
    getPackages(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`service-provider/packages?${s}`);
    }
    
}

export default new IncubatorApi();