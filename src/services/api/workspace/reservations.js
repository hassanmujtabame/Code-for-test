
import BaseApi from "../base-service";

class workSpacesReservationsApi extends BaseApi {
    //Get all Requests
    getWorkSpaceReservations(params = {}) {
        let queryParams = this.generateQueryUrl(params)
        return window.axios.get(`workspace/user-bookings?${queryParams}`);
    }
    reservationReschedule(id, payload) {
        return window.axios.post(`workspace/user-bookings/${id}`, payload);
    }
    reservationCanceled(id) {
        return window.axios.post(`workspace/${id}/cancel`);
    }
    rateReservation(workspaceId, payload) {
        return window.axios.post(`workspace/${workspaceId}/user-rates`, payload);
    }
}

export default new workSpacesReservationsApi()