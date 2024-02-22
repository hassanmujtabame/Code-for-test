<template>
  <div class="bg-white" :class="[isMobile ? 'p-3' : 'p-5']">
    <div class="netwok-home-header container mx-auto">
      <div class="row">
        <div class="col-12 col-md-6">
          <h1 class="header-title-page text-black" style="display: inline">
            العروض
          </h1>
          <p class="header-desc-page text-black mt-3">
            احصلي على عروض و خصومات هائلة ومذهلة سواء من اكواد الخصم للمواقع
            الالكترونية او من خلال بطاقة عضوية رياديات
          </p>
          <div class="mt-4">
            <router-link
              :to="getRouteLocale('network-card-membership')"
              class="px-4 text-light py-2 mx-1 btn shadow"
              style="
                background-color: #ff5722 !important;
                border: none !important;
                color: white;
              "
            >
              <!-- <plusRectRoundIcon class="mx-1" /> -->
              تعرف على بطاقه رياديات
            </router-link>
            <button
              @click="addOffer"
              class="px-5 py-2 text-light mx-1 btn shadow"
              style="
                background-color: #1fb9b3 !important;
                border: none !important;
                color: white;
              "
            >
              <!-- <plusRectRoundIcon class="mx-1" /> -->
              اضافة اعلان
            </button>
          </div>
        </div>
        <div class="col-12 col-md-6" style="min-height: 414px" v-if="!isMobile">
          <div style="height: 100%">
            <!-- <iframe class="rounded" style="width: 100%; height: 100%" src="https://www.youtube.com/embed/mKfqJ_3-jWQ"
                          title="جلسة حوارية عربيات" frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen></iframe> -->
            <img class="img-fluid" src="@/assets/img/Component 7.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import plusRectRoundIcon from "@/components/icon-svg/plus-rect-round.vue";

export default {
  name: "section-header",
  components: {
    plusRectRoundIcon,
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

<style></style>
