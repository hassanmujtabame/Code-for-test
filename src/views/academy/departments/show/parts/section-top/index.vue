<template>
  <div class="main-top py-5 position-relative">
        <h1 class="text-white px-5 fs-1 position-relative z-index-1"
        style="width: 668px;margin: 0 67px;"
        >ابـــرزي شـــغــفــك وطوري موهـبتـــك في مجال {{itemPage.title}}</h1>
        <p class="text-white  fs-r-24 position-relative z-index-1" :class="{'px-5':!isMobile,'px-1':isMobile}" style="max-width:702px">
        </p>
        <div class="position-absolute top-0 h-100" :class="{'rotateY-180':$i18n.locale!='ar','right-0':$i18n.locale!='ar','left-0':$i18n.locale=='ar'}">
          <img class="h-100" :src="`${publicPath}assets/svg/wave-top.svg`" alt="" />
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
 name:'section-top',
props:{
    itemPage:{}
}
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