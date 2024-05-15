<template>
  <div class="container mt-5">
    <div class="row align-items-center m-auto">
      <div class="col-12 col-md-7 text">
        <h2 class="home-section-title">
          {{ $t("riadiat-academy") }}
        </h2>
        <h1 class="m-0 home-section-subtitle">
          {{ $t("your_step_towards_leadership") }}
        </h1>
        <p class="home-section-text mt-5">
          هي أول أكاديمية لريادة الأعمال في السعودية والخليج والعالم العربي.
          تقدم الأكاديمية منصة تعليمية متطورة وسهلة الاستخدام تخدم الجميع حول
          العالم، بقاعات تدريبية مجهزة بأحدث التقنيات وقاعات افتراضية. تقدم
          الأكاديمية مجموعة من الخدمات التعليمية والإرشادية في مجال ريادة
          الأعمال والمهارات المتخصصة، ومدربين مؤهلين في مجالات متعددة
        </p>
      </div>
      <div class="col-12 col-md-5">
        <div>
          <div class="bg-back side-img position-relative">
            <img
              style="z-index: 4"
              class="img-fluid position-relative"
              src="../../../../../assets/img/academy/9f93cdbcfe 1.png"
              alt=""
            />
            <img
              style="position: absolute; bottom: 64px; left: 0px; z-index: 2"
              class="img-fluid position-absolue"
              src="../../../../../assets/img/academy/Frame 1171276924.png"
              alt=""
            />
            <!-- <img
              class="img-fluid"
              src="@/assets/img/new/academy/Group 12.png"
              alt=""
            /> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "step-towards-leadership-section",
};
</script>

<style scoped>
.home-section-title {
  font-family: Cairo;
  font-size: 36px;
  font-weight: 700;
  line-height: 70px;
  color: #414042;
}
.home-section-subtitle {
  font-family: Cairo;
  font-size: 64px;
  font-weight: 700;
  line-height: 70px;
  color: #414042;
}
.home-section-text {
  font-family: Cairo;
  font-size: 24px;
  font-weight: 400;
  line-height: 40px;
}
.side-img {
  background-image: url("../../../../../assets/img/star-Icons.png");
  background-position: left;
  background-size: auto 100%;
  background-repeat: no-repeat;
}
</style>
