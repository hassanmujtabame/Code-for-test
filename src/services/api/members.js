
import BaseApi from "./base-service";
class MembersApi extends BaseApi{
    //Get all Members
    getAll(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`network/members?${s}`);
    }
    getHomeNetwork(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`network/home-members?${s}`);
    }
    getGraduates(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`incubator/graduates?${s}`);
    }
    getHomeIncubator(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`incubator/members?${s}`);
    }
    getInfluenceursNetwork(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`network/home-members?${s}`);
    }
    getItem(id){
        return window.axios.get(`network/members/${id}`);
    }
    getIncubator(id){
        return window.axios.get(`incubator/member/${id}`);
    }

}

export default new MembersApi();