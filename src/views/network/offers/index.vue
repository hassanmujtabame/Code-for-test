<template>
  <div style="margin-top: 85px" class="consult max-width-100-hidden">
    <!--section-header-->
    <SectionHeader />
    <!--#section-header-->
    <OffersCategory />
    <OffersCard />
    <!--section top coupons-->
    <SectionTopCoupons />
    <!--#section top coupons-->
    <!--section membership-->
    <!-- <SectionMembership /> -->
    <!--#section membership-->
    <!--section coupons-->
    <div class="mt-5">
      <SectionCoupons />
    </div>
    <!--#section coupons-->

    <addOfferDialog />
  </div>
</template>

<script>
import SectionHeader from "./parts/section-header/index.vue";
import SectionTopCoupons from "./parts/section-top-coupons/index.vue";
import SectionMembership from "./parts/section-membership/index.vue";
import SectionCoupons from "./parts/section-coupons/index.vue";
import addOfferDialog from "./parts/dialogs/add-offer.vue";
import OffersCategory from "@/components/offer-categories.vue";
import OffersCard from "@/components/offers-card.vue";
export default {
  name: "offers-page",
  components: {
    SectionHeader,
    OffersCard,
    OffersCategory,
    SectionTopCoupons,
    SectionMembership,
    SectionCoupons,
    addOfferDialog,
  },
};
</script>

<style></style>
