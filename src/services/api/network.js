
import BaseApi from "./base-service";
import ads from "./ads";
import offers from "./offers";
import projects from "./projects";
import partners from "./partners";
import models from "./models";
class NetworkApi extends BaseApi {
	ads = ads;
	offers = offers;
	projects = projects;
	models = models;
	partners = partners;

	// getSubscribes(params = {}) {
	// 	let s = this.generateQueryUrl(params);
	// 	return window.axios.get(`network/user-subscriptions?${s}`);
	// }
	getSubscribes(params = {}) {
		let s = this.generateQueryUrl(params);
		return window.axios.get(`user/network/system-packages-subscriptions?${s}`);
	}
	getHomeSchedules(params = {}) {
		let s = this.generateQueryUrl(params);
		return window.axios.get(`network/network-schedule?${s}`);
	}
	// getPackages(params = {}) {
	// 	let s = this.generateQueryUrl(params);
	// 	return window.axios.get(`network/packages?${s}`);
	// }
	getPackages(params = {}) {
		let s = this.generateQueryUrl(params);
		return window.axios.get(`user/network/system-packages?${s}`);
	}
	optionsSub(data) {
		return window.axios.post(`user/${data}/update-packages-subscriptions-data`);
	}
	rechargeBalance(data) {
		return window.axios.post(`network/recharge-balance`, data);
	}
	getMyTransaction(params = {}) {
		let s = this.generateQueryUrl(params);
		return window.axios.get(`network/recharge-balance?${s}`);
	}
	async getBalance() {
		try {
			let res = await window.axios.post(`user/me`);
			if (res.data.success) {
				let { total_balance, outstanding_balance, available_balance } =
					res.data.data;
				return {
					data: {
						success: true,
						data: { total_balance, outstanding_balance, available_balance },
					},
				};
			} else {
				return res;
			}
		} catch (error) {
			console.mylog("error", error);
			return { success: false, message: "error general" };
		}
	}
	checkoutPackageFree(data) {
		return window.axios.post(`network/user-checkout-package-free`, data);
	}
	checkoutPackageSelect(data) {
		return window.axios.post(`checkout`, data);
	}
	PayPackageSelect(data) {
		// window.axios.defaults.baseURL = "https://cp.riadiat.sa/";
		// return window.axios.post(`pay`, data);
		// return window.axios.post(`payments/hyperbill/callback`, data);
		return window.axios.post(`/pay/myfatoorah`, data);
		
	}
	getNumbers(params = {}) {
		let s = this.generateQueryUrl(params);
		return window.axios.get(`network/numbers?${s}`);
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
		return window.axios.post(`network/user-checkout`, data);
	}
	getCategories() {
		return window.axios.get(`network/categories`);
	}
}

export default new NetworkApi();