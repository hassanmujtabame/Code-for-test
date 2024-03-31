<template>
  <div class="container my-5">
    <div class="row my-5">
      <div class="col-md-4">
        <img
          class="img-fluid"
          src="../../assets/img/company/pic.png"
          alt="logo "
        />
      </div>
      <div class="col-md-8">
        <h6 style="color: #2cb7b3">مدجر الاكتروني</h6>
        <h1>فلاورد</h1>
        <div style="background-color: #fafafa" class="rounded-4">
          <p class="px-3 py-2 fw-bold" style="color: #cf1f3e">عن الشركة</p>
          <p class="px-3 py-2" style="color: #415c5e">
            فلاورد هو متجر الكتروني تأسس في عام 2017 معني بطلب الورود والهدايا،
            نحن فخورون بالتجربة السلسة التي خلقناها لعملائنا التي جعلت عملية
            إرسال الورود والهدايا ممتعة كما استقبالهم. نحن نقوم بشراء الورود
            يومياً من أفضل المزارع في العالم ليتم تنسيقها بطريقة جذابة وفريدة من
            نوعها تناسب جميع المناسبات.
          </p>
        </div>
      </div>
    </div>
    <div class="row my-4">
      <nav>
        <ul class="d-flex align-items-center gap-1">
          <li
            class="rounded-3 py-2"
            :class="{ sp: item.id === id }"
            style="
              list-style: none;
              background-color: #fafafa;
              color: #8a8a8a;
              padding-left: 75px;
              padding-right: 75px;
              cursor: pointer;
            "
            v-for="item in navList"
            :key="item.id"
            @click="id = item.id"
          >
            {{ item.title }}
          </li>
        </ul>
      </nav>
      <div v-if="id === 1"></div>

      <div v-if="id === 2"></div>
      <div v-if="id === 3"></div>
      <div v-if="id === 4"></div>
      <div v-if="id === 5"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "company-page",
  data() {
    return {
      navList: [
        { title: "العروض", id: 1 },
        { title: "الخصومات", id: 2 },
        { title: "الخدمات", id: 3 },
        { title: "المعارض", id: 4 },
        { title: "اماكن", id: 5 },
      ],
      id: 1,
    };
  },
};
</script>

<style>
.sp {
  background-color: #1fb9b3 !important;
  color: white !important;
}
</style>
