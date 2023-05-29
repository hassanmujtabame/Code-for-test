
import BaseApi from "../base-service";

class workSpacesRequestsApi extends BaseApi {
    //Get all Requests
    getWorkSpacesRequests(params = {}) {
        let queryParams = this.generateQueryUrl(params)
        return window.axios.get(`workspace-requests?${queryParams}`);
    }
}

export default new workSpacesRequestsApi()