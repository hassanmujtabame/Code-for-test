<template>
  <div class="bg-lola py-2 px-5 position-relative mt-5">
    <div
      class="row align-items-center position-relative justify-content-center m-auto p-3"
    >
      <div
        class="d-flex flex-column gap-2 justify-content-center align-items-center"
      >
        <h1 class="">تهادوا تحابو !</h1>
        <div class="gift-text">
          يمكنك الان تقديم دورات تعليمية كهدايا للأصدقاء والاهل<br />
          يمكنك شراء دورة تعليمة واحدة أو الاشتراك في الباقات الخاصة للأكاديمية
        </div>

        <div class="btn-main-style my-5">
          <router-link
            style="background-color: #f2631c"
            :to="getRouteLocale('academy-subscribe')"
            class="shadow py-2 px-5 rounded-3 text-white mt-2"
          >
            أختر الباقة الان
          </router-link>
          <router-link
            style="background-color: #1fb9b3"
            :to="getRouteLocale('academy-courses')"
            class="py-2 rounded-3 px-5 text-white mx-3 mt-2"
          >
            تصفح الدورات
          </router-link>
        </div>
        <img
          style="bottom: 0; right: 0; width: 100px"
          class="position-absolute"
          src="../../../../../assets/img/academy/Vector (1).png"
          alt=""
        />
        <img
          style="top: 0; left: 0; width: 100px"
          class="position-absolute"
          src="../../../../../assets/img/academy/Vector (1).png"
          alt=""
        />
      </div>
    </div>

    <div class="star position-absolute">
      <img class="landing" :src="`${publicPath}assets/svg/start.svg`" alt="" />
    </div>
    <div class="square position-absolute">
      <img class="landing" :src="`${publicPath}assets/img/square.png`" alt="" />
    </div>
    <div class="star-two position-absolute">
      <img class="landing" :src="`${publicPath}assets/svg/start.svg`" alt="" />
    </div>
    <div class="star-big position-absolute">
      <img
        class="landing"
        :src="`${publicPath}assets/svg/star-big.svg`"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "section-10",
};
</script>

<style scoped>
h1 {
  font-family: Cairo;
  font-size: 64px;
  font-weight: 700;
  line-height: 72px;
  text-align: right;
  color: #2cb7b3;
}
.gift-text {
  font-family: Cairo;
  font-size: 24px;
  font-weight: 400;
  line-height: 40px;
  text-align: center !important;
}
.bg-lola {
  background: #f9fafb;
  /* background: linear-gradient(to right, #1fb9b3, #259994); */
}
</style>
