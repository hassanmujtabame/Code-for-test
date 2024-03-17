<template>
  <div class="container my-5">
    <div class="row my-5">
      <div class="col-md-6 col-12">
        <h1 class="my-5" style="font-size: 52px; color: #414042">
          ابـــرزي شـــغــفــك وطوري موهـبتـــك في
          <span
            class="position-relative"
            style="color: #414042"
            v-if="id === 1"
          >
            مجال الازيــــــاء

            <img
              style="bottom: -20px; left: 0; width: 100%"
              class="position-absolute"
              src="../../../assets/img/academy/Vector 14.png"
              alt=""
            />
          </span>
        </h1>
        <p style="color: #a6a6a6">
          طوري مهاراتك و أنطلقي في عالم ريادة الاعمال والعمل الحر , أكاديمية
          رياديات ستكون معكِ خطوة بخطوة.
        </p>
        <div class="d-flex align-items-center gap-2">
          <router-link
            style="color: #fff; background-color: #f2631c"
            v-if="token"
            :to="getRouteLocale('academy-instructor-register')"
            class="shadow rounded-3 btn px-5 py-2 mt-2"
          >
            اشترك الان
          </router-link>
          <button
            style="color: #1fb9b3"
            class="btn btn-lg bg-light bg mx-1 px-4 py-2"
          >
            <play-icon class="mx-1" />
            عرض توجيهى
          </button>
        </div>
      </div>
      <div class="col-md-6 col-12">
        <div style="" class="position-relative">
          <img
            class="position-relative"
            style="z-index: 5; height: 400px"
            src="../../../assets/img/academy/118e2066ea 1.png"
            alt=""
          />
          <img
            class="position-absolute"
            style="z-index: 2; left: 95px; top: 0px; height: 400px"
            src="../../../assets/img/academy/victor3.png"
            alt=""
          />
          <img
            class="position-absolute"
            style="z-index: 2; right: -65px; top: 27px"
            src="../../../assets/img/academy/Frame 1171276924.png"
            alt=""
          />
        </div>
      </div>
      <div class="row my-5 align-items-center justify-content-between m-auto">
        <div class="col-12 col-md-5">
          <div>
            <div class="bg-back position-relative">
              <img
                class="img-fluid"
                src="../../../assets/img/academy/Desktop.png"
                alt=""
              />
              <!-- <img
                class="img-fluid"
                src="../../../../../assets/img/academy/Desktop.png"
                alt=""
              /> -->
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 text">
          <h2 v-if="id === 1" style="color: #2cb7b3" class="home-section-title">
            مجال الازياء في الاكاديمية
          </h2>
          <p class="home-section-text">
            باشتراكك في اكاديمية ريايات ستتمكنين من الحصول على الدورات التدريبة
            باسعار مخفضة بدلا من شراء كل دورة على حدى كما انك ستحصلين على العديد
            من المميزات و من أهم هذه المميزات :
          </p>
          <p class="text-list mt-1">
            <i class="m-c fas fa-check-circle mx-2"></i> الحصول على عضوية في
            شبكة رياديات
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
  </div>
</template>

<script>
import playIcon from "@/components/icon-svg/play.vue";

export default {
  name: "category-academdy",
  components: { playIcon },
  data() {
    return {
      id: 1,
    };
  },
};
</script>

<style></style>
