<template>
  <div style="background-color: #f6f8f9">
    <div class="container">
      <div class="row mt-5 align-items-center justify-content-between p-3">
        <div class="col-md-6">
          <h2>هل انت مستشار ؟</h2>
          <p class="desc-text">
            يمكنك الان الاشتراك معنا كمستشار في منصة رياديات و سنوفر لك العديد
            من المميزات
          </p>
          <div>
            <p class="point-text">
              <i style="color: var(--pc)" class="fas fa-check-circle mx-2"></i>
              مقابل مادي مجزي
            </p>
            <p class="point-text">
              <i style="color: var(--pc)" class="fas fa-check-circle mx-2"></i>
              بيئة متميزة
            </p>
            <p class="point-text">
              <i style="color: var(--pc)" class="fas fa-check-circle mx-2"></i>
              أي مميزات أخرى تشد الشخص لاشتراك
            </p>
            <p class="point-text">
              <i style="color: var(--pc)" class="fas fa-check-circle mx-2"></i>
              أي مميزات أخرى تشد الشخص لاشتراك
            </p>
            <div class="my-4">
              <router-link
                :to="getRouteLocale('consulting-register')"
                class="btn-custmer px-5 py-1"
              >
                {{ $t("signup-as-consultant") }}
              </router-link>
            </div>
          </div>
        </div>

        <div class="img-side col-md-6 p-5">
          <!-- <img
            class="img-fluid rounded-3"
            src="../../../../../assets/img/consult/baby.png"
            alt="about image"
          /> -->
          <!-- <img
            class="img-fluid rounded-3"
            src="../../../../../assets/img/consult/baby.png"
            alt="about image"
          /> -->
          <!-- <img
            class="img-fluid rounded-3"
            src="../../../../../assets/img/consult/young-pretty-modern-muslim-woman-hijab-working-laptop-office-room-education-online 1.png"
            alt="about image"
          /> -->
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

<style scoped>
h2 {
  font-size: 40px;
  font-weight: 600;
  color: #414042;
}
.desc-text {
  font-size: 24px;
  color: #979797;
}
.point-text {
  font-size: 20px;
  color: #979797;
  margin-bottom: 10px;
}
.img-side {
  min-height: 400px;
  height: 100%;
  background-image: url("../../../../../assets/img/footer/Group 6.png"),
    url("../../../../../assets/img/consult/baby.png"),
    url("../../../../../assets/img/star-Icons.png");
  background-position: center 185px, center, left;
  background-size: 140px auto, auto 400px, auto 430px;
  background-repeat: no-repeat, no-repeat, no-repeat;
}
</style>
