import BaseApi from "../base-service";

class PaymentContsult extends BaseApi {
  //Get all Consultants
//   getBookings(params = {}) {
//     let s = this.generateQueryUrl(params);
//     return window.axios.get(`consulting/user/booking-consultants?${s}`);
//   }
//   rateConsultation(booking_id, data) {
//     return window.axios.post(`consulting/user/${booking_id}/rates`, data);
//   }
payNow(data){
     return window.axios.post(`consulting/pay/myfatoorah`, data);
}
}
export default new PaymentContsult();