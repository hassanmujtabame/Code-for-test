<template>
    <div class="py-2 position-relative" style="background: #1FB9B3;">
        <div class="row align-items-center text-right m-auto container">
            <div class="col-md-8  mt-4">
                <h2 class="text-white fs-1">
                    أكملي دوراتك، مراسلاتك وشاركي فـــــــي الشبكة والحاضنة من خلال تطبيق رياديــــــات
                </h2>
                <div class="text-right mt-2">
                    <a href="" class="m-2 d-inline-block">
                        <img :src="`${publicPath}assets/img/34-349265_app-store-google-play-svg 3.png`" alt="">
                    </a>
                    <a href="" class="m-2 d-inline-block">
                        <img :src="`${publicPath}assets/img/34-349265_app-store-google-play-svg 1.png`" alt="">
                    </a>
                </div>
            </div>
            <div class="col-md-4 mt-2">
                <div class="img-screen">
                    <img class="img-fluid" :src="`${publicPath}assets/img/mobile-screen 1.png`" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "download-app-banner",
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style>

</style>
