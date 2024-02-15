<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-12 d-flex flex-column">
        <!-- <div style="background-color: #1fb9b3" class="rounded-3"></div> -->
        <h1 style="font-size: 48px" class="text-dark font-weight-bold">
          <span style="color: #1fb9b3">ضاعف</span> ارباحك معنا
        </h1>
        <p class="text-dark">
          أبداى معانا رحلة التسويق بالعمولة وروجى لمنتجاتك واحصلى على أعلى نسبة
          مقابل كل عملية تسويقية فقط سجلى معانا الان
        </p>
        <router-link
          class="text-light px-5 py-2"
          style="background-color: #1fb9b3; width: fit-content"
          :to="getRouteLocale('affiliate-marketing-home')"
          >تعرف على المزيد
        </router-link>
      </div>
      <div class="col-md-6 col-12">
        <img
          class="img-fluid rounded-3"
          src="../../public/assets/img/laptop-com.png"
          alt="laptop image"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dobule-winning",
};
</script>

<style></style>
