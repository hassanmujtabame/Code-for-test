import BaseApi from "../base-service";
import requests from "./requests";
import reservations from "./reservations";

class WorkspaceApi extends BaseApi {
    requests = requests;
    reservations = reservations;
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
    getWorkSpaceCategories() {
        return window.axios.get(`/workspace-categories`);
    }
}

export default new WorkspaceApi();