
import BaseApi from "./base-service";
class UserApi extends BaseApi {

    me(){
        return window.axios.post(`user/me`);
    }
    profile(id){
        return window.axios.post(`user/profile/${id}`);
    }
    getUserById(id){
        return window.axios.get(`service-provider/user/provider/${id}`);
    }
    statisticsNetwork(){
        return window.axios.get(`user/statistics-network`);
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
    displayInformation(id){
        /** get display information for an user */
        /** id: user */
        return window.axios.get(`user/display-information/${id}`);
    }
    getStoryUser(id){
        /** get succes story for an user */
        return window.axios.get(`network/stoy/${id}`);
    }
    getProjectsUser(id){
        return window.axios.get(`network/projects?user_id=${id}`);
    }
    getExhibitionstUser(id){
        return window.axios.get(`network/exhibitions?user_id=${id}`);
    }
    getBlogstUser(id){
        return window.axios.get(`network/blogs?user_id=${id}`);
    }
    getCoursesUser(id){
        return window.axios.post(`user/user-meetings`,{user_id:id});
    }
    addCreditCardInfo(data){
        /**
         * card_holder | card_number | expiryYear | card_cvv | expiryMonth | paymentBrand
         */
        //data.append('_method','PUT')
        return window.axios.post(`user/payment-cards`,data);
    }
    updateCreditCardInfo(id,data){
        /**
         * card_holder | card_number | expiryYear | card_cvv | expiryMonth | paymentBrand
         */
        data.append('_method','PUT')
        return window.axios.post(`user/payment-cards/${id}`,data);
    }
    deleteCreditCardInfo(id){
        return window.axios.delete(`user/payment-cards/${id}`);
    }
    getCreditCards(){
        return window.axios.get(`user/payment-cards`);
    }
    getMyReadyService(params={}){
        let s=this.generateQueryUrl(params)
        /**
         * paginate = x for change default count per page = 10
         */
        return window.axios.get(`service-provider/provider/my-ready-services?${s}`);
    }
    getMyWorkGallaries(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`user/my-work-gallaries?${s}`);
    }
    addMyWorkGallary(data){
        return window.axios.post(`user/my-work-gallaries`,data);
    }
    deleteMyWorkGallary(id){
        return window.axios.delete(`user/my-work-gallaries/${id}`);
    }
    sendAbuseCommentOnRate(data){
        return window.axios.post(`service-provider/provider/report-comments`,data);
    }
    sendAbuseReadyService(data){
        return window.axios.post(`service-provider/user/report-service`,data);
        
    }
   getMyOffers(params={}){
        let s=this.generateQueryUrl(params)
        return window.axios.get(`service-provider/provider/service-offers?${s}`);
    }
    getMyJobsOpen(params={}){
        /** الوظائف التى اعلنت عليها */
        let s=this.generateQueryUrl(params)
        return window.axios.get(`service-provider/provider/provider-jobs?${s}`);
    }
    getMyJobsApplied(params={}){
        /** الوظائف التى تقدمت اليها */
        let s=this.generateQueryUrl(params)
        return window.axios.get(`service-provider/provider/jobs-applied?${s}`);
    }
    sendMessageChat(data){
        /**
         * body{to_user_id,message}
         */
        return window.axios.post(`user/send-message`,data);
    }
    loadMessageChat(data){
        return window.axios.post(`user/load-messages`,data);
    }
    loadMessageRequestService(data){
        return window.axios.post(`user/load-messages-request-service`,data);
    }
    loadMessageOfferProposal(data){
        return window.axios.post(`user/load-messages-offer-proposal`,data);
    }
   
}

export default new UserApi();