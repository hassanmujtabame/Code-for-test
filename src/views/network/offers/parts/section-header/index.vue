<template>
  <div class="bg-white" :class="[isMobile ? 'p-3' : 'p-5']">
    <div class="container mx-auto">
      <div class="row">
        <div class="col-12 col-md-6 my-auto">
          <h1 class="header-title-page" style="display: inline">
            {{ $t("offers") }}
            <Riadiat />
          </h1>
          <p class="header-desc-page mt-3">
            احصلي على عروض و خصومات هائلة ومذهلة سواء من اكواد الخصم للمواقع
            الالكترونية او من خلال بطاقة عضوية رياديات
          </p>
          <div
            class="my-5 d-flex flex-wrap justify-content-stae align-items-center gap-2"
          >
            <router-link
              :to="getRouteLocale('network-card-membership')"
              class="px-4 py-3 mx-1 btn rounded-3 know-more-btn"
              style="
                background-color: #ff5722 !important;
                border: none !important;
                color: white;
              "
            >
              تعرف على بطاقه رياديات
            </router-link>
          </div>
        </div>
        <div class="col-12 col-md-6" style="min-height: 414px" v-if="!isMobile">
          <div style="height: 100%">
            <img class="img-fluid" src="@/assets/img/memberCard.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import plusRectRoundIcon from "@/components/icon-svg/plus-rect-round.vue";
import Riadiat from "@/components/widgets/riadiat.vue";
export default {
  name: "section-header",
  components: {
    plusRectRoundIcon,
    Riadiat,
  },
  methods: {
    addOffer() {
      if (this.userPartner) {
        this.router_push("network-offers-dashboard");
      } else {
        let dataEvt = {
          title: "للأسف لايمكنك  اضافة عروض او خصومات",
          description: `انت غير مشترك في الباقة السنوية وهذه الباقة لا تمنحك  إضافة معرض  - يجب تسجيل حسابك  كشركه و استفيد من إضافة معرضك و  عروضك و خصوماتك و المزيد من المميزات في الشبكة`,
          image: `${this.publicPath}assets/img/EmptyState.png`,
          btns: [
            {
              title: "سجل كشركه",
              action: () => this.router_push("register-networking"),
            },
          ],
        };
        this.showConfirmMsg(dataEvt);
        return;
      }
    },
  },
};
</script>

<style scoped>
.header-title-page {
  font-family: Cairo;
  font-size: 64px;
  font-weight: 700;
  line-height: 90.24px;
  color: #414042;
}
.header-desc-page {
  font-family: Cairo;
  font-size: 24px;
  font-weight: 400;
  line-height: 38.4px;
  color: #414042;
}
.know-more-btn {
  font-family: Cairo;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
}
</style>
