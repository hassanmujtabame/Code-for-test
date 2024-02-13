<template>
  <div class="bg-white" :class="[isMobile ? 'p-3' : 'p-5']">
    <div class="netwok-home-header container mx-auto">
      <div class="row">
        <div class="col-12 col-md-6">
          <h1 class="fs-1">أعضاء شبكة رياديات</h1>
          <p class="" style="font-size: 24px">
            رواد ورائدات الأعمال دائما ما نكون اسرة نستفيد من خبرات بعضنا البعض
            فلا تررد بابستكشاف الاخرين او التواصل معهم
          </p>
        </div>
        <div class="col-12 col-md-6" v-if="!isMobile">
          <div style="">
            <img
              class="img-fluid"
              src="@/assets/img/Left -1.png"
              alt="hero image"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "section-header",
};
</script>

<style></style>
