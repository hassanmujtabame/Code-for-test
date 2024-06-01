import BaseApi from "./base-service";
// https://api.riadiat.sa/api/v1/affiliates/more-profitable
class MarketApi extends BaseApi {
  getAll() {
    return window.axios.get(`affiliates/more-profitable`);
  }

  getItem(id) {
    return window.axios.get(`affiliates/more-profitable/${id}`);
  }

  recoredVisit(id) {
    return window.axios.post("affiliates/visitor", {
      affiliate_id: id,
    });
  }
}

export default new MarketApi();
