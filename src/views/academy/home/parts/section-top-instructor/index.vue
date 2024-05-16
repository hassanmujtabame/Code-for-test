<template>
  <div class="bg-1 px-5 position-relative mt-5">
    <div class="container">
      <div class="row align-items-center justify-content-center m-auto px-3">
        <div class="col-md-6 m-auto">
          <h1 class="qustion">هل أنت مدرب مميز ؟</h1>
          <p class="section-text">
            أكاديمية رياديات تضم العديد من المدربين المميزين في الممكلة و الوطن
            العربي يمكنك أن تنضم لهذه العائلة الآن !
          </p>

          <router-link
            :to="getRouteLocale('academy-speical')"
            class="btn rounded-3 px-5 py-3 mt-4 text-white bg-transpernt btn-text"
            style="background-color: #1fb9b3"
          >
            {{ $t("knows-more") }}
          </router-link>
        </div>
        <div class="pt-5 col-md-6 position-relative">
          <img
            class="img-fluid"
            src="../../../../../assets/img/academy/Col.png"
            alt=""
          />
        </div>
      </div>

      <div class="star-big position-absolute">
        <img
          height=" 100%"
          width="auto"
          class="landing"
          :src="`${publicPath}assets/svg/star-big.svg`"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "section-top-instructor",
};
</script>

<style>
.qustion {
  font-family: Cairo;
  font-size: 64px;
  font-weight: 700;
  line-height: 72px;
  color: #2cb7b3;
}
.section-text {
  font-family: Cairo;
  font-size: 24px;
  font-weight: 400;
  line-height: 40px;
  color: #737373;
}
.btn-text {
  font-family: Cairo;
  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
  text-align: center;
}
.bg-1 {
  background-color: #f1f5f9 !important;
}
</style>
