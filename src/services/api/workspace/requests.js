
import BaseApi from "../base-service";

class workSpacesRequestsApi extends BaseApi {
    //Get all Requests
    getWorkSpacesRequests(params = {}) {
        let queryParams = this.generateQueryUrl(params)
        return window.axios.get(`workspace-requests?${queryParams}`);
    }
    approveWorkSpacesRequest(id) {
        return window.axios.post(`workspace-requests/${id}/approve`);
    }
    disApproveWorkSpacesRequest(id) {
        return window.axios.post(`workspace-requests/${id}/disapprove`);
    }
    cancelWorkSpacesRequest(id) {
        return window.axios.post(`workspace-requests/${id}/cancel`);
    }

}

export default new workSpacesRequestsApi()