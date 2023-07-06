<template>
  <div class="container mt-5">
    <h2 class="home-section-title text-center">مزايا أماكن العمل</h2>
    <div class="row min-riadiat academy">
      <div class="col-xl-3 col-md-6 mt-2">
        <CardItem :src="require('@/assets/img/work-spaces/Group.png')">
           أماكن عمل موثوقة
        </CardItem>
      </div>
      <div class="col-xl-3 col-md-6 mt-2">
        <CardItem :src="require('@/assets/img/work-spaces/earth-eco-ecology.png')">
          موجودين في أماكن مختلفة
        </CardItem>
      </div>
      <div class="col-xl-3 col-md-6 mt-2">
        <CardItem :src="require('@/assets/img/work-spaces/money-curreny.png')">
          سعر مميز لأعضاء الشبكة
        </CardItem>
      </div>
      <div class="col-xl-3 col-md-6 mt-2">
        <CardItem :src="require('@/assets/img/work-spaces/women.png')">
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

