<template>
  <div class="bg-white container" :class="[isMobile ? 'p-3' : 'p-5']">
    <div class="row align-items-center">
      <div class="col-12 col-md-6">
        <h1 class="header-title-page text-black" style="display: inline">
          التسويق بالعمولة
        </h1>
        <p class="header-desc-page text-black mt-3">
          كونى شريكة رياديات التسويقية من خلال برنامج التسويق بالعمولة وأكسبى
          مقابل كل عملية تسجيل
        </p>
        <div class="my-4 d-flex justify-content-start">
          <template>
            <div class="row d-flex align-items-center flex-wrap gap-2">
              <li>
                <div
                  style="background-color: #1fb9b3"
                  v-if="profileData.status == 'deactive'"
                  class="btn text-light"
                >
                  جارى تفعيل حسابك
                </div>

                <button
                  v-if="!profileData.status"
                  class="text-white btn-omar rounded-3 px-5 py-3 border-0"
                  @click="affiliateRegister"
                >
                  أشترك الان
                </button>

                <router-link
                  v-if="profileData.status == 'active'"
                  style="background-color: #1fb9b3"
                  class="text-white rounded-3 px-5 py-3 border-0 btn"
                  :to="getRouteLocale('affiliate-marketing-dashboard')"
                  >حسابى
                </router-link>

                <button
                  v-if="token"
                  style="color: #1fb9b3"
                  class="btn btn-lg bg-light bg mx-1 px-4 py-2"
                >
                  <play-icon class="mx-1" />
                  عرض توجيهى
                </button>
              </li>

              <div class="d-flex align-items-center gap-2">
                <button
                  v-if="!token"
                  class="nav-item px-2 btn-main text-center"
                  @click="showModal"
                >
                  سجلى دخولك
                  <login-dialog
                    :profileData="profileData"
                    ref="modal"
                  ></login-dialog>
                </button>
                <button
                  v-if="!token"
                  class="px-2 btn shadow"
                  style="
                    background-color: #ff5722 !important;
                    border: none !important;
                    color: #fff;
                    width: 152px;
                    height: 48px;
                  "
                  @click="router_push('register')"
                >
                  انضمي الان
                </button>
              </div>
            </div>
          </template>
        </div>
      </div>
      <div class="col-12 col-md-6" style="min-height: 414px" v-if="!isMobile">
        <div style="height: 100%">
          <img
            src="@/assets/img/affiliate/affliate-home-header.png"
            class="header-img"
            alt="hero img"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginDialog from "../login-dialog/index.vue";
import playIcon from "@/components/icon-svg/play.vue";

import $ from "jquery";

export default {
  name: "section-header",
  components: {
    LoginDialog,
    playIcon,
  },
  data() {
    return {
      dialog: false,
      profileData: "",
    };
  },
  methods: {
    showLoginDialog() {
      this.dialog = true;
    },
    updateDialog(value) {
      this.dialog = value;
    },
    showModal() {
      let element = this.$refs.modal.$el;
      $(element).modal("show");
    },

    affiliateRegister() {
      if (!this.token) {
        console.log("not registerd");
        window.errorMsg("  يجب عليك تسجيل الدخول فى حسابك العام على رياديات  ");
        this.hasError = true;
      } else {
        this.$router.push({ name: "register-affiliate" });
      }
    },
    async checkAffiliate() {
      try {
        let { data } = await this.$axios.get("affiliates/profile-info");
        if (data.success) {
          console.log("affiliate_data", data.data);
          this.profileData = data.data;
          console.log(data.data);
        } else {
          this.message = data.message;
          this.hasError = true;
        }
      } catch (error) {
        this.profileData = "";
        window.errorMsg(error.message);
        this.hasError = true;
      }
    },
  },
  mounted() {
    if (this.token && this.user.affiliate) {
      this.checkAffiliate();
    }
  },
};
</script>
<style scoped>
.header-img {
  width: 100%;
  height: auto;
}
.star-cons {
  position: absolute;
  left: 38.15%;
  right: 92.19%;
  top: 9.72%;
  bottom: 71.67%;
}

.star-cons.stars {
  left: 30.56%;
  right: 60.06%;
  top: 14.17%;
  bottom: 80.28%;
}
.btn-omar {
  background-color: #f2631c;
  font-size: 16px;
}
.bg-custom {
  background: linear-gradient(to bottom, #1fb9b3, #fcf0f2);
}
.empty {
  width: 73%;
  position: absolute;
  bottom: -10px;
  right: 0;
  height: 5px;
  background-color: white;
}
</style>
