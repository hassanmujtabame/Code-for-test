<template>
  <div class="main-top py-2 px-5 position-relative mt-5">
    <div class="row align-items-center text-center m-auto">
      <div class="col-md-6 col-12 mt-2">
        <div class="img-screen d-none d-hidden d-md-block">
          <img
            class="img-fluid"
            :src="`${publicPath}assets/img/mobile-screen 1.png`"
            alt=""
          />
        </div>
      </div>
      <div class="col-md-6 col-12 mt-4">
        <h2 class="text-white fs-1">
          أكملي دوراتك، مراسلاتك وشاركي فـــــــي الشبكة والحاضنة من خلال تطبيق
          رياديــــــات
        </h2>
        <div
          class="mt-4 flex-wrap gap-2 d-flex justify-content-center align-items-center text-center text-md-start"
        >
          <a href="#">
            <img
              :src="`${publicPath}assets/img/34-349265_app-store-google-play-svg 3.png`"
              alt=""
            />
          </a>
          <a href="#">
            <img
              :src="`${publicPath}assets/img/34-349265_app-store-google-play-svg 1.png`"
              alt=""
            />
          </a>
        </div>
      </div>
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
  name: "section-11",
};
</script>

<style></style>
