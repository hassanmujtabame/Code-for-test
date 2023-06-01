
import BaseApi from "../base-service";

class workSpacesReservationsApi extends BaseApi {
    //Get all Requests
    getWorkSpaceReservations(params = {}) {
        let queryParams = this.generateQueryUrl(params)
        return window.axios.get(`workspace/user-bookings?${queryParams}`);
    }
    reservationReschedule() {
        return window.axios.put(`workspace/user-bookings`);
    }
}

export default new workSpacesReservationsApi()