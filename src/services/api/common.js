import BaseApi from "./base-service";
import _i18n from "@/plugins/i18n";
class CommonApi extends BaseApi {
  getFAQ(params = {}) {
    let s = this.generateQueryUrl(params);
    return window.axios.get(`faqs?${s}`);
  }
  getListCountries() {
    return window.axios.get("https://restcountries.com/v3/lang/arabic");
  }
  ContactUsSend(data) {
    return window.axios.post(`contact-us`, data);
  }
  getWidgetValue(data) {
    return window.axios.post(`widget-dash`, data);
  }
  getOpinions(params = { department_name: "riadiat" }) {
    /* ماذا يقولون عن رياديات */
    let s = this.generateQueryUrl(params);
    return window.axios.get(`user/what-do-subscribers-say?${s}`);
  }
  getAds(url, params = {}) {
    /* advertisements*/
    let s = this.generateQueryUrl(params);
    return window.axios.get(`${url}?${s}`);
  }
  getCoursesHome(params = {}) {
    /*نقدم دورتنا بكل شغف*/
    let s = this.generateQueryUrl(params);
    return window.axios.get(`user/courses-home?${s}`);
  }
  rate(data) {
    /** تقييم تجربة */
    /*
     data:{
        rate : 1
        category_name: 'network' or 'service-provider'
        comment:'تجربة رائعة'
     }
    */
    return window.axios.post(`user/rate-category`, data);
  }
  cities(params = {}) {
    let s = this.generateQueryUrl(params);
    return window.axios.get(`cities?${s}`);
  }
  getCountries(params = {}) {
    let s = this.generateQueryUrl(params);
    return window.axios.get(`countries?${s}`);
  }
  getTypeCertificates() {
    return [
      { id: "presence", name: "حضور" },
      { id: "projects", name: "مشاريع" },
      { id: "after_pass_exams", name: "بعد إجتياز اختبارات" },
    ];
  }
  getTypeConsultations() {
    return [
      { id: "call", name: "مكالمة" },
      { id: "video", name: "مقابلة بالفيديو" },
    ];
  }
  getDaysOfWeek() {
    return [
      { id: "sunday", name: _i18n.t("sunday") },
      { id: "monday", name: _i18n.t("monday") },
      { id: "tuesday", name: _i18n.t("tuesday") },
      { id: "wednesday", name: _i18n.t("wednesday") },
      { id: "thursday", name: _i18n.t("thursday") },
      { id: "friday", name: _i18n.t("friday") },
      { id: "saturday", name: _i18n.t("saturday") },
    ];
  }
  getCourseTypes() {
    return [
      { id: "on-site", name: _i18n.t("on-sites") },
      { id: "live", name: _i18n.t("live") },
      { id: "recorded", name: _i18n.t("recorded") },
    ];
  }

  getMeetingTypes() {
    return [
      { id: "board", name: _i18n.t("board") },
      { id: "business_to_business", name: _i18n.t("B2B") },
      { id: "web_discussion", name: _i18n.t("Webinar") },
    ];
  }
}

export default new CommonApi();
