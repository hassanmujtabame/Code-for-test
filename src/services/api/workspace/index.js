import BaseApi from "../base-service";

class WorkspaceApi extends BaseApi {

    getAll(params = {}) {
        let s = this.generateQueryUrl(params)
        return window.axios.get(`workspaces?${s}`);
    }
    getRecentWorkSpaces(params = {
        created_at: 'desc',
        paginate: 6
    }) {
        let s = this.generateQueryUrl(params)
        return window.axios.get(`workspaces?${s}`);
    }

}

export default new WorkspaceApi();