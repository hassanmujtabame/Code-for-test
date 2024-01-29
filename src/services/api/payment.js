
import BaseApi from "./base-service";
class paymentApi extends BaseApi{
    PayPackageMyFatoorah(data) {
		return window.axios.post(`/pay/myfatoorah`, data);
	}
    PayPackageHyperBill(data) {
		return window.axios.post(`/pay/hyperbill`, data);
	}
    PayPackageTammara(data) {
		return window.axios.post(`/pay/tammara`, data);
	}
}

export default new paymentApi();