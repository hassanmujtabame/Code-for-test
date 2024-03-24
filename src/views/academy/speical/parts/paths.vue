<template>
  <div class="row min-riadiat my-5 bg academy">
    <div class="col-md-4 mt-2">
      <router-link
        class="router-link"
        :to="getRouteLocale('academy-courses', {}, { type: 'recorded' })"
      >
        <CardItem :src="online" title="مسار الدورات المسجلة">
          هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
          القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة
          التي يقرأها.
        </CardItem>
      </router-link>
    </div>
    <div class="col-md-4 mt-2">
      <router-link
        class="router-link"
        :to="getRouteLocale('academy-courses', {}, { type: 'on-site' })"
      >
        <CardItem :src="location" title=" مسار الدورات الحضورية">
          هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
          القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة
          التي يقرأها.
        </CardItem>
      </router-link>
    </div>
    <div class="col-md-4 mt-2">
      <router-link
        class="router-link"
        :to="getRouteLocale('academy-courses', {}, { type: 'live' })"
      >
        <CardItem :src="layer2Img" title=" مسار الدورات الاون لاين">
          هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي
          القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة
          التي يقرأها.
        </CardItem>
      </router-link>
    </div>
    <!-- <div class="col-md-3 mt-2">
      <CardItem
        :src="`${publicPath}assets/img/heart.png`"
        title="الدعم و المساعدة"
      >
        سنكون معك دائما خطوة بخطوة لمساعددتك على اكمال مساراتك وتقديم الدعم
        والاجابة عى الاستفسارات
      </CardItem>
    </div> -->
  </div>
</template>

<script>
import CardItem from "./path-card.vue";

export default {
  name: "academy-path",
  components: { CardItem },
  data() {
    return {
      layer2Img: require("@/assets/img/academy/layer2.png"),
      location: require("@/assets/img/academy/g100045.png"),
      online: require("@/assets/img/academy/fi_7781407.png"),
    };
  },
};
</script>

<style>
.bg {
  background: linear-gradient(to bottom, #def7f6, #ffffff) !important;
}
</style>
