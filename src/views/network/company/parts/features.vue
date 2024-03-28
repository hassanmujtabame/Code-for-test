<template>
  <div class="container mt-5">
    <!-- <h2 style="color: #2cb7b3" class="home-section-title text-center">
      أكاديمية رياديات تساعدكِ أينما تكونين
    </h2> -->
    <div class="row min-riadiat bg academy">
      <div class="col-md-4 mt-2">
        <div>
          <CardItem :src="img1" title="خصومات لأعضاء شبكة رياديات  ">
            تمتع بفوائد حصرية مع خصومات خاصة لأعضاء شبكة رياديات على منصتنا.
            استفد من العروض المميزة والفرص الحصرية التي تساعدك على توسيع نطاق
            أعمالك وتحقيق أهدافك بكل سهولة وفعالية
          </CardItem>
        </div>
      </div>
      <div class="col-md-4 mt-2">
        <div>
          <CardItem :src="img2" title="تقديم خدمات مجانية ">
            استمتع بالفوائد مع تقديم خدمات مجانية على منصتنا. اجذب العملاء بعروض
            مغرية وافتح أبواب الفرص لتوسيع نطاق عملك وزيادة شهرتك في السوق.
          </CardItem>
        </div>
      </div>
      <div class="col-md-4 mt-2">
        <div>
          <CardItem :src="img3" title="تقديم عروض مميزة">
            استفيد من الفرصة لتقديم عروض مميزة ومغرية على منصتنا، والتي تمكنك من
            جذب انتباه العملاء وبناء علاقات قوية معهم، مما يؤدي إلى زيادة
            مبيعاتك وتعزيز مكانتك في السوق.
          </CardItem>
        </div>
      </div>
      <!-- <div class="col-md-4 mt-2">
        <CardItem
          :src="`${publicPath}assets/img/heart.png`"
          title="الدعم و المساعدة"
        >
          سنكون معك دائما خطوة بخطوة لمساعددتك على اكمال مساراتك وتقديم الدعم
          والاجابة عى الاستفسارات
        </CardItem>
      </div> -->
    </div>
  </div>
</template>
<script>
import CardItem from "./card-item";
export default {
  name: "academy-helps-you",
  components: {
    CardItem,
  },
  data() {
    return {
      img1: require("@/assets/img/company/fi_879757.png"),
      img2: require("@/assets/img/company/fi_686317.png"),
      img3: require("@/assets/img/company/fi_1435715.png"),
    };
  },
};
</script>
<style scoped>
.bg {
  background: linear-gradient(to bottom, #def7f6, #ffffff) !important;
}
</style>
