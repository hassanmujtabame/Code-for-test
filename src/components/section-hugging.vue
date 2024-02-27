<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-6">
        <img
          class="rounded-4 img-fluid shadow"
          src="../../public/assets/img/Rectangle 17777.png"
          alt="image"
        />
      </div>
      <div
        class="col-12 justify-content-center align-items-center justify-content-md-start align-items-md-start d-flex px-5 flex-column col-md-6"
      >
        <h1>برنامج الاحتضان</h1>
        <p style="color: #979797">
          برنامج لأصحاب الأفكار يحتوي على جلسات استشارية وإرشادية وبرامج تدريبية
          وتصميم الهوية التجارية ونموذج العمل دراسة الجدوى والتمويل الاستثمار
        </p>

        <router-link
          v-if="!token"
          :to="getRouteLocale('login')"
          style="background-color: #1fb9b3; width: fit-content"
          class="btn px-5 text-light my-4 rounded-2 py-3"
        >
          {{ $t("login-female") }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "section-hugging-about",
};
</script>

<style></style>
