<template>
  <div class="bg-1 py-2 px-5 position-relative mt-5">
    <div class="row align-items-center justify-content-center m-auto p-3">
      <div class="col-md-6 m-auto">
        <h1 style="color: #2cb7b3" class="">هل انت مدرب مميز ؟</h1>
        <p style="color: #737373" class="">
          أكاديمية رياديات تضم العديد من المدربين المميزين في الممكلة و الوطن
          العربي يمكنك أن تنضم لهذه العائلة الان !
        </p>

        <router-link
          :to="getRouteLocale('academy-speical')"
          class="btn border px-4 py-2 text-white bg-transpernt svg-network"
          style="background-color: #1fb9b3"
        >
          {{ $t("knows-more") }}
        </router-link>
      </div>
      <div class="col-md-6 position-relative">
        <img
          class="img-fluid"
          src="../../../../../assets/img/academy/Col.png"
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
  name: "section-top-instructor",
};
</script>

<style>
.bg-1 {
  background-color: #1fb9b432 !important;
}
</style>
