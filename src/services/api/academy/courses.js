
import BaseApi from "../base-service";
class CoursesApi extends BaseApi {
	//Get all Courses
	getAll(params = {}) {
		let s = this.generateQueryUrl(params);
		return window.axios.get(`academy/courses?${s}`);
	}
	rateItem(id, data) {
		//data.append('_method','PUT')
		return window.axios.post(`academy/instructor/courses/${id}/rate`, data);
	}
	getRecentCourses(params = {}) {
		let s = this.generateQueryUrl(params);
		return window.axios.get(`academy/courses?${s}`);
	}
	getItem(id) {
		return window.axios.get(`academy/instructor/courses/${id}`);
	}
	addItem(data) {
		return window.axios.post(`academy/instructor/courses`, data);
	}
	updateItem(id, data) {
		data.append("_method", "PUT");
		return window.axios.post(`academy/instructor/courses/${id}`, data);
	}
	deleteItem(id) {
		return window.axios.delete(`academy/instructor/courses/${id}`);
	}
	getCoursesHasExams(params = {}) {
		let s = this.generateQueryUrl(params);
		return window.axios.get(`academy/instructor/course-exams?${s}`);
	}
	getStudentsPassExam(params = {}) {
		let s = this.generateQueryUrl(params);
		return window.axios.get(`academy/instructor/students-pass-exam?${s}`);
	}
	getStudentsNotPassExam(params = {}) {
		let s = this.generateQueryUrl(params);
		return window.axios.get(`academy/instructor/students-notpass-exam?${s}`);
	}
	getCoursesHasProjects(params = {}) {
		let s = this.generateQueryUrl(params);
		return window.axios.get(`academy/instructor/course-projects?${s}`);
	}
	getProjectsNeedRevision(params = {}) {
		let s = this.generateQueryUrl(params);
		return window.axios.get(`academy/instructor/course-projects-review?${s}`);
	}
	joinCourse(id) {
		return window.axios.post(`academy/user/courses/${id}/join`);
	}
	cancelJoinCourse(id) {
		return window.axios.post(`academy/user/courses/${id}/cancel-join`);
	}
	addAttachment(course_id, data, config = {}) {
		return window.axios.post(
			`academy/instructor/courses/${course_id}/attachments`,
			data,
			config
		);
	}
	deleteAttachment(id) {
		return window.axios.delete(`academy/instructor/courses/attachments/${id}`);
	}
	getSimilars(id) {
		return window.axios.get(`academy/instructor/similar-courses/${id}`);
	}
	getCourseUsers() {
		return window.axios.get(`academy/instructor/course-users`);
	}
}

export default new CoursesApi();