
import BaseApi from "./base-service";
class PodcastsApi extends BaseApi {
    //Get all Podcasts
    getAll(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`network/poudcasts?${s}`);
    }
    getItem(id){
        return window.axios.get(`network/poudcasts/${id}`);
    }
    getRecent(){
        return window.axios.get(`network/latest-poudcasts`);
    }

}

export default new PodcastsApi();