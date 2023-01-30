<template>
  <div class="main-top p-5 position-relative">
        <h1 class="text-white p-5 fs-1"> {{ $t('your-ready-services') }} </h1>
        <p class="text-white">
          يمكنك أضافة خدماتك و ما يمكنك تقديمه الى العملاء كخدمات جاهزة يمكنهم طلب شرائها منك
</p>
        <div class="position-absolute top-0" :class="{'rotateY-180':$i18n.locale!='ar','right-0':$i18n.locale!='ar','left-0':$i18n.locale=='ar'}">
          <img src="/assets/img/anim-hwo-ar-you.png" alt="" />
        </div>
        <div class="star position-absolute">
          <img class="landing" src="/assets/img/start.png" alt="" />
        </div>
        <div class="square position-absolute">
          <img class="landing" src="/assets/img/square.png" alt="" />
        </div>
        <div class="star-two position-absolute">
          <img class="landing" src="/assets/img/start.png" alt="" />
        </div>
        <div class="star-big position-absolute">
          <img class="landing" src="/assets/img/star-big.png" alt="" />
        </div>
      </div>
</template>

<script>
export default {
 name:'section-top'
}
</script>

<style scoped>
#btn-signup{
    border: 1px solid #ffffff;
            box-shadow: 0px 4px 15px 1px rgb(0 0 0 / 25%);
            border-radius: 8px;
            background: transparent;
            padding: 10px 25px;
            color: white;
}
</style>