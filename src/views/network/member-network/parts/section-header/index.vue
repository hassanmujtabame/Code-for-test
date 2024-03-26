<template>
  <div class="bg-white" :class="[isMobile ? 'p-3' : 'p-5']">
    <div class="netwok-home-header container mx-auto">
      <div class="row">
        <div class="col-12 col-md-6">
          <!-- <h1 class="fs-1">أعضاء شبكة رياديات</h1> -->
          <!-- <p class="" style="font-size: 24px">
            رواد ورائدات الأعمال دائما ما نكون اسرة نستفيد من خبرات بعضنا البعض
            فلا تررد بابستكشاف الاخرين او التواصل معهم
          </p> -->
          <div class="text-center">
            <h1 class="m-0" style="font-size: 82px">اعضاء</h1>
            <h1 class="m-0" style="color: #1fb9b3; font-size: 128px">
              رياديات
            </h1>
            <p style="color: #888; font-size: 20px">
              من كل انحاء السعودية و الوطن العربي والعالم
            </p>
            <router-link
              v-if="!token"
              :to="getRouteLocale('login')"
              style="background-color: #f2631c"
              class="btn px-5 text-light py-2"
            >
              انضم الينا
            </router-link>
            <router-link
              v-if="token"
              :to="getRouteLocale('academy-instructor-register')"
              style="background-color: #f2631c"
              class="btn px-5 text-light py-2"
            >
              انضم الينا
            </router-link>
          </div>
        </div>
        <div class="col-12 col-md-6" v-if="!isMobile">
          <div style="">
            <img
              class="img-fluid"
              src="@/assets/img/members.png"
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
