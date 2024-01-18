<template>
  <div style="background: #80808012;">

    <div class="my-5 p-4 container">
      <h2 class="home-section-title text-center"> أهداف شبكة رياديات</h2>
      <div class="row min-riadiat network">
        <div class="col-md-3 mt-2 ">
          <CardGoal :src="`${publicPath}assets/img/a1.svg`">
            جمع والهــــــام وتمكين النســاء
          </CardGoal>

        </div>
        <div class="col-md-3 mt-2 ">
          <CardGoal :src="`${publicPath}assets/img/a2.svg`">
            بناء شبكــــــــــة علاقــــــــــــــات
          </CardGoal>
        </div>
        <div class="col-md-3 mt-2 ">
          <CardGoal :src="`${publicPath}assets/img/a3.png`">
            شراكات مـــــــع
            مختلف الجهـات
          </CardGoal>
        </div>
        <div class="col-md-3 mt-2 ">
          <CardGoal :src="`${publicPath}assets/img/a4.png`">
            تطوير رائـــــدات الاعمــــــــــــــال
          </CardGoal>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CardGoal from './card-item.vue'
export default {
  name: 'network-goals',
  components: {
    CardGoal
  }
}
</script>

