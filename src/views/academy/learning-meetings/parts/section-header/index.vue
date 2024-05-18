<template>
  <div class="container">
    <div class="row">
      <div class="right-side col-md-7 position-relative col-12">
        <div>
          <h1 class="title mb-3">{{ $t("learning-meetings") }}</h1>
          <p class="sub-title">
            {{ $t("meetings-seminars-text") }}
          </p>
        </div>
      </div>
      <div class="col-md-5 col-12">
        <img
          class="img-fluid"
          src="../../../../../assets/img/academy/Frame 1171276147.png"
          alt="hero image"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "section-header",
};
</script>

<style scoped>
.title {
  font-family: Cairo;
  font-size: 48px;
  font-weight: 700;
  line-height: 89.95px;
  color: #414042;
}
.sub-title {
  max-width: 85%;
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  color: #455a64;
}
.right-side {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url("/public/assets/img/Path2213.png"),
    url("/public/assets/img/Path2213.png");
  background-size: auto 70%, auto 70%;
  background-position-x: 90%, 85%;
  background-position-y: 25%, 70%;
  background-repeat: no-repeat;
}
</style>
