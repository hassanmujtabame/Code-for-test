<template>
  <div class="container my-5">
    <h2 class="home-section-title text-center">مزايا أكاديمية رياديات</h2>
    <div class="row min-riadiat academy">
      <div class="col-md-3 mt-2">
        <CardItem :src="`${publicPath}assets/img/Group-academy.png`">
          دورت و معسكرات تدريبة مميـــــــــزة
        </CardItem>
      </div>
      <div class="col-md-3 mt-2">
        <CardItem :src="`${publicPath}assets/img/Group-academy-2.png`">
          جلسة ارشاديــــــــة جماعية عن بعـــــــد
        </CardItem>
      </div>
      <div class="col-md-3 mt-2">
        <CardItem :src="`${publicPath}assets/img/Group-aca-3.png`">
          برامج التــــــــــــدريب يقدمها نخبة مــــــن رائدات
          الاعمــــــــــال
        </CardItem>
      </div>
      <div class="col-md-3 mt-2">
        <CardItem :src="`${publicPath}assets/img/Group-aca-4.png`">
          الانضمام لمجموعات متخصصة فــي مجال اهتمامـــــــــــــــــــك
        </CardItem>
      </div>
    </div>
  </div>
</template>
<script>
import CardItem from "./card-item";
export default {
  name: "academy-features",
  components: {
    CardItem,
  },
};
</script>
