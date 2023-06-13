<template>
  <div class="main-top py-2 px-5 mt-5">
    <div class="row align-items-center text-center m-auto">
      <div class="col-md-6 mt-2">
        <div class="img-screen">
          <img class="img-fluid" :src="`${publicPath}assets/svg/mobile-screen-1.svg`" alt />
        </div>
      </div>
      <div class="col-md-6 mt-4">
        <h2
          class="home-section-title text-white"
        >أكملي دوراتك، مراسلاتك وشاركي فـــــــي الشبكة والحاضنة من خلال تطبيق رياديــــــات</h2>
        <div class="mt-4">
          <a href>
            <img
              :class="{'h-40px':isMobile}"
              :src="`${publicPath}assets/svg/app-store-dark.svg`"
              alt
            />
          </a>
          <a href>
            <img
              :class="{'h-40px':isMobile}"
              :src="`${publicPath}assets/svg/google-play-dark.svg`"
              alt
            />
          </a>
        </div>
      </div>
    </div>

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
  </div>
</template>

<script>
export default {
  name: "section-continue-learning"
};
</script>

<style>
</style>