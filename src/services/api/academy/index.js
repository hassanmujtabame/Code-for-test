
import BaseApi from "../base-service";
import coursesApi from "./courses";
import lecturesAPI from "./lectures.js";
import projectsApi from "./project";
import examsAPI from "./exams";
import meetings from "./meetings.js";
import instructor from "./instructor";
import student from "./student";
import blogs from "../blogs";
class academyApi extends BaseApi {
	coursesApi = coursesApi;
	lecturesAPI = lecturesAPI;
	examsAPI = examsAPI;
	projectsAPI = projectsApi;
	meetingsAPI = meetings;
	instructor = instructor;
	blogs = blogs;
	student = student;
	getPackages(params = {}) {
		let s = this.generateQueryUrl(params);
		// return window.axios.get(`academy/packages?${s}`);
		return window.axios.get(`user/academy/system-packages?${s}`);

	}
	getSubscribes(params = {}) {
		let s = this.generateQueryUrl(params);
		return window.axios.get(`user/academy/system-packages-subscriptions?${s}`);

		// return window.axios.get(`academy/user-subscriptions?${s}`);
	}
	getDepartments(params = {}) {
		let s = this.generateQueryUrl(params);
		return window.axios.get(`academy/departments?${s}`);
	}
	getDepartment(id) {
		return window.axios.get(`academy/departments/${id}`);
	}
	getPlaces(params = {}) {
		let s = this.generateQueryUrl(params);
		return window.axios.get(`academy/places?${s}`);
	}
	getBalance(params = {}) {
		let s = this.generateQueryUrl(params);
		return window.axios.get(`academy/view-balance?${s}`);
	}
	getMyAppointments(params = {}) {
		let s = this.generateQueryUrl(params);
		return window.axios.get(`academy/instructor/courses/my-appointments?${s}`);
	}

	getHomeSchedules(params = {}) {
		let s = this.generateQueryUrl(params);
		return window.axios.get(`academy/schedule?${s}`);
	}
	checkoutPackageFree(data) {
		return window.axios.post(`academy/user-checkout-package-free`, data);
	}
	checkoutCourse(data) {
		return window.axios.post(`academy/user/courses/purchase-requests`, data);
	}
	checkoutPackage(data) {
		/*
          type if 0
            paymentBrand
            card_holder
            expiryMonth
            expiryYear
            cvv
            card_number
            package_id

            type if 1
            payment_id
            package_id
        */
		return window.axios.post(`academy/user-checkout`, data);
	}
	PayPackageSelect(data) {
		return window.axios.post(`/pay/myfatoorah`, data);
	}
}

export default new academyApi();