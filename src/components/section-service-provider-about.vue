<template>
  <div class="container mt-5">
    <div class="row align-items-center m-auto">
      <div style="color: #737373" class="col-md-7 col-12 text">
        <h2 style="color: #f2631c" class="home-section-title">
          هل تريد طلب خدمة ؟
        </h2>
        <p class="home-section-text text-black">
          إذا كنت طالب خدمة وتبحث عن فرصة للوصول إلى مقدمين خدماء جدد وتنمية
          أعمالك، فإن منصة رياديات هي المكان المناسب لك.
        </p>
        <ul>
          <li>
            وصول إلى قاعدة مقدمين خدماء واسعة من رواد الأعمال وأصحاب المشاريع
            الصغيرة والمتوسطة من جميع أنحاء العالم.
          </li>
          <li>القدرة على طلب خدماتك أمام جمهور مستهدف.</li>
          <li>الحصول على الدعم والتوجيه من فريق رياديات.</li>
        </ul>
        <router-link
          :to="getRouteLocale('service-provider-proposals')"
          class="btn px-5 py-2 text-light shadow"
          style="background-color: #f2631c"
          >طلب خدمة</router-link
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
  name: "section-definition/2",
};
</script>

<style>
/* You can add custom styles for this section if needed */
</style>
