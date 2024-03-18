<template>
  <div class="row my-5">
    <div class="col-md-6 col-12">
      <h1 class="my-5" style="font-size: 52px; color: #414042">
        ابـــرزي شـــغــفــك وطوري موهـبتـــك في
        <span class="position-relative" style="color: #414042">
          مجال {{ item.name }}

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
  </div>
</template>

<script>
import playIcon from "@/components/icon-svg/play.vue";

export default {
  name: "header-academy",
  components: { playIcon },
  props: {
    item: {
      type: Object,
    },
  },
};
</script>

<style></style>
