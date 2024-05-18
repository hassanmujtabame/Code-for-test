import BaseApi from "../base-service";
class MembersAPI_V2 extends BaseApi {
  getAll(params = {}) {
    let s = this.generateQueryUrl(params);
    return window.axios_v2.get(`network/members/search?${s}`);
  }
}

export default new MembersAPI_V2();
