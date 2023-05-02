<template>
  <div class="main-top py-5 position-relative">
        <h1 class="text-white px-5 fs-1 position-relative z-index-1"> {{ $t('my-services') }} </h1>
        <p class="text-white  fs-r-24 position-relative z-index-1" :class="{'px-5':!isMobile,'px-1':isMobile}" style="max-width:702px">
          يقوم مقدمي الخدمات بعرض خدامتهم و مهارتهم و يمكنك شراء هذه الخدمات و التواصل مع اصحابها بكل سهولة
        </p>
        <div class="position-absolute top-0" :class="{'rotateY-180':$i18n.locale!='ar','right-0':$i18n.locale!='ar','left-0':$i18n.locale=='ar'}">
          <img :src="`${publicPath}assets/svg/wave-top.svg`" alt="" />
        </div>
        <div class="star position-absolute">
          <img class="landing" :src="`${publicPath}assets/svg/start.svg`" alt="" />
        </div>
        <div class="square position-absolute">
          <img class="landing" :src="`${publicPath}assets/svg/square.svg`" alt="" />
        </div>
        <div class="star-two position-absolute">
          <img class="landing" :src="`${publicPath}assets/svg/start.svg`" alt="" />
        </div>
        <div class="star-big position-absolute">
          <img class="landing" :src="`${publicPath}assets/svg/star-big.svg`" alt="" />
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