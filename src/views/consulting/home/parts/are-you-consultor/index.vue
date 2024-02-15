<template>
  <div style="background-color: #f6f8f9">
    <div class="container">
      <div class="row mt-5 align-items-center justify-content-between p-3">
        <div class="col-md-6">
          <h2>مستشار ؟</h2>
          <p>
            يمكنك الان الاشتراك معنا كمستشار في منصة رياديات و سنوفر لك العديد
            من المميزات
          </p>
          <div>
            <p>
              <i style="color: var(--pc)" class="fas fa-check-circle mx-2"></i>
              مقابل مادي مجزي
            </p>
            <p>
              <i style="color: var(--pc)" class="fas fa-check-circle mx-2"></i>
              بيئة متميزة
            </p>
            <p>
              <i style="color: var(--pc)" class="fas fa-check-circle mx-2"></i>
              أي مميزات أخرى تشد الشخص لاشتراك
            </p>
            <p class="mb-4">
              <i style="color: var(--pc)" class="fas fa-check-circle mx-2"></i>
              أي مميزات أخرى تشد الشخص لاشتراك
            </p>
            <div class="mb-4">
              <router-link
                :to="getRouteLocale('consulting-register')"
                class="btn-custmer px-5 py-1"
              >
                {{ $t("signup-as-consultant") }}
              </router-link>
            </div>
          </div>
        </div>

        <div class="col-md-6 p-5">
          <img
            class="img-fluid rounded-3"
            src="@/assets/img/new/consultion/second-section.png"
            alt="about image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "section-launch-now",
};
</script>

<style></style>
