
import BaseApi from "../base-service";
import coursesApi from "./courses";
import lecturesAPI from "./lectures";
import projectsApi from "./project";
import examsAPI from "./exams";
import meetings from "./instructor/meetings";
class academyApi extends BaseApi{
    coursesApi = coursesApi;
    lecturesAPI = lecturesAPI;
    examsAPI = examsAPI;
    projectsAPI = projectsApi;
    meetingsAPI = meetings;
    getPackages(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`academy/packages?${s}`);
    }
    getDepartments(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`academy/departments?${s}`);
    }
    getPlaces(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`academy/places?${s}`);
    }
    getBalance(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`academy/view-balance?${s}`);
    }
    checkoutPackage(data){
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
        return window.axios.post(`academy/user-checkout`,data);
    }
}

export default new academyApi();