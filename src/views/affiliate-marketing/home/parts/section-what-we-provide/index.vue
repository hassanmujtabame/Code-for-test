<template>
  <div style="background: #ffffff" class="p-5">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-5 col-12 p-5 image-part" v-if="!isTablet">
          <img
            class="img-fluid rounded-3"
            src="@/assets/img/affiliate/WhatWeProvide.png"
            alt=""
          />
        </div>
        <div class="col-lg-7 col-12">
          <div class="row justify-content-center mb-4">
            <h3 class="mt-2 title-text">
              نقدم الدعم المستمر للمسوقين بالعمولة لتحقيق النجاح
            </h3>
          </div>

          <div
            class="d-flex align-items-center gap-2"
            v-for="(item, i) in features"
            :key="i"
          >
            <i
              style="color: var(--pc); font-size: 25px; padding-bottom: 19px"
              class="fas fa-check-circle mx-2"
            ></i>
            <p class="col-10 feature-text">
              {{ item }}
            </p>
          </div>
          <div
            v-if="false"
            class="row justify-content-md-start mx-md-4 justify-content-center"
          >
            <button
              class="shadow btn text-light mt-2 px-5 py-2"
              style="
                width: fit-content;
                border-radius: 8px;
                background-color: #1fb9b3;
              "
              @click="$router.push({ name: 'contact-us' })"
            >
              {{ $t("contact-us") }} الأن
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "section-what-we-provide",
  data() {
    return {
      features: [
        "برامج تدريبية للمسوقين بالعمولة لمساعدتهم على الترويج بفعالية.",
        "نقدم أدوات للمسوقين بالعمولة لإدارة حملاتهم التسويقية.",
        "ندعم المسوقين بالعمولة باستمرار.",
      ],
    };
  },
};
</script>

<style scoped>
.title-text {
  font-family: Cairo;
  font-size: 48px;
  font-weight: 800;
  line-height: 72px;
  color: #2cb7b3;
}
.feature-text {
  font-family: Cairo;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  color: #979797;
}
.image-part {
  background-image: url("@/assets/img/Blob.png");
  background-position: right center;
  background-size: auto 100%;
  background-repeat: no-repeat;
}
</style>
