
import BaseApi from "../../base-service";
class InstructorBlogsApi extends BaseApi {
	//Get all Blogs
	getAll(params = {}) {
		let s = this.generateQueryUrl(params);
		return window.axios.get(`academy/instructor/blogs?${s}`);
	}

	getItem(id) {
		return window.axios.get(`network/blogs/${id}`);
	}
	addItem(data) {
		return window.axios.post(`network/blogs`, data);
	}
	updateIem(id, data) {
		data.append("_method", "PUT");
		return window.axios.put(`network/blogs/${id}`, data);
	}
	updateBlog(id, data) {
		// data.append("_method", "PUT");
		return window.axios.put(`academy/instructor/blogs/${id}`, data);
	}
	deleteItem(id) {
		return window.axios.delete(`network/blogs/${id}`);
	}
	getCategories() {
		return window.axios.get(`network/blogs-categories`);
	}
}

export default new InstructorBlogsApi();