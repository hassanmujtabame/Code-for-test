
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

    checkoutNetwork(package_id,data={}){
        return window.axios.get(`user-checkout?package_id=${package_id}`,data);
    }
    sendMessageToProvider(data){
        /**
         * user_id: الى هوه صاحب الخدمه الجاهزه

            from_user_id:token

            message:

            title
         */
        return window.axios.post(`service-provider/user/send-message-to-provider`,data);

    }
    

}

export default new UserApi();