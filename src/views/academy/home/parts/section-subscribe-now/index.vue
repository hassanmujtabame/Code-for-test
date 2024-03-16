<template>
  <div class="container mt-5">
    <div class="row align-items-center justify-content-between m-auto">
      <div class="col-12 col-md-5">
        <div>
          <div class="bg-back position-relative">
            <img
              class="img-fluid"
              src="../../../../../assets/img/academy/Desktop.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 text">
        <h2 style="color: #2cb7b3" class="home-section-title">
          اشتركى فى الاكاديميه الان
        </h2>
        <p class="home-section-text">
          باشتراكك في اكاديمية ريايات ستتمكنين من الحصول على الدورات التدريبة
          باسعار مخفضة بدلا من شراء كل دورة على حدى كما انك ستحصلين على العديد
          من المميزات و من أهم هذه المميزات :
        </p>
        <p class="text-list mt-1">
          <i class="m-c fas fa-check-circle mx-2"></i> الحصول على عضوية في شبكة
          رياديات
        </p>
        <p class="text-list mt-1">
          <i class="m-c fas fa-check-circle mx-2"></i> توفير فرص وظيفية في نفس
          المجال
        </p>
        <p class="text-list mt-1">
          <i class="m-c fas fa-check-circle mx-2"></i> فرصة تقديم الخدمات في
          منصة مقدمي خدمة رياديات
        </p>
        <button
          @click="$router.push({ name: 'academy-subscribe' })"
          class="btn px-5 py-2 btn-customer mt-3"
          style="width: fit-content"
        >
          سجل الأن
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "section-2",
};
</script>

<style scoped>
.home-section-text {
  margin: 0;
}

.text-list {
  font-size: 20px;
  line-height: 24px;
  /* or 120% */

  display: flex;
  align-items: center;
  text-align: start;
  text-transform: capitalize;
  margin: 0;
  color: #979797;
}
</style>
