<template>
  <div class="main-top p-5 position-relative">
        <h1 class="text-white p-5 fs-1"> خدمات اوفلاين  </h1>
        <button
         id="btn-signup"
          class="mx-5"
        >
          <img src="/assets/svg/heart-circle.svg" />
          سجل الان
        </button>
        <div class="position-absolute anim-hwo-ar-you">
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