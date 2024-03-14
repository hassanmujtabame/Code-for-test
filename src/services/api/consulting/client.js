import BaseApi from "../base-service";

class ClientsApi extends BaseApi{
  //Get all Consultants
    getBookings(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`consulting/user/booking-consultants?${s}`);
    }
    rateConsultation(booking_id,data){
        return window.axios.post(`consulting/user/${booking_id}/rates`,data);
    }
    
}
export default new ClientsApi()