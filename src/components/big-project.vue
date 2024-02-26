<template>
  <div class="container main-div">
    <div class="row">
      <div class="col-md-6 px-5 py-4 col-12 d-flex flex-column">
        <h1 style="font-size: 52px" class="text-light">عندك مشروع كبير؟</h1>
        <p class="text-light">
          يسعدنا تواصلك معنا ومساعدتك في تأسيس مشروع ريادي كبير ومتميز تواصل
          معنا للوصول لأفضل القرارات ونجاح مشروعك
        </p>
        <div>
          <router-link
            style="background-color: transparent; outline: 1px solid #fff"
            :to="getRouteLocale('contact-us')"
            class="btn text-light px-5 py-2"
          >
            تواصل معنا
          </router-link>
        </div>
      </div>
      <div class="col-md-6 d-flex justify-content-center px-5 py-2 col-12">
        <img
          class="img-fluid"
          src="../assets/img/network/amico.png"
          alt="hero image "
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.main-div {
  background: linear-gradient(to left, #bbd2c5, #1fb9b3);
}
</style>
