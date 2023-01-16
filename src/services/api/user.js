
import BaseApi from "./base-service";
class UserApi extends BaseApi {

    me(){
        return window.axios.post(`user/me`);
    }
    statisticsNetwork(){
        return window.axios.get(`user/statistics-network`);
    }
    displayInformation(){
        return window.axios.get(`user/display-information`);
    }
    postDisplayInformation(data){
        return window.axios.post(`user/display-information`,data);
    }
    personalInformation(){
        return window.axios.get(`user/personal-information`);
    }
    postPersonalInformation(data){
        return window.axios.post(`user/personal-information`,data);
    }
    studyInformation(){
        return window.axios.get(`user/study-information`);
    }
    postStudyInformation(data){
        return window.axios.post(`user/study-information`,data);
    }
    careerInformation(){
        return window.axios.get(`user/career-information`);
    }
    postCareerInformation(data){
        return window.axios.post(`user/career-information`,data);
    }
    residenceInformation(){
        return window.axios.get(`user/residence-information`);
    }
    postResidenceInformation(data){
        return window.axios.post(`user/residence-information`,data);
    }
    contactInfo(){
        return window.axios.get(`user/contact-info`);
    }
    postContactInfo(data){
        return window.axios.post(`user/contact-info`,data);
    }
    postNotifSettings(data){
        return window.axios.post(`user/notification-settings`,data);
    }
    getIndustries(data){
        /** مجال الشركة التي يعمل بها */
        return window.axios.get(`user/fileds`,data);
    }
    getCountries(){
        return window.axios.get(`user/countries`);
    }

}

export default new UserApi();