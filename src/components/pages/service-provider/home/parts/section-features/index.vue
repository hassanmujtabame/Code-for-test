<template>
  <b-container class="mt-5">
    <h2 class="home-section-title text-center">المزايا المُقدّمة من رياديات إلى مقدمي الخدمات</h2>
    <b-row class="why-riadiat order">
      <b-col lg="3" md="6" class="mt-3">
        <div class="box">
          <MoneyCut />
          <h6 class="m-c mt-2">عدم وجود عمولة</h6>
          <p class="text-right p-c">
            نختلف كثيراً عن الاخرين ! منصة رياديات لا تحصل أي عمولةمن الخدمات المقدمة
            ربحك لك بأكمله !
          </p>
        </div>
      </b-col>
      <b-col lg="3" md="6" class="mt-3">
        <div class="box">
          <Bill />
          <h6 class="m-c mt-2">إصدار الفواتير بسهولة</h6>
          <p
            class="text-right p-c"
          >بكل بساطة يمكنك إصدار الفواتير بشكل سهل وسريع في أي وقت و دون أي مجهود</p>
        </div>
      </b-col>
      <b-col lg="3" md="6" class="mt-3">
        <div class="box">
          <ContactUs />
          <h6 class="m-c mt-2">التواصل المباشر مع العملاء</h6>
          <p
            class="text-right p-c"
          >يمكنك التواصل المباشر مع العملاء عن طريق المحادثات حيث يمكنك مشاركة الصور ومقاطع الفيديو والعنوان</p>
        </div>
      </b-col>
      <b-col lg="3" md="6" class="mt-3">
        <div class="box">
          <Announcement />
          <h6 class="m-c mt-2">التسويق لخدمتك ومنتجاتك</h6>
          <p
            class="text-right p-c"
          >سنقوم بالتسويق لمنتجاتك وخدماتك عبر التسويق الإلكتروني حتى تصل لأكبر عدد من العملاء.</p>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
  <script>
import MoneyCut from "./icons/MoneyCut";
import Bill from "./icons/Bill";
import ContactUs from "./icons/ContactUs";
import Announcement from "./icons/Announcement";
export default {
  name: "section-features",
  components: {
    MoneyCut,
    Bill,
    ContactUs,
    Announcement
  }
};
</script>
<style scoped>
.box {
  min-height: 100%;
}
</style>