
import BaseApi from "../base-service";

class workSpacesReservationsApi extends BaseApi {
    //Get all Requests
    getWorkSpacesReservations(params = {}) {
        let queryParams = this.generateQueryUrl(params)
        return window.axios.get(`workspace-booking?${queryParams}`);
    }
}

export default new workSpacesReservationsApi()