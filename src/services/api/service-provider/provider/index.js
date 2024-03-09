import BaseApi from "../../base-service";
import readyService from "./ready-service";
import myRequests from "./my-requests";
import requestPurchases from "./request-purchases";

class servicesProviderApi extends BaseApi {
  readyService = readyService;
  myRequests = myRequests;
  requestPurchases = requestPurchases;
  getAll(params = {}) {
    let s = this.generateQueryUrl(params);
    return window.axios.get(`service-provider/user/services-providers?${s}`);
  }
}
export default new servicesProviderApi();
