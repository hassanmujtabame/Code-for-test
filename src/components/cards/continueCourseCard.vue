<template>
  <div class="container-lg">
    <div class="gradient-bg position-relative">
      <div class="row">
        <div
          class="col-sm-12 col-md-12 col-lg-6 first-container d-flex flex-column align-items-center"
        >
          <img
            class="img img-fluid"
            src="../../../public/assets/img/mobile-screen 1.png"
            alt="mobile screen img"
          />
        </div>
        <img
          class="abs-img"
          src="../../../public/assets/img/Ellipse 47.png"
          alt=""
        />
        <div
          class="d-flex col-sm-12 justify-content-center align-items-center col-md-12 col-lg-6 flex-column secound-container"
        >
          <h2 class="text-light px-4 px-md-0 py-4 py-md-2 h-3">
            أكملي دوراتك، مراسلاتك وشاركي فـــــــي الشبكة والحاضنة من خلال
            تطبيق رياديــــــات
          </h2>
          <div
            class="py-5 py-md-0 px-4 px-md-0 justify-content-center d-flex justify-content-md-start"
          >
            <a
              class="mx-1"
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                class="img-fluid"
                src="../../../public/assets/img/34-349265_app-store-google-play-svg 1.png"
                alt="google play img"
              />
            </a>
            <a
              class="mx-1"
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                class="img-fluid"
                src="../../../public/assets/img/34-349265_app-store-google-play-svg 3.png"
                alt="google play img"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.gradient-bg {
  height: auto;
  width: 100%;
  background: linear-gradient(90deg, #1fb9b3 0%, #bbd2c5 100%);
}
.first-container {
  position: relative;
}

.abs-img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@media (max-width: 991.98px) {
  .first-container {
    flex-direction: column;

    align-items: center;
  }
}
</style>
