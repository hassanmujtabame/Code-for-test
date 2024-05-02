<template>
  <div class="container">
    <div class="row mt-5 align-items-center justify-content-between p-3">
      <div class="col-md-6 p-5">
        <img
          class="img-fluid rounded-3"
          src="@/assets/img/new/consultion/first-section.png"
          alt=""
        />
      </div>

      <div class="col-md-6">
        <h2>انطلق الان</h2>
        <p class="desc-text">
          أشترك في خدمة الاستشارات من رياديات و أستمتع بالكثير من المميزات و
          العروض
        </p>
        <div>
          <p class="desc-point">
            <i style="color: var(--pc)" class="fas fa-check-circle mx-2"></i>
            توجيه خبراء لتحقيق نجاح مشروعك.
          </p>
          <p class="desc-point">
            <i style="color: var(--pc)" class="fas fa-check-circle mx-2"></i>
            تحليل السوق لاكتشاف الفرص.
          </p>
          <p class="desc-point">
            <i style="color: var(--pc)" class="fas fa-check-circle mx-2"></i>
            دعم مالي لبدء أو تطوير مشروعك.
          </p>
          <p class="desc-point">
            <i style="color: var(--pc)" class="fas fa-check-circle mx-2"></i>
            تواصل مع رواد الأعمال وتبادل الأفكار.
          </p>
          <div class="my-4">
            <router-link
              :to="getRouteLocale('consulting-register')"
              class="btn-custmer px-5 py-1"
              >سجلي الآن
            </router-link>
          </div>
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
  color: 414042;
}
.desc-text {
  font-size: 24px;
  color: #979797;
}
.desc-point {
  font-size: 20px;
  color: #979797;
  margin-bottom: 5px;
}
</style>
