import Vue from "vue";
import Cookies from "js-cookie";
import { mapGetters } from "vuex";
import { localize } from "vee-validate";
import userAPI from "../services/api/user";
import Axios from "axios";

const mixin = {
  install(Vue) {
    Vue.mixin({
      data: () => ({
        publicPath: process.env.BASE_URL,
        currentUrl: window.location.href,
      }),
      methods: {
        timeToParts(duration) {
          var h = Math.floor(duration / (60 * 60));
          var m = Math.floor(duration / 60);
          var s = Math.floor(duration % 60);
          return { h, m, s };
        },
        timeHuman(h, m, s) {
          let str = "";
          if (h) {
            str += `${h} ${this.$t("hour_s")}`;
            if (m) str += `${this.$t("and")}`;
          }
          if (m) {
            str += `${m} ${this.$t("minute_s")}`;
            if (s) str += `${this.$t("and")}`;
          }
          if (s) str += `${s} ${this.$t("second_s")}`;
          return str;
        },
        timeFormat(h, m, s) {
          let formattedTime = "";
          if (h) formattedTime += h.toString().padStart(2, "0") + ":";
          //if(m)
          formattedTime += m.toString().padStart(2, "0") + ":";
          formattedTime += s.toString().padStart(2, "0");
          return formattedTime;
        },
        loadObjectToForm(obj) {
          let formData = new FormData();
          Object.keys(obj).forEach((key) => {
            if (obj[key] !== null && obj[key] !== undefined) {
              if (Array.isArray(obj[key])) {
                let array = obj[key];
                for (let i = 0; i < array.length; i++) {
                  formData.append(`${key}[]`, array[i]);
                }
              } else formData.append(key, obj[key]);
            }
          });
          return formData;
        },
        showAbuseDialog(data) {
          this.fireOpenDialog("abuse-dialog-standard", data);
        },
        showShareSocialMedia(data = {}) {
          this.fireOpenDialog("share-dialog-standard", data);
        },
        showSendMsgProvider(userInfo) {
          let dataEvent = {
            formData: { user_id: userInfo.id },
            opts: { user: userInfo },
          };
          this.fireOpenDialog("send-message-to-provider", dataEvent);
        },
        numberToDay(mth) {
          if (!mth && mth !== 0) return "N/A";
          let label = this.$t("day_s");
          if (mth > 2 && mth <= 10 && this.$i18n.locale == "ar") label = "أيام";
          if (mth == 2 && this.$i18n.locale == "ar") return " " + "يومين";
          if (mth == 1 && this.$i18n.locale == "ar") return label;
          if (mth == 1 && this.$i18n.locale == "en") return "a day" + " ";
          return `${mth} ${label}`;
        },
        timeAgoToHuman(date) {
          // Calculate the difference in milliseconds
          let date1 = new Date(date);
          let date2 = new Date();
          var millisec = date2.getTime() - date1.getTime();

          var s = (millisec / 1000).toFixed(1);

          var m = (millisec / (1000 * 60)).toFixed(1);

          var h = (millisec / (1000 * 60 * 60)).toFixed(1);

          var d = (millisec / (1000 * 60 * 60 * 24)).toFixed(1);
          var mth = (millisec / (1000 * 60 * 60 * 24 * 30)).toFixed(1);
          var y = (millisec / (1000 * 60 * 60 * 24 * 30 * 12)).toFixed(1);
          let ago = this.$t("time_ago");
          let result = "";
          let label = "";
          if (s < 60) {
            label = this.$t("second_s");
            if (mth > 2 && mth <= 10 && this.$i18n.locale == "ar")
              label = "ثوني";
            if (mth == 2 && this.$i18n.locale == "ar")
              return ago + " " + "ثانتين";
            if (mth == 1 && this.$i18n.locale == "ar") return ago + " " + label;
            if (mth == 1 && this.$i18n.locale == "en")
              return "a second" + " " + ago;
            result = Math.floor(s) + " " + label;
          } else if (m < 60) {
            label = this.$t("minute_s");
            if (mth > 2 && mth <= 10 && this.$i18n.locale == "ar")
              label = "دقائق";
            if (mth == 2 && this.$i18n.locale == "ar")
              return ago + " " + "دقيقتين";
            if (mth == 1 && this.$i18n.locale == "ar") return ago + " " + label;
            if (mth == 1 && this.$i18n.locale == "en")
              return "a second" + " " + ago;
            result = Math.floor(m) + " " + label;
          } else if (h < 24) {
            label = this.$t("hour_s");
            if (mth > 2 && mth <= 10 && this.$i18n.locale == "ar")
              label = "ساعات";
            if (mth == 2 && this.$i18n.locale == "ar")
              return ago + " " + "ساعتين";
            if (mth == 1 && this.$i18n.locale == "ar") return ago + " " + label;
            if (mth == 1 && this.$i18n.locale == "en")
              return "an Hour" + " " + ago;
            result = Math.floor(h) + " " + label;
          } else if (d < 30) {
            label = this.$t("day_s");
            if (mth > 2 && mth <= 10 && this.$i18n.locale == "ar")
              label = "أيام";
            if (mth == 2 && this.$i18n.locale == "ar")
              return ago + " " + "يومين";
            if (mth == 1 && this.$i18n.locale == "ar") return ago + " " + label;
            if (mth == 1 && this.$i18n.locale == "en")
              return "a day" + " " + ago;
            result = Math.floor(d) + " " + label;
          } else if (mth < 12) {
            label = this.$t("month_s");
            if (mth > 2 && mth <= 10 && this.$i18n.locale == "ar")
              label = "أشهر";
            if (mth == 2 && this.$i18n.locale == "ar")
              return ago + " " + "شهرين";
            if (mth == 1 && this.$i18n.locale == "ar") return ago + " " + "شهر";
            if (mth == 1 && this.$i18n.locale == "en")
              return "a month" + " " + ago;
            result = Math.floor(mth) + " " + label;
          } else {
            label = this.$t("year_s");
            if (mth > 2 && mth <= 10 && this.$i18n.locale == "ar")
              label = "سنوات";
            if (mth == 2 && this.$i18n.locale == "ar")
              return ago + " " + "سنتين";
            if (mth == 1 && this.$i18n.locale == "ar") return ago + " " + label;
            if (mth == 1 && this.$i18n.locale == "en")
              return "a year" + " " + ago;
            result = Math.floor(y) + " " + label;
          }

          if (this.$i18n.locale == "ar") return ago + " " + result;
          else return result + " " + ago;
        },
        router_push(link, params = {}, query = {}) {
          this.$router.push(this.getRouteLocale(link, params, query));
        },
        getTitleSubscribe(type) {
          switch (type) {
            case "free":
              return this.$t("free_subscibe");
            case "month":
              return this.$t("monthly_subscribe");
            case "year":
              return this.$t("annually_subscribe");
            default:
              return "N/A";
          }
        },
        async loadCurrentUser() {
          try {
            let { data } = await userAPI.me();
            if (data.success) {
              let { token, ...user } = data.data;
              if (token != this.token)
                window.store.commit("chat/SET_MESSAGES", []);

              window.store.commit("auth/SET_TOKEN", token);
              window.store.commit("auth/SET_USER", user);

              window.store.commit(
                "auth/SET_IS_PROVIDER",
                window.store.getters["auth/isProvider"]
              );
              //let isProvider = window.store.getters['auth/isProvider']
              /* if(this.$route.meta.role=='provider' && !isProvider){
                               let title ='يجب ان تكون من مقدمي الخدمة';
                               let message ='الان انت تتصفح كعميل، يمكنك تغيير الوضع في الاعلى و النقر علي "تحويل الى مقدم خدمة"'
                               window.SwalWarning(message,title)
                               //if(from.name==null)
                               window.router.push({name:'service-provider-home',params:{lang:window.i18n.locale}})
                               //return false;
                             }*/
            } else {
              window.SwalError(data.message);
            }
          } catch (error) {
            if (error.response) {
              let response = error.response;
              if (response.status == 401) {
                this.logout();
              }
            }
          }
        },
        scollToElement(id, evt) {
          if (evt) evt.preventDefault();

          let targetElm = document.getElementById(id);
          if (targetElm)
            targetElm.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest",
            });
        },
        showSuccessMsgProvider(dataEvent) {
          this.fireOpenDialog("standard-success-message", dataEvent);
        },
        showSuccessMsg(dataEvent) {
          this.fireOpenDialog("standard-success-message", dataEvent);
        },
        showRateMsg(dataEvent) {
          this.fireOpenDialog("standard-rate-dialog", dataEvent);
        },
        showConfirmMsg(dataEvent) {
          this.fireOpenDialog("standard-confirm-message", dataEvent);
        },
        setErrorsForm(form, response) {
          form.setErrors(response.data.errors);
        },
        formatBytes(bytes, decimals = 2) {
          if (!+bytes) return `0 ${this.$t("Bytes")}`;

          const k = 1024;
          const dm = decimals < 0 ? 0 : decimals;
          const sizes = [
            this.$t("Bytes"),
            this.$t("KB"),
            this.$t("MB"),
            this.$t("GB"),
            this.$t("TB"),
          ];

          const i = Math.floor(Math.log(bytes) / Math.log(k));

          return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${
            sizes[i]
          }`;
        },
        dateReverse(date) {
          if (!date) return "";
          let parts = date.split("-");
          let d = parts[0].padStart(2, "0");
          let m = parts[1].padStart(2, "0");
          return `${parts[2]}-${m}-${d}`;
        },
        dateTextMonth(dateT) {
          if (!dateT) return "N/A";

          let parts = dateT.trim().split("-");

          let date = new Date(parts[0], parts[1], parts[2]);
          let d = date.getDate();
          let y = date.getFullYear();
          let m = this.getTranslateMonth(date.getMonth());
          return `${d} ${m} ${y}`;
        },
        timeFormatAMPM(time, abrev = false) {
          if (!time) return "";
          let _time = time.split(":");
          let date = new Date();
          date.setHours(_time[0]);
          date.setMinutes(_time[1]);
          let hours = date.getHours();
          let minutes = date.getMinutes();

          let ampm = hours >= 12 ? this.$t("pm") : this.$t("am");
          if (abrev && this.$i18n.locale == "ar")
            ampm = hours >= 12 ? "م" : "ص";
          hours %= 12;
          hours = hours || 12;
          minutes = minutes < 10 ? `0${minutes}` : minutes;

          const strTime = `${hours}:${minutes} ${ampm}`;

          return strTime;
        },
        getTranslateMonth(month) {
          /* month :0-11 */
          let months = [
            this.$t("January"),
            this.$t("February"),
            this.$t("March"),
            this.$t("April"),
            this.$t("May"),
            this.$t("June"),
            this.$t("July"),
            this.$t("August"),
            this.$t("September"),
            this.$t("October"),
            this.$t("November"),
            this.$t("December"),
          ];
          return months[month];
        },
        logout(evt) {
          if (evt) evt.preventDefault();

          window.store.commit("auth/CLEAR_TOKEN");
          window.store.commit("auth/CLEAR_USER");
          window.store.commit("chat/SET_MESSAGES", []);
          localStorage.removeItem('providerOrclient')
          this.$router.push({name: 'index'})

          if (this.$router.mode == "history") this.refreshPage();
          //this.$router.push({ name: 'login', params: { lang: this.$i18n.locale } })
          if (this.$router.mode == "hash") window.location.reload();
        },
        dateToString(date) {
          if (!date) return null;
          return date.toISOString().split("T")[0];
        },
        timeToString(date) {
          if (!date || date == "Invalid Date") return null;
          let m = date.getMinutes() + "";
          let h = date.getHours() + "";
          m = m.padStart(2, "0");
          h = h.padStart(2, "0");
          //.toString().padStart(2, '0')
          return `${h}:${m}`;
        },
        generateQueryUrl(params) {
          let s = "";
          Object.keys(params).forEach((key) => {
            if (s != "") s += `&`;
            if (Array.isArray(params[key]))
              params[key].forEach((element, i) => {
                if (i !== 0) s += `&`;
                s += `${key}[]=${element}`;
              });
            else s += `${key}=${params[key]}`;
          });
          return s;
        },
        generateRandomString(n) {
          return Math.random()
            .toString()
            .substring(2, n + 2);
        },
        fireEvent(group, data = {}) {
          window.EventBus.fire(group, data);
        },
        fireOpenDialog(group, data = {}) {
          this.fireEvent(group + "-open-dialog", data);
        },
        fireCloseDialog(group, data = {}) {
          this.fireEvent(group + "-close-dialog", data);
        },
        getRouteLocale(name, params = {}, query = {}) {
          return {
            name,
            params: { lang: this.$i18n.locale, ...params },
            query: { ...query },
          };
        },
        generatetoUrl(name, params = {}) {
          let r = this.$router.resolve({
            name: name, // put your route information in
            params: { lang: this.$i18n.locale, ...params }, // put your route information in
            query: this.$route.query, // put your route information in
          });
          return r.route.path;
        },
        routeToUrl(name, params = {}, query = {}) {
          let r = this.$router.resolve(
            this.getRouteLocale(name, params, query)
          );
          return r ? r.href : "#";
        },
        refreshPage(data = {}) {
          //if(process.env.NODE_ENV=='development')
          //return;
          let r = this.$router.resolve({
            name: data.name ?? this.$route.name, // put your route information in
            params: data.params ?? this.$route.params, // put your route information in
            query: data.query ?? this.$route.query, // put your route information in
          });
          if (this.$router.mode == "hash") {
            window.location.assign(r.href);
            window.location.reload();
          } else {
            window.location = r.href;
          }
        },
        changeLang(lng, evt) {
          if (evt) evt.preventDefault();

          Cookies.set("i18n_lang", lng);
          this.$i18n.locale = lng;
          localize(lng);
          let params = { ...this.$route.params, lang: lng };

          let r = this.$router.resolve({
            name: this.$route.name, // put your route information in
            params: params, // put your route information in
            query: this.$route.query, // put your route information in
          });
          //this.$router.go(r.route)
          if (this.$router.mode == "hash") {
            window.location.assign(r.href);
            window.location.reload();
          } else window.location = r.href;
        },
        showMessageForSubscribeNetwork() {
          let dataEvt = {
            hideImage: true,
            title: "",
            description: `<p class="p-sub-network">حتى تتمكن من الانضمام الى باقي خدمتنا
                      (<a class="link-sub-network" href="${this.routeToUrl(
                        "academy-home"
                      )}">الاكاديمية</a> أو <a class="link-sub-network" href="${this.routeToUrl(
              "incubator-home"
            )}">الحاضنة</a> أو <a class="link-sub-network" href="${this.routeToUrl(
              "service-provider-home"
            )}">مقدمي الخدمة</a>)
                      يجب ان تكون عضو في شبكة رياديات  أولا</p>
                      <p class="p-sub-network">زر الصفحة التعريفية <a class="link-sub-network" href="${this.routeToUrl(
                        "network-home"
                      )}">لشبكة رياديات</a></p>
                      `,
            btns: [
              {
                title: this.$t("subscribe-network"),
                action: () => this.router_push("network-subscribe"),
              },
              { title: this.$t("undo"), class: "btn btn-danger" },
            ],
          };
          this.showConfirmMsg(dataEvt);
        },
        async switchRoleAcademy(newRole) {
          await this.loadCurrentUser()
          if (newRole == "instructor" && !this.userIsInstructor) {
            let dateEvt = {
              title: "انت غير مسجل كمدرب",
              description: 'لتسجيل كمدرب انقر على الزر "تسجيل الأن"',
              type: "warning",
              btns: [
                {
                  title: "تسجيل الأن",
                  action: () => this.router_push("academy-instructor-register"),
                },
                {
                  title: "إلغاء",
                  action: () => {},
                  class: "btn btn-custmer btn-danger",
                },
              ],
            };
            this.showConfirmMsg(dateEvt);
            return;
          }

          this.$store.commit("auth/SET_ACADEMY_ROLE", newRole);
          //this.refreshPage()
        },
        addDays(date, days) {
          var result = new Date(date);
          result.setDate(result.getDate() + days);
          return result;
        },
        downloadFileFormBlon(blob) {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.style.display = "none";
          a.href = url;
          // the filename you want
          a.download = "todo-1.json";
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
          a.remove();
        },
        downloadFileFormUrl(url, target = null, download = false) {
          const a = document.createElement("a");
          a.style.display = "none";
          a.href = url;
          if (target) a.target = target;
          // the filename you want
          window.$(a).attr("download", download);
          document.body.appendChild(a);
          a.click();
          a.remove();
        },
        switchRoleProvider(val) {
          //   if (val && !this.userIsSubProvider) {
          // if (
          //   this.shouldSubNetworkMsg(
          //     "يجب عليك الاشتراك في الشبكة حتى يمكنك الاشتراك في مقدمي الخدمات"
          //   )
          // )
          //   return;
          // let dateEvt = {
          //   title: "لا يمكنك تغير كمقدم خدمة لانك غير مشترك بها ",
          //   btns: [
          //     {
          //       title: "إشترك الأن",
          //       action: () => this.router_push("service-provider-subscribe"),
          //     },
          //   ],
          // };
          // this.showConfirmMsg(dateEvt);
          // console.mylog("if true");
          //   } else {
          console.mylog("switching role provider to", val);
          this.$store.commit("auth/SET_IS_PROVIDER", val);
          //this.refreshPage()
          //   }
        },

        strip_tags(str) {
          return str.replace(/(<([^>]+)>)/gi, "");
        },
        shouldBeProviderMsg(evt) {
          if (evt) evt.preventDefault();
          if (!this.userIsProvider) {
            let dataEvt = {
              title: "يجب ان تكون من مقدمي الخدمة",
              description:
                'الان انت تتصفح كعميل، يمكنك تغيير الوضع في الاعلى و النقر علي "تحويل الى مقدم خدمة"',
              type: "warning",
              btns: [{ title: this.$t("Ok") }],
            };
            this.showConfirmMsg(dataEvt);
            return true;
          }
          return false;
        },
        shouldSubNetworkMsg(title, evt) {
          if (evt) evt.preventDefault();
          if (!this.userIsSubNetwork) {
            let dataEvt = {
              title,
              type: "warning",
              btns: [
                {
                  title: this.$t("subscribe-network"),
                  action: () => this.router_push("network-subscribe"),
                },
              ],
            };
            this.showConfirmMsg(dataEvt);
            return true;
          }
        },
        shouldLoginMsg(evt) {
          if (evt) evt.preventDefault();
          if (!this.token) {
            let dataEvt = {
              title: "يجب عليك تسجيل الدخول",
              type: "warning",
              btns: [
                {
                  title: this.$t("login"),
                  action: () => this.router_push("login"),
                },
              ],
            };
            this.showConfirmMsg(dataEvt);
            return true;
          }
          return false;
        },
        getPreviousDay(days, date = new Date()) {
          const previous = new Date(date.getTime());
          previous.setDate(date.getDate() - days);

          return previous;
        },
        isDeptIncubatorSubscribe(dept, inc) {
          let incubators = inc ?? this.userSubIncubators;
          return incubators.some(
            (i) => i.subscribe && i.department_id == dept.id
          );
        },
        addScriptJs(text, id) {
          let script = document.createElement("script");
          if (id) script.setAttribute("id", id);
          let scr = document.createTextNode(text);
          script.appendChild(scr);
          document.body.appendChild(script);
        },
        loadJSWithId(src, id, async = true, defer = false) {
          const plugin = document.createElement("script");
          plugin.setAttribute("src", src);
          plugin.setAttribute("id", id);
          if (defer) plugin.setAttribute("defer", true);
          plugin.async = async;
          document.body.appendChild(plugin);
        },
        loadJS(src, async = true, defer = false) {
          const plugin = document.createElement("script");
          plugin.setAttribute("src", src);
          if (defer) plugin.setAttribute("defer", true);
          plugin.async = async;
          document.body.appendChild(plugin);
        },
        loadCSS(src) {
          const plugin = document.createElement("link");
          plugin.setAttribute("href", src);
          plugin.setAttribute("rel", "stylesheet");
          document.head.prepend(plugin);
        },
        async uploadFileStandard(evt, validate, handlerFile, emptyFile) {
          if (validate) {
            let valid = await validate(evt);
            if (!valid) {
              emptyFile();
              return;
            }
          }
          if (!evt.target.files && !evt.target.files[0]) {
            emptyFile();
            return;
          }
          handlerFile(evt.target.files[0]);
        },
      },
      computed: {
        socialMedias() {
          let list = process.env.VUE_APP_SOCIAL_MEDIA.split(",");
          return list.map((l) => {
            return {
              name: l,
              url: process.env[`VUE_APP_${l.toUpperCase()}`],
            };
          });
        },
        isDevelopment() {
          return process.env.NODE_ENV == "development";
        },
        
        ...mapGetters({
          isMobile: "core/isMobile",
          isTablet: "core/isTablet",
          user: "auth/user",
          userPartner: "auth/partner",
          userIsProvider: "auth/isProvider",
          userIsInstructor: "auth/isInstructor",
          canUploadCourse: "auth/canUploadCourse",
          userIsConsultant: "auth/isConsultant",
          userAcademyRole: "auth/academyRole",
          userSubNetwork: "auth/subscribeNetwork",
          userSubProvider: "auth/subscribeProvider",
          userSubAcademy: "auth/subscribeAcademy",
          userSubIncubator: "auth/subscribeIncubator",
          userSubIncubators: "auth/subscribeIncubators",
          userIsSubNetwork: "auth/isSubscribeNetwork",
          userIsSubProvider: "auth/isSubscribeProvider",
          userIsSubAcademy: "auth/isSubscribeAcademy",
          userIsSubIncubator: "auth/isSubscribeIncubator",
          onlineUsers: "chat/onlineUsers",
          token: "auth/token",
          authenticated: "auth/authenticated",
        }),
      },
    });
  },
};

Vue.use(mixin);
