<template>
  <div class="container mt-5">
    <h2 class="home-section-title text-center">مزايا أماكن العمل</h2>
    <div class="row min-riadiat academy">
      <div class="col-xl-3 col-md-6 mt-2">
        <CardItem :src="`${publicPath}assets/img/Group-academy.png`">
          مزايا أماكن العمل
        </CardItem>
      </div>
      <div class="col-xl-3 col-md-6 mt-2">
        <CardItem :src="`${publicPath}assets/img/Group-academy-2.png`">
          موجودين في أماكن مختلفة
        </CardItem>
      </div>
      <div class="col-xl-3 col-md-6 mt-2">
        <CardItem :src="`${publicPath}assets/img/Group-aca-3.png`">
          سعر مميز لأعضاء الشبكة
        </CardItem>
      </div>
      <div class="col-xl-3 col-md-6 mt-2">
        <CardItem :src="`${publicPath}assets/img/Group-aca-4.png`">
          تطوير رائـــــدات الاعمــــــــــــــال
        </CardItem>
      </div>
    </div>
  </div>
</template>
<script>
import CardItem from "./card-item";
export default {
  name: "WorkSpaceFeatures",
  components: {
    CardItem,
  },
};
</script>

