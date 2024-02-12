<template>
  <div class="container mt-5">
    <div class="row align-items-center m-auto">
      <div style="color: #737373" class="col-md-7 col-12 text">
        <h2 class="home-section-title m-c">مقدم خدمة ؟</h2>
        <p class="home-section-text text-black">
          إذا كنت مقدم خدمة وتبحث عن فرصة للوصول إلى عملاء جدد وتنمية أعمالك،
          فإن منصة رياديات هي المكان المناسب لك.
        </p>
        <ul>
          <li>
            وصول إلى قاعدة عملاء واسعة من رواد الأعمال وأصحاب المشاريع الصغيرة
            والمتوسطة من جميع أنحاء العالم.
          </li>
          <li>القدرة على عرض خدماتك ومنتجاتك أمام جمهور مستهدف.</li>
          <li>الحصول على الدعم والتوجيه من فريق رياديات.</li>
        </ul>
        <router-link
          :to="getRouteLocale('service-provider-proposals')"
          class="btn-custmer shadow"
          style="padding: 5px 20px"
          >تقديم خدمة</router-link
        >
      </div>
      <div class="col-md-5 tablet-hide">
        <div class="bg-back position-relative">
          <img
            class="img-fluid"
            src="@/assets/img/new/service-provider/service-provider-section-definition.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "section-definition",
};
</script>

<style>
/* You can add custom styles for this section if needed */
</style>
