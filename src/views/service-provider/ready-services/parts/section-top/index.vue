<template>
  <div class="main-top py-5 position-relative ">
    <b-container>
      <div class="d-flex justify-content-between">

      <div>
      <h1 class="text-white  fs-1 position-relative z-index-1">{{ $t('service') }}</h1>
      <p
        class="text-white fs-r-24 position-relative z-index-1"
        style="max-width:702px"
      >
      يمكنك عرض خدماتك ومهارتك على أصحاب المشاريع و تحديد قيمة الصفقة المناسبة لكلاً منكم</p>
      </div>
        <img class="" :src="`${publicPath}assets/svg/Group 3066.svg`" alt />

      </div>

      <!-- <div
        class="position-absolute top-0"
        :class="{'rotateY-180':$i18n.locale!='ar','right-0':$i18n.locale!='ar','left-0':$i18n.locale=='ar'}"
      >
        <img :src="`${publicPath}assets/svg/wave-top.svg`" alt />
      </div> -->
      <div class="star position-absolute">
        <img class="landing" :src="`${publicPath}assets/svg/start.svg`" alt />
      </div>
      <div class="square position-absolute">
        <img class="landing" :src="`${publicPath}assets/svg/square.svg`" alt />
      </div>
      <div class="star-two position-absolute">
        <img class="landing" :src="`${publicPath}assets/svg/start.svg`" alt />
      </div>
      <div class="star-big position-absolute">
        <img class="landing" :src="`${publicPath}assets/svg/star-big.svg`" alt />
      </div>
    </b-container>

  </div>
</template>

<script>
export default {
  name: "section-top"
};
</script>

<style scoped>
#btn-signup {
  border: 1px solid #ffffff;
  box-shadow: 0px 4px 15px 1px rgb(0 0 0 / 25%);
  border-radius: 8px;
  background: transparent;
  padding: 10px 25px;
  color: white;
}
</style>